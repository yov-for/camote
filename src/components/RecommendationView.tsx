'use client';

import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { RecommendationResponse, RecommendationResult } from '../types';
import { Star, MapPin, ExternalLink, Share2, RefreshCw, Trophy, Sparkles, Clock, Heart, CheckCircle2 } from 'lucide-react';

interface RecommendationViewProps {
  data: RecommendationResponse;
  onSelectResult: (result: RecommendationResult) => void;
  onRestart: () => void;
  onSaveToHistory: (result: RecommendationResult) => void;
  isSaved?: boolean;
}

export const RecommendationView: React.FC<RecommendationViewProps> = ({
  data,
  onSelectResult,
  onRestart,
  onSaveToHistory,
  isSaved,
}) => {
  useEffect(() => {
    // Fire celebratory confetti on winner reveal!
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6F00', '#4A148C', '#FFA000', '#FFFDF9']
      });
    } catch (e) {
      // Ignore if canvas confetti isn't supported in environment
    }
  }, []);

  const principal = data.results.find(r => r.priority === 'principal') || data.results[0];
  const secundarias = data.results.filter(r => r.priority === 'secundaria' || r !== principal).slice(0, 2);

  const handleShareWhatsApp = () => {
    if (!principal) return;
    const text = `🍠 ¡Habla causa! Ya elegimos qué comer con Camote :v\n\n👑 Ganador: *${principal.restaurant_name}*\n🍲 Plato estrella: *${principal.dish_highlight}*\n📍 Distancia: ${principal.context_validators.distance_text}\n⭐ Calificación: ${principal.context_validators.rating}\n\n¿Vamos al toque o qué? 👀`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* Top Banner & Dynamic Narrative Justification Phrase */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4A148C]/10 text-[#4A148C] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          ¡Almuerzo Resuelto sin Yuca! :v
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#261C14] font-heading">
          Tu Recomendación Protagonista
        </h1>

        {/* Narrative Justification Phrase */}
        <div className="p-4 rounded-2xl bg-white border-2 border-[#4A148C]/20 shadow-md relative max-w-xl mx-auto text-left flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#4A148C]/10 text-[#4A148C] flex items-center justify-center flex-shrink-0 text-xl font-bold">
            💡
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#4A148C]">
              ¿Por qué es el ganador indiscutible?
            </p>
            <p className="text-sm font-bold text-[#261C14] mt-0.5 leading-relaxed">
              "{data.justification_phrase}"
            </p>
          </div>
        </div>
      </div>

      {/* RECOMENDACIÓN PRINCIPAL (PROTAGONISTA DESTACADA CON MORADO CHICHA) */}
      {principal && (
        <div className="bg-white rounded-3xl border-2 border-[#4A148C] shadow-2xl overflow-hidden relative group">
          {/* Winner Hero Tag - Morado Chicha Premium Header */}
          <div className="bg-gradient-to-r from-[#4A148C] via-[#6A1B9A] to-[#FF6F00] text-white px-4 py-2.5 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2 font-extrabold text-xs sm:text-sm tracking-wide uppercase font-heading">
              <Trophy className="w-4 h-4 text-amber-300" />
              <span>👑 Recomendación Protagonista</span>
            </div>
            <span className="text-[11px] font-bold bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full">
              Opción Ganadora
            </span>
          </div>

          <div className="p-5 sm:p-6 space-y-5">
            {/* Header / Restaurant Info */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold text-[#4A148C] uppercase tracking-wider bg-[#4A148C]/10 px-2 py-0.5 rounded-md">
                    {principal.category || 'Gastronomía Peruana'}
                  </span>
                  <span className="text-xs font-bold text-[#7D6E65]">
                    {principal.distrito || 'Lima'}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#261C14] font-heading leading-tight">
                  {principal.restaurant_name}
                </h2>

                <p className="text-sm font-bold text-[#FF6F00] flex items-center gap-1.5 pt-0.5">
                  <span>🍲 Plato estrella:</span>
                  <span className="underline decoration-[#FF6F00]/30 font-heading">{principal.dish_highlight}</span>
                </p>
              </div>

              {/* Rating Badge */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1 bg-[#FFFDF9] p-3 rounded-2xl border border-[#E8E2D5] flex-shrink-0">
                <div className="flex items-center gap-1 text-amber-500 font-extrabold text-base">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span>{principal.context_validators.rating}</span>
                </div>
                <span className="text-xs font-bold text-[#7D6E65]">
                  Precio: {principal.context_validators.price_range}
                </span>
              </div>
            </div>

            {/* Validation Metadata Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-[#FFFDF9] p-3.5 rounded-2xl border border-[#E8E2D5]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#261C14]">
                <MapPin className="w-4 h-4 text-[#FF6F00] flex-shrink-0" />
                <span>{principal.context_validators.distance_text}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#261C14]">
                <Clock className="w-4 h-4 text-[#4A148C] flex-shrink-0" />
                <span>Horario: {principal.schedule || 'Abierto hoy'}</span>
              </div>
            </div>

            {/* CTAs for Principal */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2">
              <button
                onClick={() => onSelectResult(principal)}
                className="w-full sm:flex-1 py-3.5 px-5 rounded-xl bg-[#FF6F00] hover:bg-[#E66400] text-white font-extrabold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md hover:shadow-lg"
              >
                <span>Ver Mapa y Carta del Local</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              <button
                onClick={() => onSaveToHistory(principal)}
                className={`w-full sm:w-auto py-3.5 px-4 rounded-xl border font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  isSaved
                    ? 'bg-[#4A148C]/10 border-[#4A148C] text-[#4A148C]'
                    : 'bg-white border-[#E8E2D5] text-[#261C14] hover:border-[#261C14]'
                }`}
              >
                {isSaved ? <CheckCircle2 className="w-4 h-4" /> : <Heart className="w-4 h-4 text-[#FF6F00]" />}
                <span>{isSaved ? 'Guardado' : 'Guardar'}</span>
              </button>

              <button
                onClick={handleShareWhatsApp}
                className="w-full sm:w-auto py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs"
                title="Compartir con la mancha por WhatsApp"
              >
                <Share2 className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ALTERNATIVAS (MÁXIMO 2 OPCIONES SECUNDARIAS) */}
      {secundarias.length > 0 && (
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-2">
            <h3 className="text-lg font-extrabold text-[#261C14] font-heading">
              Opciones Secundarias (Máx 2)
            </h3>
            <span className="text-xs text-[#7D6E65] font-semibold">
              Por si acaso quieras comparar
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {secundarias.map((alt, idx) => (
              <div
                key={alt.restaurant_name + idx}
                className="bg-white rounded-2xl border border-[#E8E2D5] p-4 flex flex-col justify-between hover:border-[#FF6F00]/50 transition-all shadow-xs space-y-3"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7D6E65] bg-stone-100 px-2 py-0.5 rounded-md">
                      Secundaria #{idx + 2}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{alt.context_validators.rating}</span>
                    </div>
                  </div>

                  <h4 className="font-extrabold text-base text-[#261C14] font-heading leading-tight">
                    {alt.restaurant_name}
                  </h4>

                  <p className="text-xs font-semibold text-[#FF6F00]">
                    🍲 {alt.dish_highlight}
                  </p>

                  <p className="text-[11px] text-[#7D6E65] flex items-center gap-1 pt-1">
                    <MapPin className="w-3 h-3 text-[#FF6F00]" />
                    <span>{alt.context_validators.distance_text}</span>
                  </p>
                </div>

                <button
                  onClick={() => onSelectResult(alt)}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#FFFDF9] border border-[#E8E2D5] hover:border-[#261C14] text-[#261C14] font-bold text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Ver Ficha del Local</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Restart / New Search Bar */}
      <div className="flex justify-center pt-4">
        <button
          onClick={onRestart}
          className="px-6 py-3.5 rounded-2xl bg-white border border-[#E8E2D5] hover:border-[#FF6F00] text-[#261C14] hover:text-[#FF6F00] font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-all cursor-pointer"
        >
          <RefreshCw className="w-4 h-4 text-[#FF6F00]" />
          <span>Elegir Otro Antojo (Nuevo Cálculo)</span>
        </button>
      </div>
    </div>
  );
};
