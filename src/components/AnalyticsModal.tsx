'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, BarChart3, Database, Sparkles, RefreshCw, Layers, MapPin, Utensils, Flame, Users, Bike, DollarSign } from 'lucide-react';
import { fetchAnalyticsData, RecommendationLogDoc, SavedFavoriteDoc, getSessionId } from '../lib/analytics';

interface AnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AnalyticsModal: React.FC<AnalyticsModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [logs, setLogs] = useState<RecommendationLogDoc[]>([]);
  const [favs, setFavs] = useState<SavedFavoriteDoc[]>([]);
  const [selectedTab, setSelectedTab] = useState<'summary' | 'cravings' | 'logs'>('summary');

  const loadData = () => {
    setLoading(true);
    const result = fetchAnalyticsData();
    setLogs(result.logs);
    setFavs(result.favs);
    setLoading(false);
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Compute analytics metrics
  const totalSearches = logs.length;
  const totalSaved = favs.length;

  // Dish frequency mapping
  const dishCounts: Record<string, number> = {};
  logs.forEach((log) => {
    if (Array.isArray(log.selectedDishes)) {
      log.selectedDishes.forEach((d) => {
        dishCounts[d] = (dishCounts[d] || 0) + 1;
      });
    }
  });

  const sortedDishes = Object.entries(dishCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  // District distribution
  const districtCounts: Record<string, number> = {};
  logs.forEach((log) => {
    const dist = log.distrito || log.location?.distrito || 'Lima';
    districtCounts[dist] = (districtCounts[dist] || 0) + 1;
  });

  const sortedDistricts = Object.entries(districtCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // Dining Mode stats
  const deliveryCount = logs.filter((l) => l.diningMode === 'delivery').length;
  const presencialCount = logs.filter((l) => l.diningMode === 'presencial').length;

  // Price range stats
  const priceEco = logs.filter((l) => l.priceRange === '$').length;
  const priceMid = logs.filter((l) => l.priceRange === '$$').length;
  const priceHigh = logs.filter((l) => l.priceRange === '$$$').length;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bg-[#FFFDF9] rounded-3xl border-2 border-[#4A148C] shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#4A148C] via-[#6A1B9A] to-[#FF6F00] p-4 sm:p-5 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-xl">
                📊
              </div>
              <div>
                <h2 className="text-xl font-extrabold font-heading tracking-tight">
                  Panel de Análisis & Base de Datos
                </h2>
                <p className="text-xs text-white/90 flex items-center gap-1.5 font-medium">
                  <Database className="w-3.5 h-3.5" />
                  <span>Sincronizado con Cloud Firestore DB & LocalStorage</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={loadData}
                disabled={loading}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Actualizar datos"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Subheader & Navigation Tabs */}
          <div className="bg-white border-b border-[#E8E2D5] px-4 py-2.5 flex items-center justify-between gap-2 overflow-x-auto">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setSelectedTab('summary')}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  selectedTab === 'summary'
                    ? 'bg-[#4A148C] text-white shadow-xs'
                    : 'bg-stone-100 text-[#7D6E65] hover:text-[#261C14]'
                }`}
              >
                Resumen de Métricas
              </button>
              <button
                onClick={() => setSelectedTab('cravings')}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  selectedTab === 'cravings'
                    ? 'bg-[#4A148C] text-white shadow-xs'
                    : 'bg-stone-100 text-[#7D6E65] hover:text-[#261C14]'
                }`}
              >
                Antojos & Hábitos
              </button>
              <button
                onClick={() => setSelectedTab('logs')}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  selectedTab === 'logs'
                    ? 'bg-[#4A148C] text-white shadow-xs'
                    : 'bg-stone-100 text-[#7D6E65] hover:text-[#261C14]'
                }`}
              >
                Registro de Consultas ({logs.length})
              </button>
            </div>

            <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#00A86B]/10 text-[#00A86B] flex-shrink-0">
              💾 Guardado en este navegador
            </span>
          </div>

          {/* Body content */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 bg-[#FFFDF9]">
            {loading ? (
              <div className="py-12 text-center space-y-3">
                <RefreshCw className="w-8 h-8 text-[#FF6F00] animate-spin mx-auto" />
                <p className="text-sm font-bold text-[#7D6E65]">
                  Cargando datos analíticos desde la base de datos...
                </p>
              </div>
            ) : (
              <>
                {/* TAB 1: SUMMARY METRICS */}
                {selectedTab === 'summary' && (
                  <div className="space-y-6">
                    {/* Top KPI Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-3.5 rounded-2xl bg-white border border-[#E8E2D5] shadow-xs space-y-1">
                        <span className="text-xs font-bold text-[#7D6E65] flex items-center gap-1">
                          <BarChart3 className="w-3.5 h-3.5 text-[#FF6F00]" />
                          Total Búsquedas
                        </span>
                        <p className="text-2xl font-extrabold text-[#261C14] font-heading">
                          {totalSearches}
                        </p>
                        <p className="text-[10px] text-[#7D6E65]">Recomendaciones pedidas</p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white border border-[#E8E2D5] shadow-xs space-y-1">
                        <span className="text-xs font-bold text-[#7D6E65] flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5 text-[#4A148C]" />
                          Guardados
                        </span>
                        <p className="text-2xl font-extrabold text-[#4A148C] font-heading">
                          {totalSaved}
                        </p>
                        <p className="text-[10px] text-[#7D6E65]">En favoritos</p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white border border-[#E8E2D5] shadow-xs space-y-1">
                        <span className="text-xs font-bold text-[#7D6E65] flex items-center gap-1">
                          <Bike className="w-3.5 h-3.5 text-emerald-600" />
                          Delivery Ratio
                        </span>
                        <p className="text-2xl font-extrabold text-[#261C14] font-heading">
                          {totalSearches > 0
                            ? Math.round((deliveryCount / totalSearches) * 100)
                            : 0}
                          %
                        </p>
                        <p className="text-[10px] text-[#7D6E65]">Prefieren pedir a casa</p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white border border-[#E8E2D5] shadow-xs space-y-1">
                        <span className="text-xs font-bold text-[#7D6E65] flex items-center gap-1">
                          <Database className="w-3.5 h-3.5 text-indigo-600" />
                          Session ID
                        </span>
                        <p className="text-xs font-extrabold text-[#261C14] font-mono truncate pt-1">
                          {getSessionId().substring(0, 12)}...
                        </p>
                        <p className="text-[10px] text-[#7D6E65]">ID de usuario actual</p>
                      </div>
                    </div>

                    {/* Breakdown Graphs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Top Cravings Chart */}
                      <div className="p-4 rounded-2xl bg-white border border-[#E8E2D5] shadow-xs space-y-3">
                        <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#261C14] font-heading flex items-center gap-1.5">
                          <Flame className="w-4 h-4 text-[#FF6F00]" />
                          Platos Más Pedidos / Antojados
                        </h3>

                        {sortedDishes.length === 0 ? (
                          <p className="text-xs text-[#7D6E65] italic py-4 text-center">
                            Aún no hay búsquedas suficientes registradas.
                          </p>
                        ) : (
                          <div className="space-y-2">
                            {sortedDishes.map(([dish, count], idx) => {
                              const pct = Math.round((count / (totalSearches || 1)) * 100);
                              return (
                                <div key={dish} className="space-y-1">
                                  <div className="flex justify-between text-xs font-bold text-[#261C14]">
                                    <span>
                                      #{idx + 1} {dish}
                                    </span>
                                    <span className="text-[#FF6F00]">{count} veces</span>
                                  </div>
                                  <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-gradient-to-r from-[#FF6F00] to-[#FFA000] rounded-full"
                                      style={{ width: `${Math.min(100, pct * 2 + 10)}%` }}
                                    />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>

                      {/* Districts & Dining Mode */}
                      <div className="space-y-4">
                        <div className="p-4 rounded-2xl bg-white border border-[#E8E2D5] shadow-xs space-y-3">
                          <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#261C14] font-heading flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-[#4A148C]" />
                            Distritos de Consulta Más Frecuentes
                          </h3>
                          {sortedDistricts.length === 0 ? (
                            <p className="text-xs text-[#7D6E65] italic py-2 text-center">
                              Sin registros de ubicación.
                            </p>
                          ) : (
                            <div className="flex flex-wrap gap-1.5">
                              {sortedDistricts.map(([dist, count]) => (
                                <span
                                  key={dist}
                                  className="px-2.5 py-1 rounded-xl bg-[#4A148C]/10 text-[#4A148C] text-xs font-bold"
                                >
                                  📍 {dist} ({count})
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-[#E8E2D5] shadow-xs space-y-2">
                          <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#261C14] font-heading flex items-center gap-1.5">
                            <DollarSign className="w-4 h-4 text-emerald-600" />
                            Distribución de Presupuesto
                          </h3>
                          <div className="grid grid-cols-3 gap-2 text-center pt-1">
                            <div className="p-2 rounded-xl bg-stone-50 border border-[#E8E2D5]">
                              <span className="text-[10px] font-bold text-[#7D6E65] block">
                                Económico ($)
                              </span>
                              <span className="text-sm font-extrabold text-[#261C14]">
                                {priceEco}
                              </span>
                            </div>
                            <div className="p-2 rounded-xl bg-stone-50 border border-[#E8E2D5]">
                              <span className="text-[10px] font-bold text-[#7D6E65] block">
                                Regular ($$)
                              </span>
                              <span className="text-sm font-extrabold text-[#261C14]">
                                {priceMid}
                              </span>
                            </div>
                            <div className="p-2 rounded-xl bg-stone-50 border border-[#E8E2D5]">
                              <span className="text-[10px] font-bold text-[#7D6E65] block">
                                Premium ($$$)
                              </span>
                              <span className="text-sm font-extrabold text-[#261C14]">
                                {priceHigh}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: CRAVINGS & HABITS */}
                {selectedTab === 'cravings' && (
                  <div className="space-y-4">
                    <h3 className="text-sm font-extrabold text-[#261C14] font-heading">
                      Ranking Consolidado de Antojos del Usuario
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {sortedDishes.map(([dishName, count], i) => (
                        <div
                          key={dishName}
                          className="p-3.5 rounded-2xl bg-white border border-[#E8E2D5] shadow-xs flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-7 h-7 rounded-full bg-[#FF6F00] text-white font-extrabold text-xs flex items-center justify-center">
                              {i + 1}
                            </span>
                            <div>
                              <p className="text-sm font-extrabold text-[#261C14] font-heading">
                                {dishName}
                              </p>
                              <p className="text-[10px] text-[#7D6E65]">
                                Elegido en {count} consultas de la comunidad
                              </p>
                            </div>
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-[#FF6F00]/10 text-[#FF6F00] font-extrabold text-xs">
                            {count} búsquedas
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 3: RECENT LOGS LIST */}
                {selectedTab === 'logs' && (
                  <div className="space-y-3">
                    <h3 className="text-sm font-extrabold text-[#261C14] font-heading">
                      Registros de Consultas en Firestore Database
                    </h3>

                    {logs.length === 0 ? (
                      <p className="text-xs text-[#7D6E65] italic text-center py-8">
                        Aún no se han generado registros en esta sesión. Realiza tu primer cálculo de antojo para verlo aquí.
                      </p>
                    ) : (
                      <div className="space-y-2.5">
                        {logs.map((log, idx) => (
                          <div
                            key={log.id || idx}
                            className="p-3.5 rounded-2xl bg-white border border-[#E8E2D5] shadow-xs space-y-2"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#4A148C]/10 text-[#4A148C] px-2 py-0.5 rounded-md">
                                Consulta #{logs.length - idx}
                              </span>
                              <span className="text-[10px] text-[#7D6E65]">
                                {log.createdAt
                                  ? new Date(log.createdAt).toLocaleString('es-PE')
                                  : 'Reciente'}
                              </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                              <div>
                                <p className="font-bold text-[#261C14]">
                                  Antojos: {Array.isArray(log.selectedDishes) ? log.selectedDishes.join(', ') : 'Varios'}
                                </p>
                                <p className="text-[11px] text-[#7D6E65]">
                                  Distrito: {log.distrito || 'Lima'} · Presupuesto: {log.priceRange} · Modo: {log.diningMode}
                                </p>
                              </div>

                              <div className="p-2 rounded-xl bg-[#FFFDF9] border border-[#E8E2D5]">
                                <span className="text-[10px] font-bold text-[#4A148C] block uppercase">
                                  🏆 Ganador Generado:
                                </span>
                                <p className="font-extrabold text-[#261C14] font-heading">
                                  {log.winnerRestaurant}
                                </p>
                                <p className="text-[11px] text-[#FF6F00] font-bold">
                                  🍲 {log.winnerDish}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Footer close */}
          <div className="bg-white border-t border-[#E8E2D5] p-3.5 text-right">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-[#261C14] hover:bg-black text-white font-extrabold text-xs transition-colors cursor-pointer"
            >
              Cerrar Panel
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
