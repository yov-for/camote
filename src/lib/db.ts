import { MongoClient, Db } from 'mongodb';

// La conexión se crea la PRIMERA VEZ que alguien pide la base de datos, no al
// cargar este archivo. Es a propósito: si comprobáramos MONGODB_URI aquí arriba,
// un deploy sin esa variable fallaría durante la construcción del proyecto con un
// error confuso. Así, el proyecto siempre construye y el problema aparece donde se
// entiende: en la petición, con un mensaje claro.

// En Next.js cada petición puede levantar el proceso desde cero. Guardamos el
// cliente en una variable global para reusar la MISMA conexión entre peticiones;
// si abriéramos una nueva cada vez, el plan gratis de Atlas se queda sin cupo.
const cache = globalThis as unknown as { _mongo?: Promise<MongoClient> };

export async function getDb(): Promise<Db> {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      'Falta la variable MONGODB_URI. En tu máquina va en el archivo .env; ' +
        'publicado, en Vercel → Settings → Environment Variables.'
    );
  }

  if (!cache._mongo) {
    cache._mongo = new MongoClient(uri).connect();
  }

  const client = await cache._mongo;
  return client.db('camote');
}
