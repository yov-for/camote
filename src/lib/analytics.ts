import { ContextData, LocationData, RecommendationResponse, RecommendationResult } from '../types';

// Analítica y favoritos, guardados solo en el navegador (localStorage).
//
// Antes esto vivía en Cloud Firestore. Se eliminó Firebase del proyecto: la única
// base de datos es MongoDB Atlas.
//
// PENDIENTE (segunda y tercera colección, no creadas a propósito por la regla de
// "una sola colección"): para que estos datos sobrevivan a un cambio de navegador
// harían falta las colecciones 'eventos_recomendacion' y 'favoritos' en Mongo,
// con endpoints propios. Hoy solo persistimos 'recomendaciones' en la nube.

export interface RestrictionInfo {
  dietaryRestrictions: string[];
  allergies?: string[];
  priceRange?: string;
}

export interface RecommendationLogDoc {
  id?: string;
  sessionId: string;
  selectedDishes: string[];
  context: ContextData;
  location: LocationData;
  restrictions: RestrictionInfo;
  winnerRestaurant: string;
  winnerDish: string;
  category: string;
  distrito: string;
  diningMode: string;
  priceRange: string;
  createdAt: string;
}

export interface SavedFavoriteDoc {
  id?: string;
  sessionId: string;
  restaurantName: string;
  dishHighlight: string;
  category: string;
  distrito: string;
  rating: number;
  savedAt: string;
}

const CLAVE_LOGS = 'camote_analytics_logs';
const CLAVE_FAVORITOS = 'camote_favoritos';
const MAX_REGISTROS = 50;

function leerLista<T>(clave: string): T[] {
  try {
    const crudo = localStorage.getItem(clave);
    const lista = crudo ? JSON.parse(crudo) : [];
    return Array.isArray(lista) ? (lista as T[]) : [];
  } catch {
    return [];
  }
}

function escribirLista<T>(clave: string, lista: T[]): void {
  try {
    localStorage.setItem(clave, JSON.stringify(lista.slice(0, MAX_REGISTROS)));
  } catch (e) {
    console.warn(`No se pudo guardar "${clave}" en el navegador:`, e);
  }
}

// Identificador de sesión persistente para este navegador.
export const getSessionId = (): string => {
  try {
    let id = localStorage.getItem('camote_session_id');
    if (!id) {
      id = 'sess_' + Math.random().toString(36).substring(2, 11) + '_' + Date.now();
      localStorage.setItem('camote_session_id', id);
    }
    return id;
  } catch {
    return 'sess_temp_' + Date.now();
  }
};

/**
 * Registra que se generó una recomendación, para el panel de analítica.
 */
export const logRecommendationEvent = (
  selectedDishes: string[],
  context: ContextData,
  location: LocationData,
  restrictions: RestrictionInfo,
  recommendation: RecommendationResponse
): void => {
  const principal =
    recommendation.results?.find((r) => r.priority === 'principal') || recommendation.results?.[0];

  const registro: RecommendationLogDoc = {
    id: 'log_' + Math.random().toString(36).substring(2, 11),
    sessionId: getSessionId(),
    selectedDishes,
    context,
    location,
    restrictions,
    winnerRestaurant: principal?.restaurant_name || 'Desconocido',
    winnerDish: principal?.dish_highlight || 'Desconocido',
    category: principal?.category || 'Criollo',
    distrito: location.distrito || principal?.distrito || 'Lima',
    diningMode: context.diningMode,
    priceRange: context.priceRange,
    createdAt: new Date().toISOString(),
  };

  const logs = leerLista<RecommendationLogDoc>(CLAVE_LOGS);
  logs.unshift(registro);
  escribirLista(CLAVE_LOGS, logs);
};

/**
 * Guarda un restaurante como favorito.
 */
export const saveFavorite = (result: RecommendationResult): void => {
  const favorito: SavedFavoriteDoc = {
    id: 'fav_' + Math.random().toString(36).substring(2, 11),
    sessionId: getSessionId(),
    restaurantName: result.restaurant_name,
    dishHighlight: result.dish_highlight,
    category: result.category || 'General',
    distrito: result.distrito || 'Lima',
    rating: result.context_validators?.rating || 4.5,
    savedAt: new Date().toISOString(),
  };

  // Sin duplicados: si ya estaba guardado ese restaurante, se reemplaza.
  const favoritos = leerLista<SavedFavoriteDoc>(CLAVE_FAVORITOS).filter(
    (f) => f.restaurantName !== favorito.restaurantName
  );
  favoritos.unshift(favorito);
  escribirLista(CLAVE_FAVORITOS, favoritos);
};

/**
 * Devuelve los datos que alimentan el panel de analítica.
 */
export const fetchAnalyticsData = (): {
  logs: RecommendationLogDoc[];
  favs: SavedFavoriteDoc[];
} => ({
  logs: leerLista<RecommendationLogDoc>(CLAVE_LOGS),
  favs: leerLista<SavedFavoriteDoc>(CLAVE_FAVORITOS),
});
