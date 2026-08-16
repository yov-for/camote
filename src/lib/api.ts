import { RecommendationResult } from '../types';

export interface RecomendacionDoc {
  id: string;
  usuario_id: string;
  antojos_elegidos: string[];
  momento_dia?: string;
  motivo_busqueda: string;
  nivel_hambre: string;
  modalidad: string;
  distrito: string;
  frase_justificacion: string;
  restaurante_principal: RecommendationResult;
  opciones_alternativas: RecommendationResult[];
  creado_en: string;
}

export interface GuardarRecomendacionInput {
  usuario_id: string;
  antojos_elegidos: string[];
  momento_dia?: string;
  motivo_busqueda: string;
  nivel_hambre: string;
  modalidad: string;
  distrito?: string;
  frase_justificacion: string;
  restaurante_principal: RecommendationResult;
  opciones_alternativas: RecommendationResult[];
}

/**
 * Obtiene la última recomendación generada para un usuario específico.
 */
export async function obtenerUltimaRecomendacion(usuarioId: string): Promise<RecomendacionDoc | null> {
  const res = await fetch(`/api/recomendaciones?usuario_id=${encodeURIComponent(usuarioId)}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('No pudimos recuperar tu última recomendación.');
  }
  const data = await res.json();
  return (data.recomendaciones && data.recomendaciones.length > 0) ? data.recomendaciones[0] : null;
}

/**
 * Obtiene la lista de recomendaciones guardadas (con filtro opcional de usuario).
 */
export async function listarRecomendaciones(usuarioId?: string): Promise<RecomendacionDoc[]> {
  const url = usuarioId 
    ? `/api/recomendaciones?usuario_id=${encodeURIComponent(usuarioId)}`
    : '/api/recomendaciones';
    
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('No pudimos leer las recomendaciones guardadas.');
  }
  const data = await res.json();
  return data.recomendaciones as RecomendacionDoc[];
}

/**
 * Guarda una nueva recomendación con su resultado y alternativas en MongoDB Atlas.
 */
export async function guardarRecomendacion(
  entrada: GuardarRecomendacionInput
): Promise<RecomendacionDoc> {
  const res = await fetch('/api/recomendaciones', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entrada),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error ?? 'No pudimos guardar tu recomendación en la base de datos.');
  }
  return data.recomendacion as RecomendacionDoc;
}
