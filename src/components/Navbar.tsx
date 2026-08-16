'use client';

import React from 'react';
import { MapPin, History, BarChart3 } from 'lucide-react';
import { LocationData } from '../types';

interface NavbarProps {
  location: LocationData;
  onOpenLocation: () => void;
  onOpenHistory: () => void;
  onOpenAnalytics: () => void;
  onResetToHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  location,
  onOpenLocation,
  onOpenHistory,
  onOpenAnalytics,
  onResetToHome,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#E8E2D5] px-4 py-3 transition-all">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
        {/* Logo & Brand */}
        <button
          onClick={onResetToHome}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
          title="Ir al inicio de Camote"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#FF6F00] to-[#FFA000] flex items-center justify-center text-white text-xl shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
            🍠
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#FF6F00] font-heading leading-none">
              Camote
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#7D6E65] font-semibold leading-tight pt-0.5">
              Elegir qué comer ya no es yuca.
            </span>
          </div>
        </button>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Location Badge */}
          <button
            onClick={onOpenLocation}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#E8E2D5] text-xs font-bold text-[#261C14] hover:border-[#FF6F00] hover:bg-[#FF6F00]/5 transition-colors shadow-xs cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-[#FF6F00]" />
            <span className="max-w-[90px] sm:max-w-[140px] truncate">
              {location.distrito}
            </span>
          </button>

          {/* History Button */}
          <button
            onClick={onOpenHistory}
            className="p-2 rounded-xl bg-white border border-[#E8E2D5] text-[#7D6E65] hover:text-[#261C14] hover:border-[#261C14] transition-colors cursor-pointer"
            title="Historial de antojos guardados"
          >
            <History className="w-4 h-4" />
          </button>

          {/* Analytics DB Button */}
          <button
            onClick={onOpenAnalytics}
            className="p-2 rounded-xl bg-[#4A148C]/10 border border-[#4A148C]/30 text-[#4A148C] hover:bg-[#4A148C] hover:text-white transition-colors cursor-pointer"
            title="Panel DB y Análisis de Datos"
          >
            <BarChart3 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};

