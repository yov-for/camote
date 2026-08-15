'use client';

import React from 'react';
import { X, ShieldCheck, Check } from 'lucide-react';

interface OnboardingRestrictionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  restrictions: string[];
  setRestrictions: React.Dispatch<React.SetStateAction<string[]>>;
}

const DIETARY_OPTIONS = [
  { id: 'sin_gluten', label: 'Sin Gluten (Celiaquía)', desc: 'Evitar harinas y trigo' },
  { id: 'vegetariano', label: 'Vegetariano / Vegano', desc: 'Sin carne ni pescado' },
  { id: 'sin_mariscos', label: 'Sin Mariscos / Pescado', desc: 'Alergia a mariscos y conchas' },
  { id: 'sin_cerdo', label: 'Sin Cerdo / Tocino', desc: 'No consumo de porcinos' },
  { id: 'bajo_sodio', label: 'Bajo en Sal / Grasa', desc: 'Comida ligera y natural' },
];

export const OnboardingRestrictionsModal: React.FC<OnboardingRestrictionsModalProps> = ({
  isOpen,
  onClose,
  restrictions,
  setRestrictions,
}) => {
  if (!isOpen) return null;

  const toggleRestriction = (id: string) => {
    if (restrictions.includes(id)) {
      setRestrictions(restrictions.filter(r => r !== id));
    } else {
      setRestrictions([...restrictions, id]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[#E8E2D5] space-y-5 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[#FF5A19]/10 text-[#FF5A19]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-[#1F1A17]">
                Restricciones Alimenticias
              </h3>
              <p className="text-xs text-[#756A63]">
                Guardado fijo para tus recomendaciones
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

        <div className="space-y-2">
          {DIETARY_OPTIONS.map((opt) => {
            const isSelected = restrictions.includes(opt.id);
            return (
              <button
                key={opt.id}
                onClick={() => toggleRestriction(opt.id)}
                className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#FF5A19] bg-[#FF5A19]/5 font-bold text-[#1F1A17]'
                    : 'border-[#E8E2D5] bg-white text-[#756A63] hover:border-[#1F1A17]'
                }`}
              >
                <div>
                  <h4 className="text-xs font-bold">{opt.label}</h4>
                  <p className="text-[10px] opacity-80">{opt.desc}</p>
                </div>
                <div
                  className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-[#FF5A19] border-[#FF5A19] text-white' : 'border-[#E8E2D5]'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5" />}
                </div>
              </button>
            );
          })}
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-[#1F1A17] hover:bg-black text-white font-extrabold text-xs shadow-md transition-all cursor-pointer"
        >
          Guardar Filtros y Cerrar
        </button>
      </div>
    </div>
  );
};
