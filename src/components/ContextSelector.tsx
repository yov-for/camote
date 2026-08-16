'use client';

import React from 'react';
import { ContextData, SearchMotive, MomentoDia, HungerLevel, DiningMode, PriceRange } from '../types';
import { Users, Heart, Briefcase, Moon, Home, Sunrise, Sun, UtensilsCrossed, Bike, ArrowLeft, ArrowRight, Sparkles, Zap } from 'lucide-react';

interface ContextSelectorProps {
  context: ContextData;
  setContext: React.Dispatch<React.SetStateAction<ContextData>>;
  onBack: () => void;
  onSubmit: () => void;
}

export const ContextSelector: React.FC<ContextSelectorProps> = ({
  context,
  setContext,
  onBack,
  onSubmit,
}) => {
  const momentos: { id: MomentoDia; title: string; desc: string; icon: React.ReactNode }[] = [
    {
      id: 'manana',
      title: 'Mañana',
      desc: 'Desayuno o media mañana',
      icon: <Sunrise className="w-5 h-5 text-amber-500" />,
    },
    {
      id: 'tarde',
      title: 'Tarde',
      desc: 'Almuerzo o lonche',
      icon: <Sun className="w-5 h-5 text-[#FF6F00]" />,
    },
    {
      id: 'noche',
      title: 'Noche',
      desc: 'Cena o bajón nocturno',
      icon: <Moon className="w-5 h-5 text-indigo-600" />,
    },
  ];

  const motives: { id: SearchMotive; title: string; subtitle: string; icon: React.ReactNode }[] = [
    {
      id: 'bajon_individual',
      title: 'Plan de 1',
      subtitle: 'Solo tú y tu antojo, sin negociar',
      icon: <Moon className="w-5 h-5 text-indigo-600" />,
    },
    {
      id: 'pareja',
      title: 'Cita en Pareja',
      subtitle: 'Chao al clásico "no sé, tú decide..."',
      icon: <Heart className="w-5 h-5 text-[#4A148C]" />,
    },
    {
      id: 'familia',
      title: 'Comida en Familia',
      subtitle: 'Mesa grande y gustos para todos',
      icon: <Home className="w-5 h-5 text-[#00A86B]" />,
    },
    {
      id: 'social_amigos',
      title: 'Quedada con Amigos',
      subtitle: 'Para elegir rápido sin pelear horas :v',
      icon: <Users className="w-5 h-5 text-[#FF6F00]" />,
    },
    {
      id: 'estudio_trabajo',
      title: 'Reunión Ejecutiva',
      subtitle: 'Ambiente para conversar de trabajo',
      icon: <Briefcase className="w-5 h-5 text-amber-600" />,
    },
  ];

  const hungerLevels: { id: HungerLevel; title: string; desc: string; emoji: string }[] = [
    { id: 'bajo', title: 'Piqueo / Ligero', desc: 'Solo para picar algo sin llenarte', emoji: '🥗' },
    { id: 'medio', title: 'Medio / Normal', desc: 'Su plato bien despachado', emoji: '🍛' },
    { id: 'alto', title: '¡Hambre Feroz!', desc: 'Porción bravasa / Bajón total 🦁', emoji: '🦁' },
  ];

  const diningModes: { id: DiningMode; title: string; desc: string; icon: React.ReactNode }[] = [
    { id: 'presencial', title: 'Ir al Local', desc: 'Comer en el huarique o restaurante', icon: <UtensilsCrossed className="w-5 h-5 text-[#FF6F00]" /> },
    { id: 'delivery', title: 'Pedir Delivery', desc: 'Directo a tu puerta sin moverte', icon: <Bike className="w-5 h-5 text-[#4A148C]" /> },
  ];

  const priceRanges: { id: PriceRange; title: string; desc: string }[] = [
    { id: '$', title: ' Económico ($)', desc: 'Menú de la esquina / Huarique' },
    { id: '$$', title: ' Regular ($$)', desc: 'Restaurante promedio sabroso' },
    { id: '$$$', title: ' Premium ($$$)', desc: 'Darse un gustazo bien merecido' },
  ];

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4A148C]/10 text-[#4A148C] text-xs font-bold uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5" />
          Paso 2: Ajusta el Mood
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#261C14] font-heading">
          Variables del Momento
        </h1>
        <p className="text-sm text-[#7D6E65] font-medium">
          Dinos tu situación actual y te traemos la recomendación precisa sin rodeos.
        </p>
      </div>

      {/* SECTION 1: MOMENTO DEL DÍA */}
      <div className="space-y-2 bg-white p-4 sm:p-5 rounded-2xl border border-[#E8E2D5] shadow-xs">
        <label className="text-xs font-extrabold uppercase tracking-wider text-[#261C14]">
          1. ¿En qué momento del día?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
          {momentos.map((item) => {
            const isSelected = context.momentoDia === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setContext(prev => ({ ...prev, momentoDia: item.id }))}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                  isSelected
                    ? 'border-[#FF6F00] bg-[#FF6F00]/5 ring-2 ring-[#FF6F00]/20 shadow-xs'
                    : 'border-[#E8E2D5] bg-white hover:border-[#FF6F00]/50'
                }`}
              >
                <div className="p-2 rounded-lg bg-stone-100 flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-sm text-[#261C14] font-heading">{item.title}</h4>
                  <p className="text-[11px] text-[#7D6E65] mt-0.5">{item.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: TIPO DE PLAN */}
      <div className="space-y-2 bg-white p-4 sm:p-5 rounded-2xl border border-[#E8E2D5] shadow-xs">
        <label className="text-xs font-extrabold uppercase tracking-wider text-[#261C14]">
          2. ¿Qué tipo de plan es?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          {motives.map((item) => {
            const isSelected = context.searchMotive === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setContext(prev => ({ ...prev, searchMotive: item.id }))}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-3 ${
                  isSelected
                    ? 'border-[#FF6F00] bg-[#FF6F00]/5 ring-2 ring-[#FF6F00]/20 shadow-xs'
                    : 'border-[#E8E2D5] bg-white hover:border-[#FF6F00]/50'
                }`}
              >
                <div className="p-2 rounded-lg bg-stone-100 flex-shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#261C14] font-heading">{item.title}</h4>
                  <p className="text-xs text-[#7D6E65] mt-0.5">{item.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: NIVEL DE HAMBRE */}
      <div className="space-y-2 bg-white p-4 sm:p-5 rounded-2xl border border-[#E8E2D5] shadow-xs">
        <label className="text-xs font-extrabold uppercase tracking-wider text-[#261C14]">
          3. Nivel de Hambre del momento:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
          {hungerLevels.map((lvl) => {
            const isSelected = context.hungerLevel === lvl.id;
            return (
              <button
                key={lvl.id}
                onClick={() => setContext(prev => ({ ...prev, hungerLevel: lvl.id }))}
                className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#4A148C] bg-[#4A148C]/5 ring-2 ring-[#4A148C]/20 shadow-xs font-bold'
                    : 'border-[#E8E2D5] bg-white hover:border-[#4A148C]/50'
                }`}
              >
                <span className="text-2xl block">{lvl.emoji}</span>
                <h4 className="font-bold text-xs text-[#261C14] mt-1 font-heading">{lvl.title}</h4>
                <p className="text-[11px] text-[#7D6E65] mt-0.5">{lvl.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* SECTION 3: MODO Y PRESUPUESTO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* MODO */}
        <div className="space-y-2 bg-white p-4 sm:p-5 rounded-2xl border border-[#E8E2D5] shadow-xs">
          <label className="text-xs font-extrabold uppercase tracking-wider text-[#261C14]">
            4. Modo de Consumo:
          </label>
          <div className="space-y-2 pt-1">
            {diningModes.map((mode) => {
              const isSelected = context.diningMode === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => setContext(prev => ({ ...prev, diningMode: mode.id }))}
                  className={`w-full p-3 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#FF6F00] bg-[#FF6F00]/5 ring-2 ring-[#FF6F00]/20 font-bold'
                      : 'border-[#E8E2D5] bg-white hover:border-[#FF6F00]/50'
                  }`}
                >
                  <div className="p-1.5 rounded-lg bg-stone-100">{mode.icon}</div>
                  <div>
                    <h4 className="text-xs font-bold text-[#261C14] font-heading">{mode.title}</h4>
                    <p className="text-[10px] text-[#7D6E65]">{mode.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* PRESUPUESTO */}
        <div className="space-y-2 bg-white p-4 sm:p-5 rounded-2xl border border-[#E8E2D5] shadow-xs">
          <label className="text-xs font-extrabold uppercase tracking-wider text-[#261C14]">
            5. Presupuesto aproximado:
          </label>
          <div className="space-y-2 pt-1">
            {priceRanges.map((pr) => {
              const isSelected = context.priceRange === pr.id;
              return (
                <button
                  key={pr.id}
                  onClick={() => setContext(prev => ({ ...prev, priceRange: pr.id }))}
                  className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#4A148C] bg-[#4A148C] text-white font-bold'
                      : 'border-[#E8E2D5] bg-white text-[#261C14] hover:border-[#4A148C]'
                  }`}
                >
                  <div>
                    <h4 className="text-xs font-bold font-heading">{pr.title}</h4>
                    <p className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-[#7D6E65]'}`}>
                      {pr.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <button
          onClick={onBack}
          className="px-5 py-3 rounded-xl border border-[#E8E2D5] bg-white text-[#7D6E65] hover:text-[#261C14] hover:border-[#261C14] font-bold text-sm flex items-center gap-2 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Atrás
        </button>

        <button
          onClick={onSubmit}
          className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF6F00] to-[#FFA000] text-white font-extrabold text-sm flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-98 transition-all cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          <span>¡Servir la Recomendación Ganadora!</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
