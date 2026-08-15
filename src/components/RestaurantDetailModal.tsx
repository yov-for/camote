'use client';

import React from 'react';
import { RecommendationResult } from '../types';
import { X, Star, Clock, Navigation, Bike, Share2, Compass } from 'lucide-react';

interface RestaurantDetailModalProps {
  result: RecommendationResult | null;
  onClose: () => void;
}

export const RestaurantDetailModal: React.FC<RestaurantDetailModalProps> = ({
  result,
  onClose,
}) => {
  if (!result) return null;

  const googleMapsUrl = result.google_maps_url || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(result.restaurant_name + ' ' + (result.distrito || 'Lima'))}`;
  const deliveryUrl = result.delivery_url || 'https://www.rappi.com.pe';

  const handleShareWhatsApp = () => {
    const text = `🍠 Te comparto esta recomendación de Camote :v\n\n📍 *${result.restaurant_name}*\n🍲 Plato destacado: *${result.dish_highlight}*\n⭐ Calificación: ${result.context_validators.rating}\n🚗 Distancia: ${result.context_validators.distance_text}\n\nUbicación en mapa: ${googleMapsUrl}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#E8E2D5] my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Image / Cover */}
        <div className="relative h-48 sm:h-56 w-full bg-stone-100 overflow-hidden">
          <img
            src={result.image || 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'}
            alt={result.restaurant_name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-4 right-4 text-white">
            <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#4A148C] text-white px-2.5 py-0.5 rounded-md font-heading">
              Ficha del Local Destino
            </span>
            <h2 className="text-2xl font-extrabold font-heading leading-tight mt-1">
              {result.restaurant_name}
            </h2>
            <p className="text-xs text-white/90">
              {result.address || `${result.distrito || 'Lima'}, Perú`}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-5 bg-[#FFFDF9]">
          {/* Main Highlights */}
          <div className="p-3.5 rounded-2xl bg-white border border-[#E8E2D5] space-y-2 shadow-xs">
            <div className="flex items-center justify-between text-xs font-bold text-[#7D6E65]">
              <span>Plato estrella recomendado:</span>
              <div className="flex items-center gap-1 text-amber-500 font-extrabold">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>{result.context_validators.rating}</span>
              </div>
            </div>
            <p className="text-base font-extrabold text-[#FF6F00] font-heading">
              🍲 {result.dish_highlight}
            </p>
          </div>

          {/* Validation Metadata & Route */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#261C14] font-heading">
              Metadatos de Ruta y Horarios:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-[#261C14]">
              <div className="p-2.5 rounded-xl bg-white border border-[#E8E2D5] flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#FF6F00]" />
                <span>{result.context_validators.distance_text}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[#E8E2D5] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#4A148C]" />
                <span>{result.schedule || 'Atención habitual'}</span>
              </div>
            </div>
          </div>

          {/* Popular Dishes List */}
          {result.popular_dishes && result.popular_dishes.length > 0 && (
            <div className="space-y-1.5">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#261C14] font-heading">
                Otros platillos populares en carta:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {result.popular_dishes.map((pd, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold bg-[#E8E2D5]/50 text-[#261C14] px-2.5 py-1 rounded-lg"
                  >
                    • {pd}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Navigation Buttons (Botones de Salida) */}
          <div className="space-y-2 pt-2 border-t border-[#E8E2D5]">
            <p className="text-xs font-extrabold text-[#7D6E65] uppercase tracking-wider font-heading">
              ¿Cómo quieres ir o pedir al toque?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-[#261C14] hover:bg-black text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <Compass className="w-4 h-4 text-[#FF6F00]" />
                <span>Ir en Google Maps</span>
              </a>

              <a
                href={deliveryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-[#FF6F00] hover:bg-[#E66400] text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <Bike className="w-4 h-4" />
                <span>Pedir por Delivery App</span>
              </a>
            </div>

            <button
              onClick={handleShareWhatsApp}
              className="w-full py-2.5 px-4 rounded-xl border border-[#E8E2D5] bg-white text-[#7D6E65] hover:text-[#261C14] font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer mt-1"
            >
              <Share2 className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Compartir esta ubicación con la mancha</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
