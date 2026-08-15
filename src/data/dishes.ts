import { Dish } from '../types';

export const PERUVIAN_DISHES: Dish[] = [
  {
    id: 'ceviche',
    name: 'Ceviche Mixto',
    category: 'marino',
    categoryLabel: 'Comida Marina',
    image: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80',
    tags: ['Fresco', 'Picante', 'Mariscos', 'Clásico'],
    description: 'Pescado fresco del día y mariscos marinados en leche de tigre con limón recién exprimido, ají limo, cebolla pluma morada, choclo desgranado y camote glaseado.',
    peruvianTrivia: 'El ceviche fue declarado Patrimonio Cultural de la Nación en Perú en el año 2004.'
  },
  {
    id: 'lomo_saltado',
    name: 'Lomo Saltado',
    category: 'criollo',
    categoryLabel: 'Comida Criolla',
    image: 'https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?auto=format&fit=crop&w=800&q=80',
    tags: ['Fuego Wok', 'Carne', 'Papas Fritas', 'Jugoso'],
    description: 'Tiras de lomo de res flambeadas al wok con fuego vivo, cebolla roja, tomate jugoso, ají amarillo y cilantro, servido con papas amarillas fritas y arroz blanco.',
    peruvianTrivia: 'El Lomo Saltado nació a fines del siglo XIX de la fusión chino-peruana en las fondas de Lima.'
  },
  {
    id: 'pollo_brasa',
    name: 'Pollo a la Brasa',
    category: 'criollo',
    categoryLabel: 'Clásico Peruano',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80',
    tags: ['Crocante', 'Jugoso', 'Papas Nativas', 'Cremas'],
    description: 'Pollo marinado en especias criollas y cerveza negra, horneado al carbón con piel dorada crujiente, servido con papas nativas fritas y crema de ají de la casa.',
    peruvianTrivia: 'Cada tercer domingo de julio se celebra en Perú el Día del Pollo a la Brasa.'
  },
  {
    id: 'chifa_chaufa',
    name: 'Arroz Chaufa y Wantán',
    category: 'chifa',
    categoryLabel: 'Chifa Fusión',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
    tags: ['Salteado', 'Ahumado', 'Chifa', 'Porción Generosa'],
    description: 'Arroz de grano largo salteado a alta temperatura en wok con kion, cebollita china, trozos de pollo marinado, aceite de ajonjolí y wantanes crocantes.',
    peruvianTrivia: 'La palabra "Chifa" proviene del cantonés "chih fan" que significa "comer arroz".'
  },
  {
    id: 'hamburguesa_camote',
    name: 'Hamburguesa Artesanal',
    category: 'fast_food',
    categoryLabel: 'Comida Rápida',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    tags: ['Jugosa', 'Queso Mantecoso', 'Chips de Camote', 'Salsas'],
    description: 'Carne 100% de res a la parrilla con queso mantecoso derretido, tocino crujiente, mayonesa de ají limo y bastones de camote frito.',
    peruvianTrivia: 'Las sangucherías tradicionales limeñas llevan más de 60 años perfeccionando el toque peruano con camote frito.'
  },
  {
    id: 'jalea_marina',
    name: 'Jalea Mixta Marina',
    category: 'marino',
    categoryLabel: 'Comida Marina',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    tags: ['Crocante', 'Mariscos', 'Salsa Criolla', 'Para Compartir'],
    description: 'Trozos de pescado y calamares empanizados en punto crocante dorado, acompañados de yucas fritas, salsa criolla con ají limo y tártara casera.',
    peruvianTrivia: 'La jalea original norteña se preparaba seco en picanterías y evolucionó con fritos crocantes marinos.'
  },
  {
    id: 'makis_acevichados',
    name: 'Makis Acevichados',
    category: 'fusion',
    categoryLabel: 'Nikkei Fusión',
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80',
    tags: ['Nikkei', 'Salsa Acevichada', 'Empanizado', 'Fresco'],
    description: 'Rolls de sushi rellenos de ebi furai crujiente y palta, empanizados al panko, cubiertos con láminas de atún fresco y bañados en salsa acevichada cremosa.',
    peruvianTrivia: 'La cocina Nikkei peruano-japonesa es famosa mundialmente gracias a iconos como Toshiro Konishi y Humberto Sato.'
  },
  {
    id: 'tacacho_cecina',
    name: 'Tacacho con Cecina',
    category: 'criollo',
    categoryLabel: 'Comida Amazónica',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    tags: ['Selva', 'Plátano Majado', 'Ahumado', 'Ají de Cocona'],
    description: 'Bolas de plátano verde bellaco majado con chicharrón de cerdo, servido con cecina ahumada de Tarapoto al carbón y salsa picante de cocona.',
    peruvianTrivia: 'El plato proviene de la voz quechua "taka-chu" que significa "lo golpeado" refiriéndose al plátano majado.'
  },
  {
    id: 'pasteria_huancaina',
    name: 'Pasta a la Huancaína con Lomo',
    category: 'fusion',
    categoryLabel: 'Fusión Peruana',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    tags: ['Cremoso', 'Ají Amarillo', 'Carne Flambeada', 'Confort'],
    description: 'Salsa tradicional cremosa de queso fresco y ají amarillo sobre fettuccine al dente, acompañada de tiras de lomo salteado al wok.',
    peruvianTrivia: 'La salsa a la huancaína nació en Junín y se popularizó con la llegada del ferrocarril en Huancayo.'
  },
  {
    id: 'salchipapa_royale',
    name: 'Salchipapa Royale',
    category: 'fast_food',
    categoryLabel: 'Comida Rápida',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80',
    tags: ['Bajón', 'Huevo Frito', 'Queso Derretido', 'Cremas'],
    description: 'Bastones de papa amarilla frita en dos tiempos con salchicha frankfurt, huevo frito a caballo de yema blanda, queso fundido y crema de ocopa.',
    peruvianTrivia: 'Un clásico indiscutible de medianoche para los bajones de fin de semana en Lima.'
  },
  {
    id: 'aji_gallina',
    name: 'Ají de Gallina',
    category: 'criollo',
    categoryLabel: 'Comida Criolla',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    tags: ['Suave', 'Nuez y Queso', 'Aromático', 'Tradicional'],
    description: 'Guiso cremoso a base de ají amarillo, pechuga deshilachada, nueces, leche evaporada y aceituna botija sobre papas sancochadas con huevo duro y arroz.',
    peruvianTrivia: 'Derivó del Menjar Blanc medieval europeo y fue adaptado con ají amarillo en el virreinato del Perú.'
  },
  {
    id: 'tacos_mex_peruanos',
    name: 'Tacos de Seco al Cilantro',
    category: 'fusion',
    categoryLabel: 'Fusión Norteña-Mexicana',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80',
    tags: ['Tacos', 'Seco Norteño', 'Cebolla Morada', 'Adictivo'],
    description: 'Tortillas de maíz artesanal rellenas de asado de res guisado al cilantro con chicha de jora, coronadas con salsa criolla limeña, ají limo y palta.',
    peruvianTrivia: 'Las propuestas de tacos taqueros fusionadas con la sazón criolla norteña triunfan en las noches gastronómicas.'
  }
];

