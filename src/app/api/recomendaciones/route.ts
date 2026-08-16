import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';
import { getDb } from '@/lib/db';

export const runtime = 'nodejs';

// Puerta de salida (GET): devuelve las recomendaciones guardadas
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const usuarioId = searchParams.get('usuario_id');

    const db = await getDb();
    const filtro = usuarioId ? { usuario_id: usuarioId } : {};

    const recomendaciones = await db
      .collection('recomendaciones')
      .find(filtro, { projection: { _id: 0 } })
      .sort({ creado_en: -1 })
      .limit(50)
      .toArray();

    return NextResponse.json({ recomendaciones });
  } catch (error) {
    console.error('Error al leer de MongoDB Atlas:', error);
    return NextResponse.json(
      { error: 'No pudimos leer las recomendaciones guardadas. Intenta de nuevo.' },
      { status: 500 }
    );
  }
}

// Puerta de entrada (POST): valida antes de escribir y guarda en MongoDB Atlas
export async function POST(request: Request) {
  let cuerpo: unknown;
  try {
    cuerpo = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'El formato de la solicitud no es un JSON válido.' },
      { status: 400 }
    );
  }

  if (!cuerpo || typeof cuerpo !== 'object') {
    return NextResponse.json(
      { error: 'La solicitud no contiene datos para guardar.' },
      { status: 400 }
    );
  }

  const b = cuerpo as Record<string, unknown>;

  // Extracción de datos
  const usuario_id = typeof b.usuario_id === 'string' ? b.usuario_id.trim() : '';
  // Campo agregado después: los registros antiguos no lo tienen, así que no se
  // exige y se cae a 'tarde' en vez de rechazar la petición.
  const momento_dia = typeof b.momento_dia === 'string' && b.momento_dia.trim()
    ? b.momento_dia.trim()
    : 'tarde';
  const motivo_busqueda = typeof b.motivo_busqueda === 'string' ? b.motivo_busqueda.trim() : '';
  const nivel_hambre = typeof b.nivel_hambre === 'string' ? b.nivel_hambre.trim() : '';
  const modalidad = typeof b.modalidad === 'string' ? b.modalidad.trim() : '';
  const distrito = typeof b.distrito === 'string' ? b.distrito.trim() : 'Miraflores';
  const frase_justificacion = typeof b.frase_justificacion === 'string' ? b.frase_justificacion.trim() : '';
  
  const antojos_elegidos = Array.isArray(b.antojos_elegidos)
    ? b.antojos_elegidos.filter(a => typeof a === 'string' && a.trim().length > 0)
    : [];

  const restaurante_principal = (b.restaurante_principal && typeof b.restaurante_principal === 'object')
    ? b.restaurante_principal as Record<string, unknown>
    : null;

  const opciones_alternativas = Array.isArray(b.opciones_alternativas)
    ? b.opciones_alternativas
    : [];

  // ==========================================
  // Validaciones de negocio ANTES de escribir
  // ==========================================
  if (!usuario_id) {
    return NextResponse.json(
      { error: 'Falta identificar al usuario o sesión para registrar la recomendación.' },
      { status: 400 }
    );
  }

  if (antojos_elegidos.length === 0) {
    return NextResponse.json(
      { error: 'Debes seleccionar al menos un antojo o plato peruano.' },
      { status: 400 }
    );
  }

  if (!motivo_busqueda) {
    return NextResponse.json(
      { error: 'Falta indicar el motivo u ocasión de la comida (ej. amigos, pareja, etc.).' },
      { status: 400 }
    );
  }

  if (!nivel_hambre) {
    return NextResponse.json(
      { error: 'Falta indicar el nivel de hambre.' },
      { status: 400 }
    );
  }

  if (!modalidad || (modalidad !== 'presencial' && modalidad !== 'delivery')) {
    return NextResponse.json(
      { error: 'La modalidad debe ser presencial o delivery.' },
      { status: 400 }
    );
  }

  if (!restaurante_principal || !restaurante_principal.restaurant_name) {
    return NextResponse.json(
      { error: 'Falta el restaurante principal recomendado.' },
      { status: 400 }
    );
  }

  if (!frase_justificacion) {
    return NextResponse.json(
      { error: 'Falta la frase de justificación gastronómica.' },
      { status: 400 }
    );
  }

  try {
    const db = await getDb();
    
    const registro = {
      id: `rec_${randomUUID().substring(0, 8)}`,
      usuario_id,
      antojos_elegidos,
      momento_dia,
      motivo_busqueda,
      nivel_hambre,
      modalidad,
      distrito,
      frase_justificacion,
      restaurante_principal,
      opciones_alternativas,
      creado_en: new Date().toISOString(),
    };

    // Usamos spread para evitar que Mongo muta el objeto agregando _id
    await db.collection('recomendaciones').insertOne({ ...registro });

    return NextResponse.json({ recomendacion: registro }, { status: 201 });
  } catch (error) {
    console.error('Error al guardar en MongoDB Atlas:', error);
    return NextResponse.json(
      { error: 'No pudimos guardar la recomendación en la base de datos. Intenta de nuevo.' },
      { status: 500 }
    );
  }
}
