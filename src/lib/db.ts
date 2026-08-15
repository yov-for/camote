import { MongoClient, Db } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Falta MONGODB_URI. Revisa tu archivo .env o las variables de entorno de tu servidor.');
}

const uri = process.env.MONGODB_URI;

// En Next.js / serverless, guardamos el cliente en una variable global para reusar la MISMA conexión
// entre solicitudes y evitar agotar las conexiones gratuitas de MongoDB Atlas.
const cache = globalThis as unknown as { _mongo?: Promise<MongoClient> };
const clientPromise =
  cache._mongo ?? (cache._mongo = new MongoClient(uri).connect());

export async function getDb(): Promise<Db> {
  const client = await clientPromise;
  return client.db('camote');
}
