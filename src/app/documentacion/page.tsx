import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Documentación Técnica | Camote 🍠',
  description:
    'Guía técnica de Camote: arquitectura, instalación local, variables de entorno, modelo de datos en MongoDB Atlas, endpoints y despliegue en Vercel.',
};

const SECCIONES = [
  { id: 'vision', titulo: 'Visión general y propósito' },
  { id: 'instalacion', titulo: 'Guía de instalación y ejecución local' },
  { id: 'entorno', titulo: 'Variables de entorno y seguridad' },
  { id: 'estructura', titulo: 'Estructura del proyecto' },
  { id: 'modelo', titulo: 'Modelo de datos (MongoDB)' },
  { id: 'endpoints', titulo: 'Endpoints y reglas de negocio' },
  { id: 'despliegue', titulo: 'Despliegue en producción' },
];

function Seccion({
  id,
  numero,
  titulo,
  children,
}: {
  id: string;
  numero: number;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-[#E8E2D5] pt-10">
      <div className="flex items-baseline gap-3 mb-5">
        <span className="text-xs font-extrabold text-white bg-[#FF6F00] rounded-lg px-2.5 py-1 shrink-0">
          {String(numero).padStart(2, '0')}
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight text-[#261C14]">
          {titulo}
        </h2>
      </div>
      <div className="space-y-4 text-[15px] leading-relaxed text-[#3D2E23]">{children}</div>
    </section>
  );
}

function Codigo({ children }: { children: React.ReactNode }) {
  return (
    <pre className="bg-[#261C14] text-[#F5EFE6] rounded-2xl p-4 overflow-x-auto text-[13px] leading-relaxed font-mono">
      <code>{children}</code>
    </pre>
  );
}

function Cl({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono text-[13px] bg-[#4A148C]/8 text-[#4A148C] rounded-md px-1.5 py-0.5">
      {children}
    </code>
  );
}

function Nota({ tono = 'info', children }: { tono?: 'info' | 'alerta'; children: React.ReactNode }) {
  const estilos =
    tono === 'alerta'
      ? 'bg-[#FF6F00]/8 border-[#FF6F00]/30 text-[#7A3B00]'
      : 'bg-[#00A86B]/8 border-[#00A86B]/30 text-[#0A5738]';
  return (
    <div className={`rounded-2xl border px-4 py-3 text-sm ${estilos}`}>
      <span className="mr-1.5">{tono === 'alerta' ? '⚠️' : '💡'}</span>
      {children}
    </div>
  );
}

export default function DocumentacionPage() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#261C14]">
      {/* Encabezado */}
      <header className="bg-[#261C14] text-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-[#FF6F00] transition-colors mb-6"
          >
            ← Volver a la aplicación
          </Link>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#FF6F00] mb-3">
            Documentación técnica
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight mb-4">
            Camote <span className="align-middle">🍠</span>
          </h1>
          <p className="text-white/75 text-base sm:text-lg max-w-2xl leading-relaxed">
            Guía para instalar, entender y publicar Camote: una aplicación web que resuelve la
            indecisión de qué comer, construida con Next.js 16, React 19 y MongoDB&nbsp;Atlas.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
        {/* Índice */}
        <nav className="rounded-3xl border border-[#E8E2D5] bg-white p-5 sm:p-6 mb-12 shadow-xs">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-[#7D6E65] mb-4">
            Contenido
          </h2>
          <ol className="space-y-1.5">
            {SECCIONES.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="group flex items-baseline gap-3 text-[15px] text-[#3D2E23] hover:text-[#FF6F00] transition-colors"
                >
                  <span className="font-mono text-xs text-[#7D6E65] group-hover:text-[#FF6F00]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-medium">{s.titulo}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-14">
          {/* 1 ------------------------------------------------------------ */}
          <Seccion id="vision" numero={1} titulo="Visión general y propósito">
            <p>
              Camote ataca un problema cotidiano: <strong>la fatiga de decidir qué comer</strong>. En
              lugar de mostrar un listado infinito para que el usuario filtre, hace tres preguntas
              cortas y entrega una recomendación principal más dos alternativas.
            </p>
            <p>El recorrido tiene tres pasos:</p>
            <ol className="list-decimal ml-5 space-y-1.5 marker:text-[#FF6F00] marker:font-bold">
              <li>
                <strong>Antojo</strong> — qué plato se te apetece (ceviche, lomo saltado, etc.).
              </li>
              <li>
                <strong>Contexto</strong> — momento del día, tipo de plan, cuánta hambre tienes, si
                es presencial o delivery, y el presupuesto.
              </li>
              <li>
                <strong>Resultado</strong> — un ganador destacado y dos opciones de respaldo.
              </li>
            </ol>

            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              {[
                { n: '3', t: 'preguntas antes de decidir' },
                { n: '3', t: 'opciones por consulta' },
                { n: '<100 ms', t: 'en calcular el resultado' },
              ].map((c) => (
                <div
                  key={c.t}
                  className="rounded-2xl border border-[#E8E2D5] bg-white p-4 text-center"
                >
                  <p className="text-3xl font-extrabold font-heading text-[#FF6F00]">{c.n}</p>
                  <p className="text-xs text-[#7D6E65] mt-1 leading-snug">{c.t}</p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-extrabold font-heading pt-3">Cómo se elige el ganador</h3>
            <p>
              El motor de puntuación es independiente de dónde salgan los restaurantes: recibe un
              conjunto de candidatos y los ordena. Parte de la calificación de cada local y sobre esa
              base suma:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F5EFE6]">
                    <th className="text-left font-extrabold p-3 rounded-l-xl">Criterio</th>
                    <th className="text-left font-extrabold p-3 rounded-r-xl">Puntos extra</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E2D5]">
                  <tr>
                    <td className="p-3">El plato coincide con el antojo elegido</td>
                    <td className="p-3 font-mono text-[#00A86B] font-bold">+4.0</td>
                  </tr>
                  <tr>
                    <td className="p-3">El local encaja con la ocasión (amigos, pareja…)</td>
                    <td className="p-3 font-mono text-[#00A86B] font-bold">+2.0</td>
                  </tr>
                  <tr>
                    <td className="p-3">El rango de precio coincide con el buscado</td>
                    <td className="p-3 font-mono text-[#00A86B] font-bold">+1.5</td>
                  </tr>
                  <tr>
                    <td className="p-3">Variación aleatoria, para que no salga siempre lo mismo</td>
                    <td className="p-3 font-mono text-[#7D6E65] font-bold">+0.0 a 0.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Antes de puntuar se descartan los locales que no aplican: si pediste delivery, solo
              entran los que reparten. Si tu distrito tiene al menos tres opciones, la búsqueda se
              restringe a ese distrito; si no, se abre a toda la ciudad para no dejarte sin
              respuesta.
            </p>

            <h3 className="text-lg font-extrabold font-heading pt-3">De dónde salen los locales</h3>
            <p>
              Hoy los candidatos se resuelven en el propio servidor, sin depender de servicios
              externos: por eso el resultado llega en milisegundos y la aplicación nunca se queda
              sin respuesta aunque un proveedor esté caído.
            </p>
            <Nota>
              <strong>En el roadmap:</strong> sustituir esa fuente por búsqueda en tiempo real contra
              Google Maps o un servicio equivalente, de modo que cada consulta consulte locales
              vigentes con sus horarios y calificaciones al día. El motor de puntuación descrito
              arriba no cambia — solo cambia quién le entrega los candidatos, y por eso está escrito
              como una pieza separada.
            </Nota>
          </Seccion>

          {/* 2 ------------------------------------------------------------ */}
          <Seccion id="instalacion" numero={2} titulo="Guía de instalación y ejecución local">
            <p>
              <strong>Requisitos previos:</strong> Node.js 18.17 o superior, npm 9 o superior, y Git.
            </p>

            <p className="font-bold pt-1">1. Clonar el repositorio</p>
            <Codigo>{`git clone https://github.com/yov-for/camote.git
cd camote`}</Codigo>

            <p className="font-bold pt-1">2. Instalar las dependencias</p>
            <Codigo>npm install</Codigo>

            <p className="font-bold pt-1">3. Configurar la conexión a la base de datos</p>
            <p>
              Copia la plantilla <Cl>.env.example</Cl> a un archivo llamado <Cl>.env</Cl> y
              reemplaza el valor por tu cadena real de MongoDB Atlas.
            </p>
            <Codigo>{`cp .env.example .env
# luego abre .env y pega tu MONGODB_URI real`}</Codigo>

            <p className="font-bold pt-1">4. Levantar el servidor de desarrollo</p>
            <Codigo>npm run dev</Codigo>
            <p>
              La aplicación queda disponible en <Cl>http://localhost:3000</Cl> y esta documentación
              en <Cl>http://localhost:3000/documentacion</Cl>.
            </p>

            <Nota tono="alerta">
              Next.js lee el archivo <Cl>.env</Cl> solo al arrancar. Si lo editas con el servidor
              corriendo, detenlo y vuelve a lanzarlo o los cambios no se aplicarán.
            </Nota>

            <h3 className="text-lg font-extrabold font-heading pt-3">Comandos disponibles</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F5EFE6]">
                    <th className="text-left font-extrabold p-3 rounded-l-xl">Comando</th>
                    <th className="text-left font-extrabold p-3 rounded-r-xl">Qué hace</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E2D5]">
                  <tr>
                    <td className="p-3 font-mono text-[13px]">npm run dev</td>
                    <td className="p-3">Servidor de desarrollo con recarga automática</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-[13px]">npm run build</td>
                    <td className="p-3">Construye la versión optimizada para producción</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-[13px]">npm run start</td>
                    <td className="p-3">Sirve la versión ya construida</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-[13px]">npm run lint</td>
                    <td className="p-3">Revisa el estilo del código</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Seccion>

          {/* 3 ------------------------------------------------------------ */}
          <Seccion id="entorno" numero={3} titulo="Variables de entorno y seguridad">
            <p>
              Camote necesita <strong>una sola variable</strong> para funcionar. Cualquier otra que
              encuentres en archivos antiguos es un resto de etapas anteriores del proyecto y no se
              usa.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F5EFE6]">
                    <th className="text-left font-extrabold p-3 rounded-l-xl">Variable</th>
                    <th className="text-left font-extrabold p-3">¿Obligatoria?</th>
                    <th className="text-left font-extrabold p-3 rounded-r-xl">Para qué sirve</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E2D5]">
                  <tr>
                    <td className="p-3 font-mono text-[13px] whitespace-nowrap">MONGODB_URI</td>
                    <td className="p-3">
                      <span className="text-xs font-extrabold uppercase bg-[#FF6F00]/15 text-[#B44E00] rounded-full px-2.5 py-1">
                        Sí
                      </span>
                    </td>
                    <td className="p-3">
                      Dirección de conexión al cluster de MongoDB Atlas, con usuario y contraseña.
                      Sin ella la aplicación carga, pero no puede guardar ni recuperar
                      recomendaciones.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              El valor se obtiene en Atlas: <strong>Connect → Drivers</strong>, copiando la cadena y
              reemplazando <Cl>&lt;password&gt;</Cl> por la contraseña real del usuario de base de
              datos.
            </p>
            <Codigo>{`MONGODB_URI="mongodb+srv://usuario:contrasena@cluster0.xxxx.mongodb.net/?retryWrites=true&w=majority"`}</Codigo>

            <h3 className="text-lg font-extrabold font-heading pt-3">Reglas de seguridad</h3>
            <ul className="list-disc ml-5 space-y-2 marker:text-[#FF6F00]">
              <li>
                <strong>Ninguna contraseña dentro del código.</strong> Van en <Cl>.env</Cl> en tu
                máquina y en el panel de Vercel en producción.
              </li>
              <li>
                <strong>El archivo <Cl>.env</Cl> nunca se sube.</strong> El <Cl>.gitignore</Cl>{' '}
                excluye <Cl>.env*</Cl>, <Cl>*.env</Cl> y <Cl>*credentials*</Cl>. Las dos primeras
                reglas son necesarias porque <Cl>.env*</Cl> solo cubre archivos que{' '}
                <em>empiezan</em> con <Cl>.env</Cl>: un archivo como{' '}
                <Cl>atlas-credentials.env</Cl> se colaría sin la segunda.
              </li>
              <li>
                <strong>Solo <Cl>.env.example</Cl> se versiona</strong>, con los nombres de las
                variables y valores de ejemplo, nunca reales.
              </li>
              <li>
                <strong>Se valida antes de escribir</strong> en la base de datos, aunque la pantalla
                ya valide. El formulario se puede saltar; el servidor no.
              </li>
            </ul>

            <Nota tono="alerta">
              En Atlas hay que habilitar <Cl>0.0.0.0/0</Cl> en <strong>Network Access</strong>.
              Vercel publica desde direcciones que cambian, y sin esa regla la aplicación funciona en
              tu laptop pero falla publicada sin explicar por qué.
            </Nota>
          </Seccion>

          {/* 4 ------------------------------------------------------------ */}
          <Seccion id="estructura" numero={4} titulo="Estructura del proyecto">
            <Codigo>{`camote/
├── src/
│   ├── app/                        Rutas de Next.js (App Router)
│   │   ├── api/
│   │   │   ├── health/route.ts     Comprobación de que el servidor responde
│   │   │   ├── recomendaciones/    Leer y guardar en MongoDB Atlas
│   │   │   │   └── route.ts
│   │   │   └── recommend/route.ts  Motor que calcula la recomendación
│   │   ├── documentacion/
│   │   │   └── page.tsx            Esta página
│   │   ├── globals.css             Estilos base y tipografías
│   │   ├── layout.tsx              Estructura común a todas las pantallas
│   │   └── page.tsx                Pantalla principal
│   │
│   ├── components/                 Piezas visuales reutilizables
│   │   ├── CravingSelector.tsx     Paso 1: elegir el antojo
│   │   ├── ContextSelector.tsx     Paso 2: ocasión, hambre y modalidad
│   │   ├── LoadingScreen.tsx       Pantalla de espera y errores
│   │   ├── RecommendationView.tsx  Paso 3: el resultado
│   │   ├── RestaurantDetailModal.tsx
│   │   ├── LocationSelectorModal.tsx
│   │   ├── HistoryModal.tsx
│   │   ├── AnalyticsModal.tsx
│   │   └── Navbar.tsx
│   │
│   ├── data/
│   │   ├── restaurants.ts          Fuente de locales y motor de puntuación
│   │   └── dishes.ts               Catálogo de platos peruanos
│   │
│   ├── lib/
│   │   ├── db.ts                   Conexión reutilizable a MongoDB Atlas
│   │   ├── api.ts                  Puente entre pantallas y endpoints
│   │   └── analytics.ts            Registro local de consultas y favoritos
│   │
│   ├── App.tsx                     Orquesta los tres pasos
│   └── types.ts                    Definiciones de datos compartidas
│
├── .env                            Tu contraseña. NUNCA se sube
├── .env.example                    Los nombres, sin valores. Este sí se sube
├── .gitignore
├── next.config.ts
├── package.json
└── tsconfig.json`}</Codigo>
          </Seccion>

          {/* 5 ------------------------------------------------------------ */}
          <Seccion id="modelo" numero={5} titulo="Modelo de datos (MongoDB)">
            <p>
              La base se llama <Cl>camote</Cl> y tiene <strong>una sola colección</strong>:{' '}
              <Cl>recomendaciones</Cl>. Guarda el resultado que la aplicación entregó a cada usuario,
              para que al refrescar la página no se pierda.
            </p>
            <Nota>
              En MongoDB la colección se crea sola al guardar el primer registro. No hay que
              ejecutar ningún comando de creación.
            </Nota>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F5EFE6]">
                    <th className="text-left font-extrabold p-3 rounded-l-xl">Campo</th>
                    <th className="text-left font-extrabold p-3 rounded-r-xl">Qué guarda</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E2D5]">
                  {[
                    ['id', 'Identificador único de la recomendación'],
                    ['usuario_id', 'A quién pertenece; permite recuperar lo suyo al volver'],
                    ['antojos_elegidos', 'Los platos que la persona seleccionó'],
                    ['momento_dia', 'Si buscó de mañana, tarde o noche'],
                    ['motivo_busqueda', 'El tipo de plan: solo, pareja, familia, amigos o ejecutivo'],
                    ['nivel_hambre', 'Cuánta hambre declaró'],
                    ['modalidad', 'Presencial o delivery'],
                    ['distrito', 'Zona desde la que buscó'],
                    ['frase_justificacion', 'El texto que explica por qué se eligió eso'],
                    ['restaurante_principal', 'El restaurante ganador, con todos sus datos'],
                    ['opciones_alternativas', 'Las dos opciones de respaldo'],
                    ['creado_en', 'Fecha y hora en que se generó'],
                  ].map(([campo, desc]) => (
                    <tr key={campo}>
                      <td className="p-3 font-mono text-[13px] text-[#4A148C] whitespace-nowrap align-top">
                        {campo}
                      </td>
                      <td className="p-3">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-extrabold font-heading pt-3">Ejemplo de un registro</h3>
            <Codigo>{`{
  "id": "rec_fb884e27",
  "usuario_id": "usr_camote_a1b2c3d",
  "antojos_elegidos": ["ceviche", "lomo_saltado"],
  "momento_dia": "noche",
  "motivo_busqueda": "social_amigos",
  "nivel_hambre": "alto",
  "modalidad": "presencial",
  "distrito": "Miraflores",
  "frase_justificacion": "¡Para un hambre voraz de aquellos!",
  "restaurante_principal": {
    "priority": "principal",
    "restaurant_name": "La Mar Cebichería",
    "dish_highlight": "Ceviche Mixto Apaltado",
    "category": "Marino / Cevichería",
    "address": "Av. Mariscal La Mar 770, Miraflores",
    "distrito": "Miraflores",
    "context_validators": {
      "rating": 4.8,
      "distance_text": "A 7 min a pie (520m) · 2 min en auto",
      "price_range": "$$$"
    }
  },
  "opciones_alternativas": [ /* dos restaurantes más */ ],
  "creado_en": "2026-08-14T21:05:00.000Z"
}`}</Codigo>

            <Nota tono="alerta">
              <strong>Pendiente a propósito:</strong> los favoritos siguen guardándose solo en el
              navegador, así que se pierden al cambiar de dispositivo. Llevarlos a la nube requeriría
              una colección más — <Cl>favoritos</Cl> — que no se creó por la regla de una sola
              colección.
            </Nota>
          </Seccion>

          {/* 6 ------------------------------------------------------------ */}
          <Seccion id="endpoints" numero={6} titulo="Endpoints y reglas de negocio">
            <div className="space-y-5">
              {/* GET */}
              <div className="rounded-2xl border border-[#E8E2D5] bg-white p-5">
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="text-xs font-extrabold text-white bg-[#00A86B] rounded-lg px-2.5 py-1">
                    GET
                  </span>
                  <span className="font-mono text-sm font-bold">/api/recomendaciones</span>
                </div>
                <p className="text-sm mb-3">
                  Devuelve las recomendaciones guardadas, de la más reciente a la más antigua, con un
                  máximo de 50. Acepta el parámetro <Cl>usuario_id</Cl> para traer solo las de una
                  persona.
                </p>
                <Codigo>{`GET /api/recomendaciones?usuario_id=usr_camote_a1b2c3d

→ 200  { "recomendaciones": [ ... ] }
→ 500  { "error": "No pudimos leer las recomendaciones guardadas. Intenta de nuevo." }`}</Codigo>
              </div>

              {/* POST recomendaciones */}
              <div className="rounded-2xl border border-[#E8E2D5] bg-white p-5">
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="text-xs font-extrabold text-white bg-[#4A148C] rounded-lg px-2.5 py-1">
                    POST
                  </span>
                  <span className="font-mono text-sm font-bold">/api/recomendaciones</span>
                </div>
                <p className="text-sm mb-3">
                  Valida los datos y, solo si están completos, los guarda. Un dato malo guardado se
                  queda para siempre y limpiarlo después cuesta más que rechazarlo hoy.
                </p>
                <p className="text-sm font-bold mb-2">Validaciones y su mensaje al usuario:</p>
                <div className="overflow-x-auto mb-3">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#F5EFE6]">
                        <th className="text-left font-extrabold p-2.5 rounded-l-xl">Si falta…</th>
                        <th className="text-left font-extrabold p-2.5 rounded-r-xl">
                          Responde (400)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E2D5]">
                      {[
                        ['usuario_id', 'Falta identificar al usuario o sesión para registrar la recomendación.'],
                        ['antojos_elegidos', 'Debes seleccionar al menos un antojo o plato peruano.'],
                        ['motivo_busqueda', 'Falta indicar el motivo u ocasión de la comida.'],
                        ['nivel_hambre', 'Falta indicar el nivel de hambre.'],
                        ['modalidad', 'La modalidad debe ser presencial o delivery.'],
                        ['restaurante_principal', 'Falta el restaurante principal recomendado.'],
                        ['frase_justificacion', 'Falta la frase de justificación gastronómica.'],
                      ].map(([campo, msg]) => (
                        <tr key={campo}>
                          <td className="p-2.5 font-mono text-[12px] text-[#4A148C] whitespace-nowrap align-top">
                            {campo}
                          </td>
                          <td className="p-2.5 text-[13px]">{msg}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Codigo>{`→ 201  { "recomendacion": { ... } }
→ 400  { "error": "mensaje en español, listo para mostrar" }
→ 500  { "error": "No pudimos guardar la recomendación..." }`}</Codigo>
              </div>

              {/* POST recommend */}
              <div className="rounded-2xl border border-[#E8E2D5] bg-white p-5">
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="text-xs font-extrabold text-white bg-[#4A148C] rounded-lg px-2.5 py-1">
                    POST
                  </span>
                  <span className="font-mono text-sm font-bold">/api/recommend</span>
                </div>
                <p className="text-sm mb-3">
                  Calcula la recomendación a partir del antojo y el contexto. Hoy se resuelve
                  íntegramente en el servidor, sin consultar la base de datos ni servicios externos,
                  por eso responde en menos de 100&nbsp;ms.
                </p>
                <Codigo>{`→ 200  { "total_recommendations": 3, "justification_phrase": "...", "results": [...] }
→ 400  { "error": "Parámetros inválidos o faltantes..." }
→ 404  { "error": "No encontramos restaurantes que calcen con lo que buscas..." }`}</Codigo>
              </div>

              {/* GET health */}
              <div className="rounded-2xl border border-[#E8E2D5] bg-white p-5">
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="text-xs font-extrabold text-white bg-[#00A86B] rounded-lg px-2.5 py-1">
                    GET
                  </span>
                  <span className="font-mono text-sm font-bold">/api/health</span>
                </div>
                <p className="text-sm mb-3">
                  Comprueba que el servidor está vivo. Útil para verificar un despliegue.
                </p>
                <Codigo>{`→ 200  { "status": "ok", "app": "Camote" }`}</Codigo>
              </div>
            </div>

            <h3 className="text-lg font-extrabold font-heading pt-3">Reglas que no se rompen</h3>
            <ul className="list-disc ml-5 space-y-2 marker:text-[#FF6F00]">
              <li>
                <strong>Los mensajes de error están en español y son mostrables.</strong> Nunca
                revelan nombres de colecciones ni detalles internos: el usuario merece saber qué
                pasó, no cómo está hecho el sistema por dentro.
              </li>
              <li>
                <strong>Se valida antes de escribir</strong>, siempre.
              </li>
              <li>
                <strong>Después de guardar, se vuelve a preguntar al servidor</strong> en lugar de
                asumir que lo guardado coincide con lo que hay en pantalla. Así lo que ves es
                siempre lo que la base de datos tiene de verdad.
              </li>
            </ul>
          </Seccion>

          {/* 7 ------------------------------------------------------------ */}
          <Seccion id="despliegue" numero={7} titulo="Despliegue en producción">
            <p>
              Camote se publica en <strong>Vercel</strong>, que detecta Next.js automáticamente. No
              hace falta ningún archivo de configuración adicional.
            </p>
            <ol className="list-decimal ml-5 space-y-2 marker:text-[#FF6F00] marker:font-bold">
              <li>Entrar a vercel.com e iniciar sesión con la cuenta de GitHub.</li>
              <li>
                <strong>Add New… → Project</strong> e importar el repositorio <Cl>camote</Cl>.
              </li>
              <li>No modificar el comando de construcción: la detección automática es correcta.</li>
              <li>
                En <strong>Environment Variables</strong>, agregar <Cl>MONGODB_URI</Cl> con la cadena
                de conexión de Atlas.
              </li>
              <li>
                Pulsar <strong>Deploy</strong>. En un par de minutos queda una dirección pública.
              </li>
            </ol>

            <h3 className="text-lg font-extrabold font-heading pt-3">Si algo falla</h3>
            <p>Casi siempre es una de estas tres, en este orden:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#F5EFE6]">
                    <th className="text-left font-extrabold p-3 rounded-l-xl">Síntoma</th>
                    <th className="text-left font-extrabold p-3 rounded-r-xl">Causa habitual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E2D5]">
                  <tr>
                    <td className="p-3">Se queda colgado y luego falla por tiempo de espera</td>
                    <td className="p-3">
                      Falta habilitar <Cl>0.0.0.0/0</Cl> en Network Access de Atlas. Es el error
                      número uno y no tiene nada que ver con el código.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      Dice <em>authentication failed</em> o <em>bad auth</em>
                    </td>
                    <td className="p-3">
                      Usuario o contraseña incorrectos en <Cl>MONGODB_URI</Cl>. Si la contraseña
                      tiene símbolos como <Cl>@</Cl>, <Cl>#</Cl> o <Cl>/</Cl>, rompen la dirección de
                      conexión: lo más simple es usar solo letras y números.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">Funciona en local pero no publicado</td>
                    <td className="p-3">
                      La variable <Cl>MONGODB_URI</Cl> está en el <Cl>.env</Cl> local pero no se
                      cargó en el panel de Vercel. Agrégala y vuelve a desplegar.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Nota>
              La conexión a MongoDB se comprueba <strong>al usarse</strong>, no al construir el
              proyecto. Gracias a eso, un despliegue sin <Cl>MONGODB_URI</Cl> no rompe la
              construcción con un error incomprensible: la aplicación se publica y el problema
              aparece con un mensaje claro que indica exactamente dónde cargar la variable.
            </Nota>
          </Seccion>
        </div>

        <footer className="border-t border-[#E8E2D5] mt-16 pt-8 pb-4 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#7D6E65]">
            Camote 🍠 — Elegir qué comer ya no es yuca.
          </p>
          <Link
            href="/"
            className="text-sm font-bold text-[#FF6F00] hover:text-[#261C14] transition-colors"
          >
            Volver a la aplicación →
          </Link>
        </footer>
      </main>
    </div>
  );
}
