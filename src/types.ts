export type CravingMethod = 'ranking_dinamico' | 'tinder_swiping';

// Tipo de plan. 'familia' se agregó después que el resto: el catálogo de
// restaurantes todavía no tiene esa etiqueta, así que el motor la trata como
// equivalente a 'social_amigos' (ver EQUIVALENCIAS_MOTIVO en data/restaurants).
export type SearchMotive =
  | 'social_amigos'
  | 'pareja'
  | 'familia'
  | 'estudio_trabajo'
  | 'bajon_individual';

export type MomentoDia = 'manana' | 'tarde' | 'noche';

export type HungerLevel = 'bajo' | 'medio' | 'alto';

export type DiningMode = 'presencial' | 'delivery';

export type PriceRange = '$' | '$$' | '$$$';

export interface Dish {
  id: string;
  name: string;
  category: 'criollo' | 'marino' | 'chifa' | 'fast_food' | 'internacional' | 'fusion';
  categoryLabel: string;
  image: string;
  tags: string[];
  description: string;
  peruvianTrivia?: string;
}

export interface ContextData {
  momentoDia: MomentoDia;
  searchMotive: SearchMotive;
  hungerLevel: HungerLevel;
  diningMode: DiningMode;
  priceRange: PriceRange;
}

export interface LocationData {
  latitude: number;
  longitude: number;
  addressName: string;
  distrito: string;
  maxDistanceMeters: number;
  isCustomOrSimulated: boolean;
}

export interface ContextValidators {
  rating: number;
  distance_text: string;
  price_range: string;
  walking_time?: string;
  driving_time?: string;
}

export interface RecommendationResult {
  priority: 'principal' | 'secundaria';
  restaurant_name: string;
  dish_highlight: string;
  category?: string;
  image?: string;
  address?: string;
  distrito?: string;
  phone?: string;
  context_validators: ContextValidators;
  action_url: string;
  google_maps_url?: string;
  delivery_url?: string;
  popular_dishes?: string[];
  schedule?: string;
}

export interface RecommendationResponse {
  total_recommendations: number;
  justification_phrase: string;
  results: RecommendationResult[];
  error?: string;
  status?: number;
}

export interface ApiRequestPayload {
  user_id: string;
  mood_preference_method: CravingMethod;
  selected_dishes: string[];
  context: {
    search_motive: SearchMotive;
    hunger_level: HungerLevel;
    dining_mode: DiningMode;
  };
  location_simulated: {
    latitude: number;
    longitude: number;
    max_distance_meters: number;
  };
}

export interface SavedRecommendation {
  id: string;
  date: string;
  motive: string;
  winnerName: string;
  winnerDish: string;
  rating: number;
  distanceText: string;
}
