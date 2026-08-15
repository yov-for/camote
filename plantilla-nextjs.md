# Plantilla de backend en Next.js

Sesión 10 · Product Management con IA · UTEC Tech MBA

Este documento es una plantilla, no un tutorial. Está escrito para que se lo pases entero a Antigravity y él arme los archivos. No tienes que entender cada línea, pero sí tienes que poder revisar lo que salga.

---

## Cómo se usa

1. Descarga este archivo y arrástralo a tu conversación con Antigravity. Si no puedes adjuntarlo, cópialo y pégalo completo.
2. Dile: **"usa esta plantilla para agregarle backend y base de datos a mi proyecto, adaptándola a mi caso"**.
3. Antes de que escriba nada, pídele que te diga qué va a cambiar y qué campos propone para tu colección.
4. Aprueba o corrige. Recién ahí que lo haga.

El paso 3 es el que importa. Si aceptas la primera propuesta sin leerla, no supervisaste nada.

---

## Qué asume esta plantilla

- Tu proyecto ya está en Next.js con App Router y TypeScript, o sea que ya pasaste la estación 2.
- Vas a usar **MongoDB Atlas**, el plan gratis (M0). Cuesta cero.
- Vas a guardar **una sola cosa**. Si te salen tres, elige la primera.

---

## 0. Crea la base de datos gratis (MongoDB Atlas)

Una sola vez, antes de tocar código:

1. Entra a **mongodb.com/cloud/atlas** y crea una cuenta gratis.
2. Crea un cluster **M0** (el plan gratis, cero soles). Cualquier región cercana sirve.
3. En **Database Access**, crea un usuario de base de datos con su contraseña. Anótalos, los vas a necesitar en un minuto.
4. En **Network Access**, agrega la regla **`0.0.0.0/0`** (permitir el acceso desde cualquier lugar). Esto es **obligatorio**: Vercel publica desde direcciones que cambian, y si no lo haces, tu app va a funcionar en tu laptop y va a fallar publicada sin decirte por qué.
5. En **Connect → Drivers**, copia la dirección de conexión. Se ve así:
   ```
   mongodb+srv://usuario:<password>@cluster0.xxxx.mongodb.net/?retryWrites=true&w=majority
   ```
   Reemplaza `<password>` por la contraseña real del paso 3. Esa cadena completa es tu `MONGODB_URI`.

---

## Estructura

```
tu-proyecto/
├── app/
│   ├── api/
│   │   └── registros/
│   │       └── route.ts      ← las dos puertas: leer y escribir
│   └── (tus pantallas de siempre)
├── lib/
│   ├── db.ts                 ← la conexión a la base de datos
│   └── api.ts                ← el ayudante que usan tus pantallas
├── .env.local                ← tus llaves. NUNCA se sube a GitHub
└── .env.example              ← los nombres de las llaves, sin valores. Este sí se sube
```

`registros` es un nombre de relleno. Cámbialo por el nombre de la cosa que tú vas a guardar: `rutinas`, `pedidos`, `reservas`, `entradas`, lo que sea tu caso.

---

## 1. La dependencia

Una sola:

```bash
npm install mongodb
```

Es el cliente oficial de MongoDB. No necesitas nada más.

---

## 2. Variables de entorno

`.env.example`, este sí se sube a GitHub, solo tiene los nombres:

```
MONGODB_URI=
GEMINI_API_KEY=
```

`.env.local`, este **nunca** se sube, tiene los valores de verdad:

```
MONGODB_URI=mongodb+srv://usuario:tu-password@cluster0.xxxx.mongodb.net/?retryWrites=true&w=majority
GEMINI_API_KEY=...la tuya...
```

Confirma que tu `.gitignore` tenga la línea `.env*.local`. Si no la tiene, agrégala antes de subir nada.

---

## 3. La colección

En MongoDB no declaras la estructura por adelantado como en una tabla clásica: la **colección** (así se llama la "tabla" de Mongo, o piénsala como una hoja de cálculo) se crea sola la primera vez que guardas algo. No tienes que correr ningún comando.

Eso no te libra de la decisión de producto. Aunque Mongo te deje guardar cualquier cosa, tú vas a decidir **a propósito** qué campos tiene cada registro. `titulo`, `contenido` y `autor` son ejemplos, cámbialos por los de tu caso.

