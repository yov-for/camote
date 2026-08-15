'use client';

import React from 'react';
import { SavedRecommendation } from '../types';
import { History, X, Star, Trash2, Calendar, MapPin, ExternalLink } from 'lucide-react';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedItems: SavedRecommendation[];
  onClearHistory: () => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({
  isOpen,
  onClose,
  savedItems,
  onClearHistory,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[#E8E2D5] space-y-5 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[#FF5A19]/10 text-[#FF5A19]">
              <History className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-[#1F1A17]">
                Historial de Recomendaciones Guardadas
              </h3>
              <p className="text-xs text-[#756A63]">
                Tus elecciones pasadas para no olvidarte
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#756A63] hover:text-[#1F1A17] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {savedItems.length === 0 ? (
          <div className="py-8 text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-stone-100 mx-auto flex items-center justify-center text-xl">
              🍠
            </div>
            <p className="text-sm font-bold text-[#1F1A17]">
              Aún no has guardado recomendaciones
            </p>
            <p className="text-xs text-[#756A63]">
              Cuando obtengas una recomendación ganadora, presiona "Guardar" para conservarla aquí.
            </p>
          </div>
        ) : (
          <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
            {savedItems.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-2xl bg-[#FDFBF7] border border-[#E8E2D5] space-y-1.5"
              >
                <div className="flex items-center justify-between text-[11px] text-[#756A63]">
                  <span className="flex items-center gap-1 font-semibold">
                    <Calendar className="w-3 h-3 text-[#FF5A19]" />
                    {item.date}
                  </span>
                  <span className="font-bold text-[#1F1A17] uppercase bg-stone-200/60 px-2 py-0.5 rounded-md">
                    {item.motive}
                  </span>
                </div>

                <h4 className="font-extrabold text-sm text-[#1F1A17]">
                  {item.winnerName}
                </h4>

                <p className="text-xs font-semibold text-[#FF5A19]">
                  🍲 {item.winnerDish}
                </p>

                <div className="flex items-center justify-between text-xs text-[#756A63] pt-1 border-t border-[#E8E2D5]/60">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#00A86B]" />
                    {item.distanceText}
                  </span>
                  <span className="flex items-center gap-1 font-bold text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    {item.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between gap-3 pt-2">
          {savedItems.length > 0 && (
            <button
              onClick={onClearHistory}
              className="py-2.5 px-4 rounded-xl text-red-600 hover:bg-red-50 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
              <span>Borrar Historial</span>
            </button>
          )}

          <button
            onClick={onClose}
            className="ml-auto py-2.5 px-6 rounded-xl bg-[#1F1A17] hover:bg-black text-white font-extrabold text-xs shadow-sm transition-all cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
