import { NextRequest, NextResponse } from 'next/server';
import { generateFallbackRecommendation, generateJustificationPhrase } from '@/data/restaurants';

export const runtime = 'nodejs';

// El motor de recomendación es local: vive en src/data/restaurants.ts.
//
// Antes esta ruta consultaba primero una API externa del laboratorio
// (portal-labs-core.cc) y solo caía al generador local si esa llamada fallaba.
// Ese laboratorio era temporal y ya no existe, así que la llamada únicamente
// sumaba latencia — hasta 20s de timeout — antes de terminar igual en el
// generador local. Se eliminó: hoy el generador local es la única fuente.
export async function POST(req: NextRequest) {
  let payload: any;

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { error: 'El formato de la solicitud no es válido.', status: 400 },
      { status: 400 }
    );
  }

  if (!payload || !payload.selected_dishes || !payload.context) {
    return NextResponse.json(
      {
        error: 'Parámetros inválidos o faltantes. Por favor selecciona al menos un antojo o plato.',
        status: 400,
      },
      { status: 400 }
    );
  }

  try {
    const results = generateFallbackRecommendation(
      payload.selected_dishes,
      {
        momentoDia: payload.context?.momento_dia || 'tarde',
        searchMotive: payload.context?.search_motive || 'social_amigos',
        hungerLevel: payload.context?.hunger_level || 'alto',
        diningMode: payload.context?.dining_mode || 'presencial',
        priceRange: '$$',
      },
      {
        latitude: payload.location_simulated?.latitude || -12.046374,
        longitude: payload.location_simulated?.longitude || -77.042793,
        addressName: 'Lima, Perú',
        distrito: 'Miraflores',
        maxDistanceMeters: payload.location_simulated?.max_distance_meters || 2000,
        isCustomOrSimulated: true,
      }
    );

    if (!results || results.length === 0) {
      return NextResponse.json(
        {
          error: 'No encontramos restaurantes que calcen con lo que buscas. Prueba con otro antojo o amplía la distancia.',
          status: 404,
        },
        { status: 404 }
      );
    }

    const justification = generateJustificationPhrase(
      payload.context?.search_motive,
      payload.context?.hunger_level,
      payload.context?.dining_mode,
      payload.selected_dishes?.length || 1
    );

    return NextResponse.json({
      total_recommendations: results.length,
      justification_phrase: justification,
      results,
    });
  } catch (error) {
    console.error('Error generando la recomendación local:', error);
    return NextResponse.json(
      { error: 'Tuvimos un problema en la cocina. ¡Intenta de nuevo!', status: 502 },
      { status: 502 }
    );
  }
}