Y la misma advertencia de siempre: no metas todo tu producto en un solo campo tipo bloque de texto. Es más rápido hoy y es un dolor de cabeza en la Sesión 12, cuando tengas que buscar o filtrar. Elegir los campos es la parte de producto de este ejercicio.

---

## 4. `lib/db.ts`

```ts
import { MongoClient, Db } from "mongodb";

// La dirección de conexión se lee del entorno, nunca del código. En tu máquina
// sale de .env.local y en producción del panel de Vercel. Si esto truena al
// arrancar, casi siempre es una de dos: falta cargar la variable en Vercel, o
// en Atlas no habilitaste el acceso "desde cualquier lugar" (0.0.0.0/0).
if (!process.env.MONGODB_URI) {
  throw new Error("Falta MONGODB_URI. Revisa .env.local o el panel de Vercel.");
}

const uri = process.env.MONGODB_URI;

// En serverless, cada request puede levantar el proceso desde cero. Guardamos
// el cliente en una variable global para reusar la MISMA conexión entre
// requests. Si abrieras una nueva cada vez, el plan gratis de Atlas se queda
// sin cupo de conexiones y empieza a fallar.
const cache = globalThis as unknown as { _mongo?: Promise<MongoClient> };
const clientPromise =
  cache._mongo ?? (cache._mongo = new MongoClient(uri).connect());

export async function getDb(): Promise<Db> {
  const client = await clientPromise;
  return client.db("app"); // el nombre de tu base de datos; cámbialo si quieres
}
```

---

## 5. `app/api/registros/route.ts`

Las dos puertas. Leer y escribir.

```ts
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { getDb } from "@/lib/db";

// El cliente de MongoDB necesita Node, no corre en el runtime "edge".
export const runtime = "nodejs";

// Puerta de salida: devuelve lo que hay guardado.
export async function GET() {
  try {
    const db = await getDb();
    const registros = await db
      .collection("registros")
      .find({}, { projection: { _id: 0 } }) // sin el _id interno de Mongo
      .sort({ creado_en: -1 })
      .limit(100)
      .toArray();
    return NextResponse.json({ registros });
  } catch {
    return NextResponse.json(
      { error: "No pudimos leer los datos. Intenta de nuevo." },
      { status: 500 },
    );
  }
}

// Puerta de entrada: valida y guarda.
export async function POST(request: Request) {
  let cuerpo: unknown;
  try {
    cuerpo = await request.json();
  } catch {
    return NextResponse.json(
      { error: "El formato de la solicitud no es válido." },
      { status: 400 },
    );
  }

  const b = cuerpo as Record<string, unknown>;
  const titulo = typeof b.titulo === "string" ? b.titulo.trim() : "";
  const contenido = typeof b.contenido === "string" ? b.contenido.trim() : "";
  const autor = typeof b.autor === "string" ? b.autor.trim() : "";

  // Validar ANTES de escribir. Un dato malo guardado se queda para siempre,
  // y limpiarlo despues cuesta mucho mas que rechazarlo hoy.
  if (!titulo) {
    return NextResponse.json({ error: "El título es obligatorio." }, { status: 400 });
  }
  if (titulo.length > 120) {
    return NextResponse.json(
      { error: "El título no puede tener más de 120 caracteres." },
      { status: 400 },
    );
  }
  if (!contenido) {
    return NextResponse.json({ error: "El contenido es obligatorio." }, { status: 400 });
  }
  if (!autor) {
    return NextResponse.json({ error: "Falta indicar quién lo crea." }, { status: 400 });
  }

  try {
    const db = await getDb();
    const registro = {
      id: randomUUID(),
      titulo,
      contenido,
      autor,
      creado_en: new Date().toISOString(),
    };
    // El spread evita que Mongo le pegue su _id al objeto que devolvemos.
    await db.collection("registros").insertOne({ ...registro });
    return NextResponse.json({ registro }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "No pudimos guardar. Intenta de nuevo." },
      { status: 500 },
    );
  }
}
```

Fíjate en dos cosas:

- **Los mensajes de error están en español y son mostrables al usuario.** No dicen nombres de colecciones ni detalles internos. Esa es la regla: el usuario merece saber qué pasó, no cómo está hecho tu sistema por dentro.
- **Se valida antes de escribir.** Es lo que le faltaba al sistema del observatorio de la mañana.

---

## 6. `lib/api.ts`

El ayudante que usan tus pantallas, para que ninguna tenga que saber de direcciones ni de formatos.