export const LIMA_DISTRICTS = [
  { id: 'miraflores', name: 'Miraflores', lat: -12.122, lng: -77.0305 },
  { id: 'san_isidro', name: 'San Isidro', lat: -12.097, lng: -77.0345 },
  { id: 'barranco', name: 'Barranco', lat: -12.148, lng: -77.0211 },
  { id: 'surco', name: 'Santiago de Surco', lat: -12.138, lng: -76.9855 },
  { id: 'lince', name: 'Lince / San Borja', lat: -12.086, lng: -77.032 },
  { id: 'centro', name: 'Centro de Lima', lat: -12.0463, lng: -77.0427 },
];

export const PERUVIAN_MICRO_COPYS = [
  "Sancochando las mejores opciones...",
  "Pelando los datos de tu antojo...",
  "Descartando los lugares monses...",
  "Sazonando la recomendación perfecta...",
  "Buscando el huarique con las 3B (Bueno, Bonito y Barato)...",
  "Sintonizando el modo goloso :v...",
  "Calculando la distancia exacta para que no camines tanto...",
  "Asegurando que el plato venga bien despachado...",
  "Exprimiendo los limones norteños...",
  "¡Revisando que el ají pique sabroso!"
];

export const PERUVIAN_TRIVIA = [
  "💡 En el Perú hay más de 4,000 tipos de papas. ¡Imposible aburrirse de las papitas fritas! :v",
  "🌊 Un ceviche auténtico solo necesita 5 cosas: pescado fresco, limón, cebolla, ají limo y sal.",
  "🔥 El Lomo Saltado nació al juntar la sazón criolla con el toque de wok chino.",
  "🍗 ¡En Perú nos comemos más de 150 millones de pollos a la brasa al año!",
  "🍠 En Camote lo tenemos clarísimo: elegir qué comer ya no es yuca."
];
