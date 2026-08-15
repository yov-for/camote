'use client';

import React, { useState } from 'react';
import { LocationData } from '../types';
import { LIMA_DISTRICTS } from '../data/dishes';
import { MapPin, Navigation, X, Check, SlidersHorizontal, Compass } from 'lucide-react';

interface LocationSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  location: LocationData;
  setLocation: React.Dispatch<React.SetStateAction<LocationData>>;
}

export const LocationSelectorModal: React.FC<LocationSelectorModalProps> = ({
  isOpen,
  onClose,
  location,
  setLocation,
}) => {
  const [loadingGps, setLoadingGps] = useState<boolean>(false);
  const [gpsError, setGpsError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleRequestRealGps = () => {
    setLoadingGps(true);
    setGpsError(null);

    if (!navigator.geolocation) {
      setGpsError('Tu navegador no soporta geolocalización. Usaremos ubicación simulada.');
      setLoadingGps(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          addressName: 'Mi ubicación actual por GPS',
          distrito: 'GPS Exacto',
          maxDistanceMeters: location.maxDistanceMeters,
          isCustomOrSimulated: false,
        });
        setLoadingGps(false);
        onClose();
      },
      (err) => {
        console.warn('GPS location error:', err.message);
        setGpsError('No pudimos obtener tu ubicación actual. Elige un distrito de Lima.');
        setLoadingGps(false);
      },
      { timeout: 8000 }
    );
  };

  const handleSelectDistrict = (district: typeof LIMA_DISTRICTS[0]) => {
    setLocation({
      latitude: district.lat,
      longitude: district.lng,
      addressName: `${district.name}, Lima`,
      distrito: district.name,
      maxDistanceMeters: location.maxDistanceMeters,
      isCustomOrSimulated: true,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[#E8E2D5] space-y-5 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between border-b border-[#E8E2D5] pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[#FF5A19]/10 text-[#FF5A19]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-[#1F1A17]">
                Ubicación para Recomendaciones
              </h3>
              <p className="text-xs text-[#756A63]">
                Calcularemos la distancia y tiempo exacto
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

        {/* GPS Button */}
        <div className="space-y-2">
          <button
            onClick={handleRequestRealGps}
            disabled={loadingGps}
            className="w-full py-3 px-4 rounded-xl bg-[#FF5A19] hover:bg-[#E04B0E] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
          >
            <Navigation className={`w-4 h-4 ${loadingGps ? 'animate-spin' : ''}`} />
            <span>{loadingGps ? 'Obteniendo GPS...' : 'Usar Mi Ubicación Actual (GPS Real)'}</span>
          </button>

          {gpsError && (
            <p className="text-[11px] text-red-500 text-center font-semibold">
              {gpsError}
            </p>
          )}
        </div>

        {/* District Selector (Simulated Location) */}
        <div className="space-y-2">
          <label className="text-xs font-extrabold uppercase tracking-wider text-[#1F1A17]">
            O selecciona un distrito en Lima (Simulado):
          </label>
          <div className="grid grid-cols-2 gap-2">
            {LIMA_DISTRICTS.map((dist) => {
              const isSelected = location.distrito === dist.name;
              return (
                <button
                  key={dist.id}
                  onClick={() => handleSelectDistrict(dist)}
                  className={`p-2.5 rounded-xl border text-xs font-bold text-left flex items-center justify-between transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#00A86B] bg-[#00A86B]/10 text-[#00A86B]'
                      : 'border-[#E8E2D5] bg-white text-[#1F1A17] hover:border-[#FF5A19]'
                  }`}
                >
                  <span>{dist.name}</span>
                  {isSelected && <Check className="w-3.5 h-3.5" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Distance Radius Slider */}
        <div className="space-y-2 bg-[#FDFBF7] p-3.5 rounded-2xl border border-[#E8E2D5]">
          <div className="flex items-center justify-between text-xs font-extrabold text-[#1F1A17]">
            <span className="flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#FF5A19]" />
              Radio máximo de búsqueda:
            </span>
            <span className="text-[#FF5A19]">
              {(location.maxDistanceMeters / 1000).toFixed(1)} km ({location.maxDistanceMeters}m)
            </span>
          </div>
          <input
            type="range"
            min="500"
            max="5000"
            step="250"
            value={location.maxDistanceMeters}
            onChange={(e) =>
              setLocation((prev) => ({
                ...prev,
                maxDistanceMeters: parseInt(e.target.value, 10),
              }))
            }
            className="w-full accent-[#FF5A19] cursor-pointer"
          />
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-[#1F1A17] hover:bg-black text-white font-extrabold text-xs shadow-md transition-all cursor-pointer"
        >
          Confirmar Ubicación
        </button>
      </div>
    </div>
  );
};