```ts
export interface Registro {
  id: string;
  titulo: string;
  contenido: string;
  autor: string;
  creado_en?: string;
}

export async function listarRegistros(): Promise<Registro[]> {
  const res = await fetch("/api/registros");
  if (!res.ok) throw new Error("No pudimos cargar los datos.");
  const data = await res.json();
  return data.registros as Registro[];
}

export async function crearRegistro(
  entrada: Omit<Registro, "id" | "creado_en">,
): Promise<Registro> {
  const res = await fetch("/api/registros", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entrada),
  });
  const data = await res.json();
  // El servidor ya manda un mensaje en espanol listo para mostrar.
  if (!res.ok) throw new Error(data.error ?? "No pudimos guardar.");
  return data.registro as Registro;
}
```

---

## 7. Cómo lo conectas a tu pantalla

Donde hoy tienes algo así:

```tsx
const [registros, setRegistros] = useState([]);

function guardar(nuevo) {
  setRegistros([...registros, nuevo]);   // se pierde al refrescar
}
```

Queda así:

```tsx
const [registros, setRegistros] = useState<Registro[]>([]);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  listarRegistros().then(setRegistros).catch((e) => setError(e.message));
}, []);

async function guardar(nuevo: Omit<Registro, "id" | "creado_en">) {
  try {
    await crearRegistro(nuevo);
    setRegistros(await listarRegistros());   // vuelve a preguntar al servidor
    setError(null);
  } catch (e) {
    setError((e as Error).message);
  }
}
```

El detalle que parece menor y no lo es: después de guardar **se vuelve a preguntar al servidor** en vez de agregar la fila a mano en la pantalla. Así lo que ves siempre es lo que el servidor tiene de verdad, y no una versión optimista que puede estar equivocada. Es exactamente el error que tenía el sistema del observatorio.

---

## Si Mongo no conecta

Casi siempre es una de estas tres, en este orden. Si te trabas, pásale esto mismo a Antigravity y que lo revise en orden antes de tocar código:

1. **Se queda colgado y después truena (timeout o "server selection error").** Es Network Access. En Atlas → **Network Access → Add IP Address → Allow access from anywhere (`0.0.0.0/0`)**. Es el error número uno y no tiene nada que ver con tu código.
2. **"Authentication failed" / "bad auth".** El usuario o la contraseña del `MONGODB_URI` están mal. Ojo: si tu contraseña tiene símbolos (`@`, `#`, `/`, `:`), rompen la dirección de conexión. Lo más simple es ponerle al usuario de Atlas una contraseña de solo letras y números. Si igual quieres símbolos, pídele a Antigravity que los codifique para la URL.
3. **Funciona en tu laptop pero no publicado.** La variable `MONGODB_URI` está en tu `.env.local` pero no la cargaste en Vercel. Ve a tu proyecto en Vercel → Settings → Environment Variables, agrégala igual, y vuelve a hacer deploy.

Un cuarto, tonto pero común: si editaste `.env.local` con el servidor corriendo, reinícialo. Next solo lee ese archivo al arrancar.

Y un tip para que Antigravity te ayude mejor: pídele que, cuando algo falle, primero te diga en una línea si el error viene de la **conexión**, de la **autenticación** o de la **validación**, y recién después proponga un cambio. Así no toca tres cosas a la vez.

---

## Reglas que no conviene romper

1. **Una sola colección hoy.** Si crees que necesitas otra, anótala y sigue.
2. **Ninguna llave dentro del código.** Van en `.env.local` en tu máquina y en el panel de Vercel en producción.
3. **Validar antes de escribir**, siempre, aunque el formulario ya valide. El formulario se puede saltar, el servidor no.
4. **Mensajes de error en español y mostrables**, sin detalles internos.
5. **Después de guardar, vuelve a preguntar.** No adivines lo que quedó guardado.

---

## Checklist antes del deploy

- [ ] `.env.local` existe en tu máquina y **no** está en GitHub
- [ ] `.env.example` sí está en GitHub, con los nombres y sin los valores
- [ ] En Atlas, **Network Access** permite `0.0.0.0/0`
- [ ] Guardas algo, refrescas el navegador, y sigue ahí (o lo ves en Atlas → Browse Collections)
- [ ] Un compañero lo abre desde su laptop y ve lo mismo que tú
- [ ] Cargaste las mismas variables de `.env.local` en el panel de Vercel

El penúltimo punto es el que de verdad prueba que tienes backend. El resto puede funcionar de casualidad.
