'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PERUVIAN_MICRO_COPYS, PERUVIAN_TRIVIA } from '../data/dishes';
import { ChefHat, Lightbulb, RefreshCw } from 'lucide-react';

interface LoadingScreenProps {
  apiReady: boolean;
  onComplete: () => void;
  errorMsg?: string | null;
  onRetry?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  apiReady,
  onComplete,
  errorMsg,
  onRetry,
}) => {
  const [secondsRemaining, setSecondsRemaining] = useState<number>(20); // 20s processing wait
  const [microCopyIndex, setMicroCopyIndex] = useState<number>(0);
  const [triviaIndex, setTriviaIndex] = useState<number>(0);

  // 20 second timer interval
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Microcopy rotation every 2 seconds
  useEffect(() => {
    const microCopyTimer = setInterval(() => {
      setMicroCopyIndex((prev) => (prev + 1) % PERUVIAN_MICRO_COPYS.length);
    }, 2000);

    return () => clearInterval(microCopyTimer);
  }, []);

  // When timer reaches 0 AND api response is ready, proceed!
  useEffect(() => {
    if (secondsRemaining === 0 && apiReady && !errorMsg) {
      onComplete();
    }
  }, [secondsRemaining, apiReady, errorMsg, onComplete]);

  const progressPercent = Math.min(100, Math.round(((20 - secondsRemaining) / 20) * 100));

  if (errorMsg) {
    return (
      <div className="max-w-md mx-auto my-12 p-6 bg-white rounded-3xl border-2 border-red-200 shadow-xl text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-500 mx-auto flex items-center justify-center text-3xl">
          🍳
        </div>
        <h2 className="text-xl font-extrabold text-[#261C14] font-heading">
          ¡Se nos chispoteó algo en la cocina! :v
        </h2>
        <p className="text-sm text-[#7D6E65]">
          {errorMsg}
        </p>
        <button
          onClick={onRetry}
          className="w-full py-3.5 px-6 rounded-xl bg-[#FF6F00] hover:bg-[#E66400] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Intentar de nuevo, causa</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto my-6 p-6 sm:p-8 bg-white rounded-3xl border border-[#E8E2D5] shadow-xl text-center space-y-6">
      {/* Animated Mascot / Icon */}
      <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-4 border-dashed border-[#FF6F00]/30"
        />
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#FF6F00] to-[#FFA000] text-white text-3xl flex items-center justify-center shadow-lg"
        >
          🍠
        </motion.div>
        <div className="absolute -bottom-1 -right-1 bg-[#4A148C] text-white p-1.5 rounded-full shadow-md">
          <ChefHat className="w-4 h-4" />
        </div>
      </div>

      {/* Main Title & Rotating Micro-copy */}
      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#261C14] font-heading">
          Sancochando tu mejor opción...
        </h2>
        <div className="h-10 flex items-center justify-center">
          <motion.p
            key={microCopyIndex}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-sm font-extrabold text-[#FF6F00]"
          >
            "{PERUVIAN_MICRO_COPYS[microCopyIndex]}"
          </motion.p>
        </div>
      </div>

      {/* Progress Bar & Timer Badge */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-[#7D6E65]">
          <span>Calculando con sazón de la buena</span>
          <span className="text-[#4A148C] font-extrabold">{progressPercent}%</span>
        </div>
        <div className="w-full h-3.5 bg-[#E8E2D5]/60 rounded-full overflow-hidden p-0.5">
          <motion.div
            className="h-full bg-gradient-to-r from-[#FF6F00] via-[#FFA000] to-[#4A148C] rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="text-[11px] text-[#7D6E65] font-semibold pt-1">
          {secondsRemaining > 0
            ? `Quedan ${secondsRemaining}s de reposo en cocina...`
            : '¡Servido y listo para comer!'}
        </p>
      </div>

      {/* Peruvian Trivia Interactive Box */}
      <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#E8E2D5] text-left space-y-2 relative">
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#4A148C] flex items-center gap-1">
            <Lightbulb className="w-3.5 h-3.5" />
            Dato curioso criollo
          </span>
          <button
            onClick={() => setTriviaIndex((prev) => (prev + 1) % PERUVIAN_TRIVIA.length)}
            className="text-[10px] font-bold text-[#7D6E65] hover:text-[#261C14] underline cursor-pointer"
          >
            Siguiente dato 💡
          </button>
        </div>
        <p className="text-xs text-[#261C14] font-medium leading-relaxed">
          {PERUVIAN_TRIVIA[triviaIndex]}
        </p>
      </div>
    </div>
  );
};
