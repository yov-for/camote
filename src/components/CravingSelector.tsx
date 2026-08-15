'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { CravingMethod, Dish } from '../types';
import { PERUVIAN_DISHES } from '../data/dishes';
import { Swords, Flame, Heart, X, Trophy, Check, ArrowRight, RotateCcw, Sparkles, SkipForward } from 'lucide-react';

interface CravingSelectorProps {
  method: CravingMethod;
  setMethod: (m: CravingMethod) => void;
  selectedDishes: string[];
  setSelectedDishes: React.Dispatch<React.SetStateAction<string[]>>;
  onNext: () => void;
}

export const CravingSelector: React.FC<CravingSelectorProps> = ({
  method,
  setMethod,
  selectedDishes,
  setSelectedDishes,
  onNext,
}) => {
  // ==========================================
  // ESTADOS - MODO A: BATALLA DE PLATILLOS
  // ==========================================
  const [battleRound, setBattleRound] = useState<number>(1); // 1, 2, 3 or 4 (finished)
  const [currentWinner, setCurrentWinner] = useState<Dish>(PERUVIAN_DISHES[10]); // Ají de Gallina as default starter
  const [currentChallenger, setCurrentChallenger] = useState<Dish>(PERUVIAN_DISHES[1]); // Lomo Saltado
  const [runnersUp, setRunnersUp] = useState<Dish[]>([]);
  const [flashOrange, setFlashOrange] = useState<boolean>(false);
  const [battleWinnerDish, setBattleWinnerDish] = useState<Dish | null>(null);

  // Curated list of matches for the 3-round tournament
  const tournamentChallengers = [
    PERUVIAN_DISHES[8], // Pasta a la Huancaína con Lomo
    PERUVIAN_DISHES[0], // Ceviche Mixto
    PERUVIAN_DISHES[3], // Arroz Chaufa
  ];

  // Platos que el usuario ya descartó con "Ninguno de los dos"
  const [descartados, setDescartados] = useState<string[]>([]);

  // Initialize or reset tournament match
  const handleStartBattleTournament = () => {
    setBattleRound(1);
    setCurrentWinner(PERUVIAN_DISHES[10]); // Ají de Gallina
    setCurrentChallenger(PERUVIAN_DISHES[1]); // Lomo Saltado
    setRunnersUp([]);
    setBattleWinnerDish(null);
    setDescartados([]);
  };

  // Elige el rival del ganador. La garantía dura de esta función es que NUNCA
  // devuelve el mismo plato que ya está en pantalla: sin esto, si el plato
  // elegido coincidía con el retador programado del torneo, la pantalla mostraba
  // la misma opción arriba y abajo.
  const elegirRetador = (ganadorId: string, evitar: string[], preferido?: Dish): Dish => {
    const fuera = new Set([ganadorId, ...evitar]);

    if (preferido && !fuera.has(preferido.id)) return preferido;

    const libre = PERUVIAN_DISHES.find((d) => !fuera.has(d.id));
    if (libre) return libre;

    // No queda ningún plato sin descartar: se relajan los descartes previos,
    // pero jamás se repite el ganador.
    return PERUVIAN_DISHES.find((d) => d.id !== ganadorId) ?? PERUVIAN_DISHES[0];
  };

  // Ninguno de los dos convence: se cambia el par sin declarar ganador y sin
  // consumir la ronda, para no obligar al usuario a elegir algo que no quiere.
  const handleDescartarAmbos = () => {
    const fuera = new Set([...descartados, currentWinner.id, currentChallenger.id]);
    let disponibles = PERUVIAN_DISHES.filter((d) => !fuera.has(d.id));

    if (disponibles.length < 2) {
      // Ya vio prácticamente todo el catálogo: se reinicia el ciclo para que
      // nunca se quede sin platos que mirar.
      disponibles = PERUVIAN_DISHES.filter(
        (d) => d.id !== currentWinner.id && d.id !== currentChallenger.id
      );
      setDescartados([]);
    } else {
      setDescartados(Array.from(fuera));
    }

    // Con dos platos distintos garantizados no hace falta más; si el catálogo
    // fuera tan corto que no alcanzara, se deja el par actual antes que mostrar
    // el mismo plato dos veces.
    if (disponibles.length < 2) return;

    setFlashOrange(true);
    setTimeout(() => setFlashOrange(false), 250);

    setCurrentWinner(disponibles[0]);
    setCurrentChallenger(disponibles[1]);
  };

  const handleBattleChoice = (chosenDish: Dish, loserDish: Dish) => {
    // Flash screen orange briefly
    setFlashOrange(true);
    setTimeout(() => setFlashOrange(false), 250);

    const newRunnersUp = [...runnersUp, loserDish];
    setRunnersUp(newRunnersUp);

    if (battleRound < 3) {
      const nextRound = battleRound + 1;
      // El retador programado del torneo es solo una preferencia: si coincide
      // con el ganador o con algo ya descartado, se busca otro.
      const retador = elegirRetador(
        chosenDish.id,
        [loserDish.id, ...descartados],
        tournamentChallengers[nextRound - 1]
      );
      setBattleRound(nextRound);
      setCurrentWinner(chosenDish);
      setCurrentChallenger(retador);
    } else {
      // Round 3 Complete -> GRAND CHAMPION!
      setBattleWinnerDish(chosenDish);
      setBattleRound(4);

      // Trigger Confetti Celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6F00', '#FFA000', '#4A148C', '#FFFFFF'],
      });

      // Pre-select Champion & Top 2 finalists into the 3 slots for Step 2
      const championId = chosenDish.id;
      const runner1Id = loserDish.id;
      const runner2Id = newRunnersUp[0]?.id || PERUVIAN_DISHES[0].id;

      const finalSelection = Array.from(new Set([championId, runner1Id, runner2Id])).slice(0, 3);
      setSelectedDishes(finalSelection);
    }
  };

  // ==========================================
  // ESTADOS - MODO B: MODO SWIPE (TINDER)
  // ==========================================
  const [swipeIndex, setSwipeIndex] = useState<number>(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  const currentSwipeDish = PERUVIAN_DISHES[swipeIndex % PERUVIAN_DISHES.length];
  const targetSwipeCount = 3;

  const handleSwipeChoice = (liked: boolean) => {
    // Si ya se llegó a los 3 antojos, seguir deslizando no aporta nada: se pasa
    // al Paso 2. Cubre el caso de entrar al modo con una selección ya completa.
    if (selectedDishes.length >= targetSwipeCount) {
      onNext();
      return;
    }

    setSwipeDirection(liked ? 'right' : 'left');

    const seAgrega = liked && !selectedDishes.includes(currentSwipeDish.id);
    if (seAgrega) {
      // El guard va dentro del actualizador, no fuera: con dos toques muy
      // seguidos ambos verían el mismo estado anterior y se colarían un cuarto
      // antojo o el mismo plato repetido.
      setSelectedDishes((prev) =>
        prev.length >= targetSwipeCount || prev.includes(currentSwipeDish.id)
          ? prev
          : [...prev, currentSwipeDish.id]
      );
    }

    // ¿Este "me provoca" es el que completa los tres?
    const completaSeleccion = seAgrega && selectedDishes.length + 1 >= targetSwipeCount;

    setTimeout(
      () => {
        setSwipeDirection(null);
        if (completaSeleccion) {
          onNext();
        } else {
          setSwipeIndex((prev) => prev + 1);
        }
      },
      // Una pausa algo mayor al completar, para que se alcance a ver el tercer
      // plato marcado antes de saltar de pantalla.
      completaSeleccion ? 480 : 220
    );
  };

  // ==========================================
  // CAMBIO DE MODO
  // ==========================================
  // Cada modo es una forma distinta de llegar a los antojos, así que al cambiar
  // se empieza de cero: arrastrar la selección del modo anterior mezclaba platos
  // elegidos con una dinámica dentro de otra, y el contador quedaba descuadrado.
  const handleCambiarModo = (nuevoModo: CravingMethod) => {
    // Tocar la pestaña ya activa no debe borrar nada.
    if (nuevoModo === method) return;

    setMethod(nuevoModo);
    setSelectedDishes([]);

    // Estado del modo batalla
    handleStartBattleTournament();

    // Estado del modo swipe
    setSwipeIndex(0);
    setSwipeDirection(null);
  };

  return (
    <div className={`space-y-6 transition-colors duration-300 rounded-3xl ${flashOrange ? 'bg-[#FF6F00]/10' : ''}`}>
      {/* HEADER PRINCIPAL */}
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#261C14] font-heading">
          ¿Cómo quieres elegir tu antojo hoy?
        </h1>
        <p className="text-xs sm:text-sm text-[#7D6E65] max-w-lg mx-auto font-medium">
          Selecciona la dinámica que más te divierta para encontrar tu almuerzo ideal sin yucas.
        </p>
      </div>

      {/* SELECTOR DE MODO (SEGMENTED CONTROL TABS) */}
      <div className="flex justify-center">
        <div className="bg-[#E8E2D5]/70 p-1.5 rounded-2xl flex items-center gap-1.5 max-w-md w-full shadow-inner">
          <button
            onClick={() => handleCambiarModo('ranking_dinamico')}
            className={`flex-1 py-3 px-3 rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              method === 'ranking_dinamico'
                ? 'bg-[#FF6F00] text-white shadow-md scale-[1.02]'
                : 'text-[#7D6E65] hover:text-[#261C14] hover:bg-white/50'
            }`}
          >
            <Swords className="w-4 h-4" />
            <span>Batalla de platillos</span>
          </button>

          <button
            onClick={() => handleCambiarModo('tinder_swiping')}
            className={`flex-1 py-3 px-3 rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              method === 'tinder_swiping'
                ? 'bg-[#4A148C] text-white shadow-md scale-[1.02]'
                : 'text-[#7D6E65] hover:text-[#261C14] hover:bg-white/50'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Modo Swipe</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* OPCIÓN A: BATALLA DE PLATILLOS (50/50 SPLIT SYMMETRICAL INTERFACE) */}
      {/* ========================================================================= */}
      {method === 'ranking_dinamico' && (
        <div className="space-y-4 max-w-lg mx-auto">
          {battleRound <= 3 ? (
            <div className="space-y-3">
              {/* Indicator Banner */}
              <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-extrabold text-[#FF6F00]">
                <span className="flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-[#FF6F00]" />
                  Ronda {battleRound} de 3
                </span>
                <span className="text-[11px] font-bold text-[#7D6E65]">
                  Toca el plato que más te provoca
                </span>
              </div>

              {/* 50/50 Split Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#E8E2D5] bg-[#FFFDF9] shadow-xl flex flex-col h-[440px]">
                {/* BLOQUE SUPERIOR (OPCIÓN 1) */}
                <button
                  onClick={() => handleBattleChoice(currentWinner, currentChallenger)}
                  className="relative flex-1 w-full group overflow-hidden cursor-pointer focus:outline-none transition-all active:scale-[0.99]"
                >
                  <img
                    src={currentWinner.image}
                    alt={currentWinner.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Etiqueta Negra con Texto Blanco */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="bg-black/90 text-white font-black text-xs sm:text-sm tracking-wider uppercase px-3.5 py-1.5 rounded-lg shadow-lg border border-white/20">
                      {currentWinner.name}
                    </span>
                    <span className="text-[10px] font-bold text-white/90 bg-[#FF6F00] px-2.5 py-1 rounded-md shadow-sm">
                      {currentWinner.tags[0] || 'Popular'}
                    </span>
                  </div>
                </button>

                {/* SEPARADOR CENTRAL (CÍRCULO MORADO FLOTANTE MUY PEQUEÑO CON VS) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-[#4A148C] text-white font-black text-xs flex items-center justify-center shadow-2xl ring-4 ring-white animate-pulse">
                    VS
                  </div>
                </div>

                {/* BLOQUE INFERIOR (OPCIÓN 2) */}
                <button
                  onClick={() => handleBattleChoice(currentChallenger, currentWinner)}
                  className="relative flex-1 w-full group overflow-hidden cursor-pointer focus:outline-none transition-all active:scale-[0.99]"
                >
                  <img
                    src={currentChallenger.image}
                    alt={currentChallenger.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Etiqueta Negra con Texto Blanco */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="bg-black/90 text-white font-black text-xs sm:text-sm tracking-wider uppercase px-3.5 py-1.5 rounded-lg shadow-lg border border-white/20">
                      {currentChallenger.name}
                    </span>
                    <span className="text-[10px] font-bold text-white/90 bg-[#FF6F00] px-2.5 py-1 rounded-md shadow-sm">
                      {currentChallenger.tags[0] || 'Favorito'}
                    </span>
                  </div>
                </button>
              </div>

              {/* NINGUNO DE LOS DOS: cambia el par sin elegir ganador */}
              <button
                onClick={handleDescartarAmbos}
                className="w-full py-3 px-4 rounded-2xl border border-dashed border-[#E8E2D5] bg-white/60 text-[#7D6E65] hover:text-[#261C14] hover:border-[#FF6F00]/40 hover:bg-white font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
                title="Cambiar los dos platos por otros"
              >
                <SkipForward className="w-4 h-4" />
                <span>Ninguno de los dos, muéstrame otros</span>
              </button>
            </div>
          ) : (
            /* CHAMPION CELEBRATION CARD */
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-3xl border-2 border-[#FF6F00] p-6 text-center space-y-4 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-28 h-28 bg-[#FF6F00]/10 rounded-full blur-2xl" />

              <div className="w-16 h-16 rounded-full bg-amber-100 text-[#FF6F00] mx-auto flex items-center justify-center text-3xl shadow-inner animate-bounce">
                🏆
              </div>

              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-widest text-[#FF6F00] bg-[#FF6F00]/10 px-3 py-1 rounded-full">
                  ¡Tenemos un campeón!
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#261C14] font-heading pt-2">
                  Tu antojo principal es el {battleWinnerDish?.name}
                </h2>
                <p className="text-xs text-[#7D6E65]">
                  Se han pre-seleccionado este plato y sus finalistas más cercanos para el Paso 2.
                </p>
              </div>

              {/* Champion Image Card */}
              {battleWinnerDish && (
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-md border border-[#E8E2D5]">
                  <img
                    src={battleWinnerDish.image}
                    alt={battleWinnerDish.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-left text-white">
                    <span className="font-extrabold text-sm">{battleWinnerDish.name}</span>
                    <p className="text-[11px] text-white/80 line-clamp-1">{battleWinnerDish.description}</p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
                <button
                  onClick={onNext}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#FF6F00] hover:bg-[#E66400] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <span>Continuar al Paso 2</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleStartBattleTournament}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl border border-[#E8E2D5] text-[#7D6E65] hover:text-[#261C14] font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer hover:bg-stone-50"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Repetir Batalla</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* OPCIÓN B: MODO SWIPE (TINDER STYLE) */}
      {/* ========================================================================= */}
      {method === 'tinder_swiping' && (
        <div className="flex flex-col items-center justify-center space-y-4 max-w-sm mx-auto">
          {/* Subtle Progress Counter Bar */}
          <div className="w-full flex items-center justify-between text-xs font-extrabold px-3 py-2 rounded-xl bg-purple-50 text-[#4A148C] border border-purple-100">
            <span>ANTOJOS ENCONTRADOS:</span>
            <span className="bg-[#4A148C] text-white text-[11px] px-2.5 py-0.5 rounded-full font-extrabold">
              {selectedDishes.length} de {targetSwipeCount}
            </span>
          </div>

          {/* Floating Tinder Card Canvas */}
          <div className="relative w-full h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSwipeDish.id}
                initial={{ scale: 0.9, opacity: 0, y: 15 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  x: swipeDirection === 'right' ? 140 : swipeDirection === 'left' ? -140 : 0,
                  rotate: swipeDirection === 'right' ? 12 : swipeDirection === 'left' ? -12 : 0,
                }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-[#FFFDF9] rounded-3xl border-2 border-[#E8E2D5] shadow-2xl overflow-hidden flex flex-col justify-between"
              >
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden bg-stone-100">
                  <img
                    src={currentSwipeDish.image}
                    alt={currentSwipeDish.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  <span className="absolute top-3 left-3 bg-[#4A148C] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {currentSwipeDish.categoryLabel}
                  </span>

                  {selectedDishes.includes(currentSwipeDish.id) && (
                    <span className="absolute top-3 right-3 bg-[#FF6F00] text-white text-xs font-black px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                      <Check className="w-3.5 h-3.5" /> En tus antojos
                    </span>
                  )}

                  {/* Etiqueta Inferior Sobre la Imagen con Tipografía Blanca UPPERCASE */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h2 className="text-xl font-black tracking-wide font-heading uppercase text-white drop-shadow-md">
                      {currentSwipeDish.name}
                    </h2>
                  </div>
                </div>

                {/* Clean Subtext Section */}
                <div className="p-4 flex-1 flex flex-col justify-between bg-[#FFFDF9]">
                  <p className="text-xs text-[#7D6E65] font-medium line-clamp-2 leading-relaxed">
                    "{currentSwipeDish.description}"
                  </p>

                  {/* Swipe Action Buttons */}
                  <div className="flex items-center justify-around pt-2">
                    {/* Botón Gris (❌ Paso) */}
                    <button
                      onClick={() => handleSwipeChoice(false)}
                      className="flex items-center gap-1.5 px-5 py-3 rounded-full bg-stone-100 border border-[#E8E2D5] text-[#7D6E65] hover:text-red-600 hover:bg-red-50 hover:border-red-300 font-extrabold text-xs transition-all active:scale-95 cursor-pointer shadow-xs"
                      title="Paso de esta opción"
                    >
                      <X className="w-4 h-4" />
                      <span>❌ Paso</span>
                    </button>

                    {/* Botón Naranja (❤️ Me provoca) */}
                    <button
                      onClick={() => handleSwipeChoice(true)}
                      className="flex items-center gap-1.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF6F00] to-[#FFA000] text-white font-extrabold text-xs shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      title="¡Me provoca este plato!"
                    >
                      <Heart className="w-4 h-4 fill-white" />
                      <span>❤️ Me provoca</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* BOTTOM SHEET / STICKY SELECTION BAR */}
      {/* ========================================================================= */}
      <div className="sticky bottom-4 z-20 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-[#E8E2D5] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 max-w-2xl mx-auto">
        <div className="w-full sm:w-auto text-left">
          <p className="text-xs font-extrabold text-[#261C14] uppercase tracking-wider">
            Antojos Seleccionados ({selectedDishes.length}/3):
          </p>
          <div className="flex flex-wrap items-center gap-1.5 mt-1">
            {selectedDishes.length === 0 ? (
              <span className="text-xs text-[#7D6E65] italic">
                Elige tus platos favoritos con la batalla o swipe
              </span>
            ) : (
              selectedDishes.map((dishId, idx) => {
                const dishObj = PERUVIAN_DISHES.find((d) => d.id === dishId);
                return (
                  <span
                    key={dishId}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FF6F00]/10 text-[#FF6F00] text-xs font-extrabold border border-[#FF6F00]/20"
                  >
                    <span>{idx + 1}°. {dishObj?.name || dishId}</span>
                    <button
                      onClick={() => setSelectedDishes((prev) => prev.filter((id) => id !== dishId))}
                      className="hover:text-red-600 ml-1 cursor-pointer font-bold text-sm"
                      title="Quitar"
                    >
                      ×
                    </button>
                  </span>
                );
              })
            )}
          </div>
        </div>

        <button
          disabled={selectedDishes.length === 0}
          onClick={onNext}
          className={`w-full sm:w-auto px-6 py-3.5 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
            selectedDishes.length > 0
              ? 'bg-[#FF6F00] hover:bg-[#E66400] text-white shadow-lg hover:shadow-xl hover:scale-[1.02]'
              : 'bg-[#E8E2D5] text-[#7D6E65] cursor-not-allowed opacity-70'
          }`}
        >
          <span>Continuar al Paso 2</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
