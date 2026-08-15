import 'dotenv/config';
import express, { Request, Response } from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { generateFallbackRecommendation, generateJustificationPhrase } from './src/data/restaurants';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API Routes FIRST
app.post('/api/recommend', async (req: Request, res: Response) => {
  const payload = req.body;
  const { allow_fallback = true } = req.query;

  // Validate basic request format
  if (!payload || !payload.selected_dishes || !payload.context) {
    res.status(400).json({
      error: 'Parámetros inválidos o faltantes. Por favor selecciona al menos un antojo o plato.',
      status: 400
    });
    return;
  }

  const apiKey = process.env.EXTERNAL_API_KEY || '';
  const targetUrl = process.env.EXTERNAL_API_URL || 'https://portal-labs-core.cc';

  console.log('Sending recommendation request to external API:', targetUrl);

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000); // 20s timeout for external call

    const apiResponse = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify({
        user_id: payload.user_id || 'usr_camote_default',
        mood_preference_method: payload.mood_preference_method || 'ranking_dinamico',
        selected_dishes: payload.selected_dishes || ['ceviche', 'lomo_saltado'],
        context: {
          search_motive: payload.context?.search_motive || 'social_amigos',
          hunger_level: payload.context?.hunger_level || 'alto',
          dining_mode: payload.context?.dining_mode || 'presencial'
        },
        location_simulated: {
          latitude: payload.location_simulated?.latitude || -12.046374,
          longitude: payload.location_simulated?.longitude || -77.042793,
          max_distance_meters: payload.location_simulated?.max_distance_meters || 2000
        }
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (apiResponse.ok) {
      const data = await apiResponse.json();
      res.json(data);
      return;
    }

    console.warn(`External API responded with status ${apiResponse.status}`);

    if (apiResponse.status === 401) {
      if (!allow_fallback) {
        res.status(401).json({ error: 'X-API-Key inválida o expirada.', status: 401 });
        return;
      }
    } else if (apiResponse.status === 429) {
      const retryAfter = apiResponse.headers.get('Retry-After') || '10';
      if (!allow_fallback) {
        res.status(429).json({ error: 'Exceso de peticiones.', retry_after: retryAfter, status: 429 });
        return;
      }
    } else if (apiResponse.status === 502) {
      if (!allow_fallback) {
        res.status(502).json({ error: 'Tuvimos un problema en la cocina. ¡Intenta de nuevo!', status: 502 });
        return;
      }
    }

    // Fallback recommendation generation so app never breaks
    console.log('Generating high quality Peruvian fallback recommendation...');
    const fallbackResults = generateFallbackRecommendation(
      payload.selected_dishes,
      {
        searchMotive: payload.context?.search_motive || 'social_amigos',
        hungerLevel: payload.context?.hunger_level || 'alto',
        diningMode: payload.context?.dining_mode || 'presencial',
        priceRange: '$$',
        dietaryRestrictions: []
      },
      {
        latitude: payload.location_simulated?.latitude || -12.046374,
        longitude: payload.location_simulated?.longitude || -77.042793,
        addressName: 'Lima, Perú',
        distrito: 'Miraflores',
        maxDistanceMeters: payload.location_simulated?.max_distance_meters || 2000,
        isCustomOrSimulated: true
      }
    );

    const justification = generateJustificationPhrase(
      payload.context?.search_motive,
      payload.context?.hunger_level,
      payload.context?.dining_mode,
      payload.selected_dishes?.length || 1
    );

    res.json({
      total_recommendations: fallbackResults.length,
      justification_phrase: justification,
      results: fallbackResults
    });

  } catch (error: any) {
    console.error('Error fetching external recommendation:', error.message);

    // Fallback response so user gets an instant valid recommendation
    const fallbackResults = generateFallbackRecommendation(
      payload.selected_dishes || ['ceviche', 'lomo_saltado'],
      {
        searchMotive: payload.context?.search_motive || 'social_amigos',
        hungerLevel: payload.context?.hunger_level || 'alto',
        diningMode: payload.context?.dining_mode || 'presencial',
        priceRange: '$$',
        dietaryRestrictions: []
      },
      {
        latitude: payload.location_simulated?.latitude || -12.046374,
        longitude: payload.location_simulated?.longitude || -77.042793,
        addressName: 'Lima, Perú',
        distrito: 'Miraflores',
        maxDistanceMeters: payload.location_simulated?.max_distance_meters || 2000,
        isCustomOrSimulated: true
      }
    );

    const justification = generateJustificationPhrase(
      payload.context?.search_motive,
      payload.context?.hunger_level,
      payload.context?.dining_mode,
      payload.selected_dishes?.length || 1
    );

    res.json({
      total_recommendations: fallbackResults.length,
      justification_phrase: justification,
      results: fallbackResults
    });
  }
});

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', app: 'Camote' });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🍠 Camote server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
