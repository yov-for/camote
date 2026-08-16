'use client';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { CravingSelector } from './components/CravingSelector';
import { ContextSelector } from './components/ContextSelector';
import { LoadingScreen } from './components/LoadingScreen';
import { RecommendationView } from './components/RecommendationView';
import { RestaurantDetailModal } from './components/RestaurantDetailModal';
import { LocationSelectorModal } from './components/LocationSelectorModal';
import { HistoryModal } from './components/HistoryModal';
import { AnalyticsModal } from './components/AnalyticsModal';
import { logRecommendationEvent, saveFavorite } from './lib/analytics';
import { guardarRecomendacion, obtenerUltimaRecomendacion } from './lib/api';

import {
  CravingMethod,
  ContextData,
  LocationData,
  RecommendationResponse,
  RecommendationResult,
  SavedRecommendation,
} from './types';

export default function App() {
  const [step, setStep] = useState<'craving' | 'context' | 'loading' | 'recommendation'>('craving');
  const [method, setMethod] = useState<CravingMethod>('ranking_dinamico');
  const [selectedDishes, setSelectedDishes] = useState<string[]>(['ceviche']);
  const [userId, setUserId] = useState<string>('usr_camote_default');

  const [context, setContext] = useState<ContextData>({
    momentoDia: 'tarde',
    searchMotive: 'social_amigos',
    hungerLevel: 'alto',
    diningMode: 'presencial',
    priceRange: '$$',
  });

  const [location, setLocation] = useState<LocationData>({
    latitude: -12.046374,
    longitude: -77.042793,
    addressName: 'Miraflores, Lima',
    distrito: 'Miraflores',
    maxDistanceMeters: 2000,
    isCustomOrSimulated: true,
  });

  // PENDIENTE (segunda colección, no creada a propósito): los favoritos siguen
  // viviendo en localStorage, así que se pierden si el usuario cambia de
  // navegador. Haría falta una colección 'favoritos'. Hoy solo persistimos
  // 'recomendaciones'.
  const [savedItems, setSavedItems] = useState<SavedRecommendation[]>([]);

  useEffect(() => {
    try {
      let uid = localStorage.getItem('camote_user_id');
      if (!uid) {
        uid = 'usr_camote_' + Math.random().toString(36).substring(2, 9);
        localStorage.setItem('camote_user_id', uid);
      }
      setUserId(uid);

      const savedFavs = localStorage.getItem('camote_saved');
      if (savedFavs) setSavedItems(JSON.parse(savedFavs));

      // Recuperar última recomendación guardada en MongoDB Atlas para este usuario
      obtenerUltimaRecomendacion(uid)
        .then((ultima) => {
          if (ultima && ultima.restaurante_principal) {
            setApiResponse({
              total_recommendations: (ultima.opciones_alternativas?.length || 0) + 1,
              justification_phrase: ultima.frase_justificacion,
              results: [ultima.restaurante_principal, ...(ultima.opciones_alternativas || [])],
            });
            if (ultima.antojos_elegidos && ultima.antojos_elegidos.length > 0) {
              setSelectedDishes(ultima.antojos_elegidos);
            }
            setStep('recommendation');
            setApiReady(true);
          }
        })
        .catch((err) => {
          console.warn('No se pudo recuperar recomendación previa de MongoDB:', err);
        });
    } catch {
      // Ignore in non-browser environment
    }
  }, []);

  const [apiResponse, setApiResponse] = useState<RecommendationResponse | null>(null);
  const [apiReady, setApiReady] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const [selectedResultModal, setSelectedResultModal] = useState<RecommendationResult | null>(null);
  const [isLocationOpen, setIsLocationOpen] = useState<boolean>(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState<boolean>(false);

  // Save recommendations to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('camote_saved', JSON.stringify(savedItems));
    } catch (e) {
      console.warn('Failed to save items to localStorage');
    }
  }, [savedItems]);

  const handleStartRecommendation = async () => {
    setStep('loading');
    setApiReady(false);
    setApiError(null);
    setApiResponse(null);

    const activeUserId = userId || 'usr_camote_default';

    const payload = {
      user_id: activeUserId,
      mood_preference_method: method,
      selected_dishes: selectedDishes.length > 0 ? selectedDishes : ['ceviche'],
      context: {
        momento_dia: context.momentoDia,
        search_motive: context.searchMotive,
        hunger_level: context.hungerLevel,
        dining_mode: context.diningMode,
      },
      location_simulated: {
        latitude: location.latitude,
        longitude: location.longitude,
        max_distance_meters: location.maxDistanceMeters,
      },
    };

    try {
      const res = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        if (res.status === 502) {
          setApiError('Tuvimos un problema en la cocina. ¡Intenta de nuevo!');
          return;
        }
      }

      const data: RecommendationResponse = await res.json();

      if (data.error && data.status === 502) {
        setApiError(data.error);
        return;
      }

      // Guardar en MongoDB Atlas y volver a consultar para consistencia real
      const principal = data.results.find((r) => r.priority === 'principal') || data.results[0];
      const alternativas = data.results.filter((r) => r !== principal);

      try {
        await guardarRecomendacion({
          usuario_id: activeUserId,
          antojos_elegidos: selectedDishes.length > 0 ? selectedDishes : ['ceviche'],
          momento_dia: context.momentoDia,
          motivo_busqueda: context.searchMotive,
          nivel_hambre: context.hungerLevel,
          modalidad: context.diningMode,
          distrito: location.distrito,
          frase_justificacion: data.justification_phrase,
          restaurante_principal: principal,
          opciones_alternativas: alternativas,
        });

        const guardada = await obtenerUltimaRecomendacion(activeUserId);
        if (guardada && guardada.restaurante_principal) {
          setApiResponse({
            total_recommendations: (guardada.opciones_alternativas?.length || 0) + 1,
            justification_phrase: guardada.frase_justificacion,
            results: [guardada.restaurante_principal, ...(guardada.opciones_alternativas || [])],
          });
        } else {
          setApiResponse(data);
        }
      } catch (dbErr) {
        console.warn('Aviso: la recomendación se mostrará en pantalla aunque MongoDB no respondió:', dbErr);
        setApiResponse(data);
      }

      setApiReady(true);

      // Registro local para el panel de analítica
      logRecommendationEvent(selectedDishes, context, location, data);
    } catch (err: any) {
      console.error('API call failed:', err);
      setApiError('Tuvimos un problema en la cocina. ¡Intenta de nuevo!');
    }
  };

  const handleSaveToHistory = (result: RecommendationResult) => {
    const newItem: SavedRecommendation = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('es-PE', { day: 'numeric', month: 'short' }),
      motive: context.searchMotive,
      winnerName: result.restaurant_name,
      winnerDish: result.dish_highlight,
      rating: result.context_validators.rating,
      distanceText: result.context_validators.distance_text,
    };

    setSavedItems((prev) => [newItem, ...prev.filter((i) => i.winnerName !== result.restaurant_name)]);

    saveFavorite(result);
  };

  const isPrincipalSaved = apiResponse?.results?.some(
    (r) => r.priority === 'principal' && savedItems.some((s) => s.winnerName === r.restaurant_name)
  );

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#261C14] flex flex-col font-sans selection:bg-[#FF6F00] selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        location={location}
        onOpenLocation={() => setIsLocationOpen(true)}
        onOpenHistory={() => setIsHistoryOpen(true)}
        onOpenAnalytics={() => setIsAnalyticsOpen(true)}
        onResetToHome={() => {
          setStep('craving');
        }}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {step === 'craving' && (
          <CravingSelector
            method={method}
            setMethod={setMethod}
            selectedDishes={selectedDishes}
            setSelectedDishes={setSelectedDishes}
            onNext={() => setStep('context')}
          />
        )}

        {step === 'context' && (
          <ContextSelector
            context={context}
            setContext={setContext}
            onBack={() => setStep('craving')}
            onSubmit={handleStartRecommendation}
          />
        )}

        {step === 'loading' && (
          <LoadingScreen
            apiReady={apiReady}
            onComplete={() => setStep('recommendation')}
            errorMsg={apiError}
            onRetry={handleStartRecommendation}
          />
        )}

        {step === 'recommendation' && apiResponse && (
          <RecommendationView
            data={apiResponse}
            onSelectResult={(result) => setSelectedResultModal(result)}
            onRestart={() => setStep('craving')}
            onSaveToHistory={handleSaveToHistory}
            isSaved={isPrincipalSaved}
          />
        )}
      </main>

      {/* Modals */}
      <RestaurantDetailModal
        result={selectedResultModal}
        onClose={() => setSelectedResultModal(null)}
      />

      <LocationSelectorModal
        isOpen={isLocationOpen}
        onClose={() => setIsLocationOpen(false)}
        location={location}
        setLocation={setLocation}
      />

      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        savedItems={savedItems}
        onClearHistory={() => setSavedItems([])}
      />

      <AnalyticsModal
        isOpen={isAnalyticsOpen}
        onClose={() => setIsAnalyticsOpen(false)}
      />

      {/* Footer */}
      <footer className="border-t border-[#E8E2D5] py-5 px-4 text-center text-xs text-[#7D6E65] bg-white/60 mt-auto">
        <div className="max-w-2xl mx-auto space-y-1">
          <p className="font-extrabold text-[#FF6F00] font-heading text-sm">
            Camote — Elegir qué comer ya no es yuca.
          </p>
          <p className="font-medium text-[#7D6E65] leading-relaxed">
            Diseñado para simplificar tus decisiones gastronómicas. Te recomendamos el plato y el lugar ideal según tu presupuesto, compañía y estado de ánimo del momento.
          </p>
        </div>
      </footer>
    </div>
  );
}

