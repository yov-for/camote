import { RecommendationResult, ContextData, LocationData, SearchMotive } from '../types';

export interface RestaurantData {
  id: string;
  name: string;
  category: string;
  rating: number;
  priceRange: '$' | '$$' | '$$$';
  distrito: string;
  address: string;
  phone: string;
  image: string;
  signatureDish: string;
  popularDishes: string[];
  supportsDelivery: boolean;
  supportsPresencial: boolean;
  tags: string[];
  actionUrl: string;
  googleMapsUrl: string;
  deliveryUrl: string;
  schedule: string;
}

export const RESTAURANTS_DATABASE: RestaurantData[] = [
  {
    "id": "barra_maretazo_1",
    "name": "Barra Maretazo",
    "category": "Cevichería",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "Calle Alcanfores 373, Miraflores",
    "phone": "(01) 9537559",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ceviche",
    "popularDishes": [
      "Ceviche",
      "platos marinos (mejor calificado según Tripadvisor)"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "ceviche",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Barra+Maretazo+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Barra+Maretazo+Miraflores+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 11:30 am - 5:00 pm"
  },
  {
    "id": "el_merl_n_de_cabo_blanco_2",
    "name": "El Merlín de Cabo Blanco",
    "category": "Cevichería / Comida marina norteña",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Lince",
    "address": "Av. César Vallejo 1502, Lince",
    "phone": "(01) 4191904",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Platos de comida marina norteña en general",
    "popularDishes": [
      "Platos de comida marina norteña en general"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "ceviche",
      "bajon_individual"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Merlín+de+Cabo+Blanco+Lince+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Merlín+de+Cabo+Blanco+Lince+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 11:30 am - 5:00 pm"
  },
  {
    "id": "la_mar_cebicher_a_peruana_3",
    "name": "La Mar Cebichería Peruana",
    "category": "Cevichería",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Miraflores",
    "address": "Av. Mariscal La Mar / Av. La Mar 770-1285, Miraflores (dirección reportada de forma inconsistente entre fuentes; confirmar sede exacta)",
    "phone": "(01) 5235858",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ceviche clásico",
    "popularDishes": [
      "Ceviche clásico",
      "tiradito nikkei",
      "causas"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "ceviche",
      "causa_limena",
      "pareja",
      "makis_acevichados"
    ],
    "actionUrl": "https://maps.google.com/?q=La+Mar+Cebichería+Peruana+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=La+Mar+Cebichería+Peruana+Miraflores+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 11:30 am - 5:00 pm"
  },
  {
    "id": "punto_azul_4",
    "name": "Punto Azul",
    "category": "Cevichería / Cocina marina tradicional",
    "rating": 4.5,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "Calle San Martín 595, Miraflores 15074",
    "phone": "(01) 2634895",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ceviche clásico",
    "popularDishes": [
      "Ceviche clásico",
      "jalea",
      "pulpo al olivo",
      "chaufa de mariscos"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "jalea_marina",
      "ceviche",
      "social_amigos",
      "chifa_chaufa"
    ],
    "actionUrl": "https://maps.google.com/?q=Punto+Azul+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Punto+Azul+Miraflores+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 11:30 am - 5:00 pm"
  },
  {
    "id": "pescados_capitales_5",
    "name": "Pescados Capitales",
    "category": "Cevichería",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Miraflores",
    "address": "Miraflores y Surco (consultar sede exacta)",
    "phone": "(01) 5908163",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ceviches temáticos (Soberbio",
    "popularDishes": [
      "Ceviches temáticos (Soberbio",
      "Lujurioso)"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "ceviche",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Pescados+Capitales+Miraflores+/+Surco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Pescados+Capitales+Miraflores+/+Surco+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 11:30 am - 5:00 pm"
  },
  {
    "id": "el_mercado_rafael_osterling_6",
    "name": "El Mercado (Rafael Osterling)",
    "category": "Cevichería / Cocina marina de autor",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Miraflores",
    "address": "Miraflores (dirección exacta no confirmada)",
    "phone": "(01) 4245906",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ceviche nikkei",
    "popularDishes": [
      "Ceviche nikkei",
      "tiradito de ají amarillo"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "ceviche",
      "pareja",
      "makis_acevichados"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Mercado+(Rafael+Osterling)+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Mercado+(Rafael+Osterling)+Miraflores+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 11:30 am - 5:00 pm"
  },
  {
    "id": "mangos_larcomar_7",
    "name": "Mangos Larcomar",
    "category": "Cevichería",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Miraflores",
    "address": "C.C. Larcomar, Miraflores",
    "phone": "(01) 2991102",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ceviche",
    "popularDishes": [
      "Ceviche"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "ceviche",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Mangos+Larcomar+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Mangos+Larcomar+Miraflores+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 11:30 am - 5:00 pm"
  },
  {
    "id": "la_red_8",
    "name": "La Red",
    "category": "Cevichería / Cocina marina moderna",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Miraflores",
    "address": "Av. La Mar, Miraflores",
    "phone": "(01) 9314342",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "No identificado",
    "popularDishes": [
      "No identificado"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "ceviche",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=La+Red+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=La+Red+Miraflores+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 11:30 am - 5:00 pm"
  },
  {
    "id": "chez_wong_9",
    "name": "Chez Wong",
    "category": "Cevichería",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Cercado de Lima",
    "address": "Calle Enrique León García 114, Cercado de Lima",
    "phone": "(01) 2476347",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ceviche preparado al momento",
    "popularDishes": [
      "Ceviche preparado al momento",
      "sin limón"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "ceviche",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Chez+Wong+Cercado+de+Lima+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Chez+Wong+Cercado+de+Lima+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 11:30 am - 5:00 pm"
  },
  {
    "id": "cevicher_a_marea_97_10",
    "name": "Cevichería Marea 97",
    "category": "Cevichería / Comida marina de barrio",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "San Miguel",
    "address": "Av. de los Precursores 1185, San Miguel",
    "phone": "(01) 3106753",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ceviche",
    "popularDishes": [
      "Ceviche"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "ceviche",
      "bajon_individual"
    ],
    "actionUrl": "https://maps.google.com/?q=Cevichería+Marea+97+San+Miguel+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Cevichería+Marea+97+San+Miguel+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 11:30 am - 5:00 pm"
  },
  {
    "id": "costanera_700_11",
    "name": "Costanera 700",
    "category": "Restaurante nikkei",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "San Isidro",
    "address": "San Isidro (dirección exacta no confirmada)",
    "phone": "(01) 7806462",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ceviche nikkei",
    "popularDishes": [
      "Ceviche nikkei",
      "tiradito Matsufuji"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "ceviche",
      "bajon_individual",
      "social_amigos",
      "makis_acevichados"
    ],
    "actionUrl": "https://maps.google.com/?q=Costanera+700+San+Isidro+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Costanera+700+San+Isidro+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "wa_lok_12",
    "name": "Wa Lok",
    "category": "Chifa / Cocina cantonesa tradicional",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "Av. Angamos Oeste 700, Miraflores / Jr. Paruro, Barrio Chino",
    "phone": "(01) 1493204",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Sopa wantán",
    "popularDishes": [
      "Sopa wantán",
      "taipá a la plancha",
      "tallarín sam si",
      "cerdo crocante"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "chifa_chaufa"
    ],
    "actionUrl": "https://maps.google.com/?q=Wa+Lok+Miraflores+/+Barrio+Chino+(Cercado+de+Lima)+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Wa+Lok+Miraflores+/+Barrio+Chino+(Cercado+de+Lima)+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "san_joy_lao_13",
    "name": "San Joy Lao",
    "category": "Chifa / Cocina cantonesa histórica",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Cercado de Lima (Barrio Chino)",
    "address": "Jr. Ucayali 779, Barrio Chino, Lima",
    "phone": "(01) 9523927",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Chaufa especial",
    "popularDishes": [
      "Chaufa especial",
      "lou ming de chancho",
      "chancho al ajo"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "chifa_chaufa"
    ],
    "actionUrl": "https://maps.google.com/?q=San+Joy+Lao+Cercado+de+Lima+(Barrio+Chino)+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=San+Joy+Lao+Cercado+de+Lima+(Barrio+Chino)+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "chifa_titi_14",
    "name": "Chifa Titi",
    "category": "Chifa",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "San Isidro",
    "address": "Av. Javier Prado Este 1212, Córpac, San Isidro",
    "phone": "(01) 6106585",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "No identificado",
    "popularDishes": [
      "No identificado"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "chifa_chaufa"
    ],
    "actionUrl": "https://maps.google.com/?q=Chifa+Titi+San+Isidro+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Chifa+Titi+San+Isidro+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "chifa_chung_yion_chifa_uni_n_15",
    "name": "Chifa Chung Yion (Chifa Unión)",
    "category": "Chifa",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Barranco",
    "address": "Centro de Barranco (dirección exacta no confirmada)",
    "phone": "(01) 1678371",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Tallarín de pollo",
    "popularDishes": [
      "Tallarín de pollo",
      "chaufa especial",
      "chijaykay"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "pollo_brasa",
      "chifa_chaufa"
    ],
    "actionUrl": "https://maps.google.com/?q=Chifa+Chung+Yion+(Chifa+Unión)+Barranco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Chifa+Chung+Yion+(Chifa+Unión)+Barranco+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "chifa_wang_xiang_yuan_16",
    "name": "Chifa Wang Xiang Yuan",
    "category": "Chifa",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "San Borja",
    "address": "Av. Aviación, San Borja",
    "phone": "(01) 4121265",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Variedad de platos",
    "popularDishes": [
      "Variedad de platos",
      "bien servido y económico"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "chifa_chaufa"
    ],
    "actionUrl": "https://maps.google.com/?q=Chifa+Wang+Xiang+Yuan+San+Borja+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Chifa+Wang+Xiang+Yuan+San+Borja+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "sal_n_cap_n_17",
    "name": "Salón Capón",
    "category": "Chifa",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Cercado de Lima (Barrio Chino)",
    "address": "Barrio Chino, Cercado de Lima",
    "phone": "(01) 7973648",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Chaufa especial",
    "popularDishes": [
      "Chaufa especial",
      "dim sum"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "chifa_chaufa"
    ],
    "actionUrl": "https://maps.google.com/?q=Salón+Capón+Cercado+de+Lima+(Barrio+Chino)+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Salón+Capón+Cercado+de+Lima+(Barrio+Chino)+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "madam_tusan_18",
    "name": "Madam Tusan",
    "category": "Chifa",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Varias sedes (San Isidro, Miraflores, Surco, entre otros)",
    "address": "Consultar sede específica",
    "phone": "(01) 5805019",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pollo chijaukay",
    "popularDishes": [
      "Pollo chijaukay",
      "aeropuerto"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos",
      "pollo_brasa",
      "chifa_chaufa"
    ],
    "actionUrl": "https://maps.google.com/?q=Madam+Tusan+Varias+sedes+(San+Isidro,+Miraflores,+Surco,+entre+otros)+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Madam+Tusan+Varias+sedes+(San+Isidro,+Miraflores,+Surco,+entre+otros)+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "chifa_four_seas_19",
    "name": "Chifa Four Seas",
    "category": "Chifa / Cocina cantonesa",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "San Borja",
    "address": "Av. Aviación 2877, San Borja",
    "phone": "(01) 5021538",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "No identificado",
    "popularDishes": [
      "No identificado"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos",
      "chifa_chaufa"
    ],
    "actionUrl": "https://maps.google.com/?q=Chifa+Four+Seas+San+Borja+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Chifa+Four+Seas+San+Borja+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "el_rinc_n_que_no_conoces_teresa_izquierdo_20",
    "name": "El Rincón que No Conoces (Teresa Izquierdo)",
    "category": "Restaurante criollo",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Lince",
    "address": "Calle Bernardo Alcedo 363, Lince",
    "phone": "(01) 6842143",
    "image": "https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Tacu tacu",
    "popularDishes": [
      "Tacu tacu",
      "buffet criollo"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "tacu_tacu"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Rincón+que+No+Conoces+(Teresa+Izquierdo)+Lince+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Rincón+que+No+Conoces+(Teresa+Izquierdo)+Lince+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "el_huarique_de_los_cuchitos_don_cucho_la_rosa_21",
    "name": "El Huarique de los Cuchitos - Don Cucho La Rosa",
    "category": "Restaurante criollo / Huarique de cocina criolla",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Chorrillos",
    "address": "Malecón Grau 731, Chorrillos",
    "phone": "(01) 4379037",
    "image": "https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "No identificado",
    "popularDishes": [
      "No identificado"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Huarique+de+los+Cuchitos+-+Don+Cucho+La+Rosa+Chorrillos+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Huarique+de+los+Cuchitos+-+Don+Cucho+La+Rosa+Chorrillos+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "panchita_22",
    "name": "Panchita",
    "category": "Restaurante criollo",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Miraflores",
    "address": "Miraflores (dirección exacta no confirmada)",
    "phone": "(01) 8834058",
    "image": "https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "No identificado",
    "popularDishes": [
      "No identificado"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Panchita+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Panchita+Miraflores+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "queirolo_pueblo_libre_23",
    "name": "Queirolo (Pueblo Libre)",
    "category": "Restaurante criollo",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Pueblo Libre",
    "address": "Av. San Martín 1090, Pueblo Libre",
    "phone": "(01) 6849154",
    "image": "https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Patita con maní",
    "popularDishes": [
      "Patita con maní",
      "chilcano"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Queirolo+(Pueblo+Libre)+Pueblo+Libre+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Queirolo+(Pueblo+Libre)+Pueblo+Libre+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "isolina_taberna_peruana_24",
    "name": "Isolina Taberna Peruana",
    "category": "Restaurante criollo",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Barranco",
    "address": "Av. San Martín (Prolongación) 101, Barranco / segunda sede: Av. El Polo 605, Surco",
    "phone": "(01) 3688517",
    "image": "https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Causa limeña",
    "popularDishes": [
      "Causa limeña",
      "escabeche de bonito",
      "cau cau",
      "lomo saltado"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "lomo_saltado",
      "causa_limena",
      "social_amigos",
      "bajon_individual"
    ],
    "actionUrl": "https://maps.google.com/?q=Isolina+Taberna+Peruana+Barranco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Isolina+Taberna+Peruana+Barranco+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "pardos_chicken_25",
    "name": "Pardos Chicken",
    "category": "Pollería",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores (origen)",
    "address": "Múltiples sedes verificadas: Av. Alfredo Benavides 730 (Miraflores); Av. Sta. Cruz 898 (Miraflores); Malecón de la Reserva 610, Larcomar (Miraflores); y otras sedes en Lima",
    "phone": "(01) 8621863",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pollo a la brasa clásico",
    "popularDishes": [
      "Pollo a la brasa clásico",
      "papas con rejillas de camote"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Pardos+Chicken+Miraflores+(origen)+/+múltiples+sedes+en+Lima+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Pardos+Chicken+Miraflores+(origen)+/+múltiples+sedes+en+Lima+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "granja_azul_26",
    "name": "Granja Azul",
    "category": "Pollería",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Varias sedes",
    "address": "Consultar sede específica",
    "phone": "(01) 1679676",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pollo a la brasa",
    "popularDishes": [
      "Pollo a la brasa"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Granja+Azul+Varias+sedes+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Granja+Azul+Varias+sedes+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "don_tito_27",
    "name": "Don Tito",
    "category": "Pollería",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Surco",
    "address": "Consultar sede específica",
    "phone": "(01) 1007771",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pollo crocante",
    "popularDishes": [
      "Pollo crocante",
      "papas cortadas en casa",
      "chimichurri"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Don+Tito+Surco+/+San+Isidro+/+múltiples+sedes+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Don+Tito+Surco+/+San+Isidro+/+múltiples+sedes+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "tori_poller_a_28",
    "name": "Tori Pollería",
    "category": "Pollería",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Varias sedes",
    "address": "Consultar sede específica",
    "phone": "(01) 1059498",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pollo a la brasa con guarniciones nikkei",
    "popularDishes": [
      "Pollo a la brasa con guarniciones nikkei",
      "bowls",
      "wraps"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "makis_acevichados",
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Tori+Pollería+Varias+sedes+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Tori+Pollería+Varias+sedes+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "primos_chicken_bar_29",
    "name": "Primos Chicken Bar",
    "category": "Pollería",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Varias sedes",
    "address": "Consultar sede específica",
    "phone": "(01) 1953580",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pollo con papas fritas",
    "popularDishes": [
      "Pollo con papas fritas",
      "ensalada fresca",
      "chicha 1.5L"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Primos+Chicken+Bar+Varias+sedes+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Primos+Chicken+Bar+Varias+sedes+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "maido_30",
    "name": "Maido",
    "category": "Restaurante nikkei",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "San Isidro",
    "address": "Calle San Martín 399, Miraflores 15074",
    "phone": "(01) 7939310",
    "image": "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Menú degustación nikkei",
    "popularDishes": [
      "Menú degustación nikkei"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "makis_acevichados",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Maido+San+Isidro+/+Miraflores+(dirección+exacta+no+confirmada+de+forma+consistente)+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Maido+San+Isidro+/+Miraflores+(dirección+exacta+no+confirmada+de+forma+consistente)+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "matsuei_31",
    "name": "Matsuei",
    "category": "Restaurante japonés",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Miraflores",
    "address": "Miraflores (dirección exacta no confirmada)",
    "phone": "(01) 3618257",
    "image": "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Maki dragón",
    "popularDishes": [
      "Maki dragón",
      "ramen",
      "nigiris"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "makis_acevichados",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Matsuei+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Matsuei+Miraflores+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "edo_sushi_bar_32",
    "name": "Edo Sushi Bar",
    "category": "Restaurante nikkei",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Miraflores",
    "address": "Miraflores (dirección exacta no confirmada)",
    "phone": "(01) 8471105",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Makis acevichados",
    "popularDishes": [
      "Makis acevichados",
      "sushi fusión"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "makis_acevichados",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Edo+Sushi+Bar+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Edo+Sushi+Bar+Miraflores+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "osaka_33",
    "name": "Osaka",
    "category": "Restaurante nikkei",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "San Isidro",
    "address": "San Isidro (dirección exacta no confirmada)",
    "phone": "(01) 5459606",
    "image": "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Experiencia degustación nikkei",
    "popularDishes": [
      "Experiencia degustación nikkei"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "makis_acevichados",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Osaka+San+Isidro+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Osaka+San+Isidro+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "tomo_34",
    "name": "Tomo",
    "category": "Restaurante nikkei / Nikkei íntimo, omakase",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Miraflores",
    "address": "No identificado",
    "phone": "(01) 9578726",
    "image": "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Experiencia omakase",
    "popularDishes": [
      "Experiencia omakase",
      "sushi de autor"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "makis_acevichados",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Tomo+No+identificado+(aforo+reducido,+ubicación+reservada)+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Tomo+No+identificado+(aforo+reducido,+ubicación+reservada)+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "mayta_35",
    "name": "Mayta",
    "category": "Restaurante nikkei / Nikkei contemporáneo de autor",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Miraflores",
    "address": "No identificado",
    "phone": "(01) 1438359",
    "image": "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "No identificado",
    "popularDishes": [
      "No identificado"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "makis_acevichados",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Mayta+No+identificado+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Mayta+No+identificado+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "kinjo_ramen_36",
    "name": "Kinjo Ramen",
    "category": "Ramen",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "Av. Sta. Cruz 825, Miraflores / C.C. El Polo, Surco",
    "phone": "(01) 3670474",
    "image": "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ramen tonkotsu",
    "popularDishes": [
      "Ramen tonkotsu",
      "shoyu",
      "miso",
      "pirikara"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Kinjo+Ramen+Miraflores+/+Surco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Kinjo+Ramen+Miraflores+/+Surco+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "ozu_37",
    "name": "Ozu",
    "category": "Restaurante nikkei",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Miraflores",
    "address": "No identificado",
    "phone": "(01) 9241828",
    "image": "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Dumplings de langostino",
    "popularDishes": [
      "Dumplings de langostino",
      "roll crocante"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "makis_acevichados",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Ozu+No+identificado+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Ozu+No+identificado+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "demo_caf_38",
    "name": "Demo Café",
    "category": "Cafetería / Brunch",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Barranco",
    "address": "Barranco (dirección exacta no confirmada)",
    "phone": "(01) 2545349",
    "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Cachapa con queso",
    "popularDishes": [
      "Cachapa con queso",
      "cruffin de flan",
      "flan de Demo"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Demo+Café+Barranco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Demo+Café+Barranco+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 7:30 am - 9:00 pm"
  },
  {
    "id": "la_tiendecita_blanca_39",
    "name": "La Tiendecita Blanca",
    "category": "Cafetería",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "Av. Larco 111, Miraflores",
    "phone": "(01) 3491365",
    "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Strudel",
    "popularDishes": [
      "Strudel",
      "chocolate suizo",
      "desayuno criollo"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "pareja"
    ],
    "actionUrl": "https://maps.google.com/?q=La+Tiendecita+Blanca+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=La+Tiendecita+Blanca+Miraflores+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 7:30 am - 9:00 pm"
  },
  {
    "id": "tarta_de_queso_40",
    "name": "Tarta de Queso",
    "category": "Pastelería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Surco",
    "address": "Av. Encalada 715, Surco",
    "phone": "(01) 2221702",
    "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Tartas frutales",
    "popularDishes": [
      "Tartas frutales",
      "cheesecakes"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Tarta+de+Queso+Surco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Tarta+de+Queso+Surco+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "la_bodega_verde_41",
    "name": "La Bodega Verde",
    "category": "Cafetería / Brunch / Café jardín, brunch saludable",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Barranco",
    "address": "Barranco (dirección exacta no confirmada)",
    "phone": "(01) 9023666",
    "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Bowls",
    "popularDishes": [
      "Bowls",
      "tostadas de aguacate"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=La+Bodega+Verde+Barranco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=La+Bodega+Verde+Barranco+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 7:30 am - 9:00 pm"
  },
  {
    "id": "el_m_s_gauchito_42",
    "name": "El Más Gauchito",
    "category": "Parrilla / Parrilla argentina",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "San Juan de Lurigancho",
    "address": "Junto a Av. Las Flores, San Juan de Lurigancho",
    "phone": "(01) 2497506",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Asado",
    "popularDishes": [
      "Asado",
      "parrillada"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Más+Gauchito+San+Juan+de+Lurigancho+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Más+Gauchito+San+Juan+de+Lurigancho+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "montang_43",
    "name": "Montangú",
    "category": "Restaurante familiar",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "San Juan de Lurigancho",
    "address": "Av. Las Flores 233, San Juan de Lurigancho",
    "phone": "(01) 8025969",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "No identificado",
    "popularDishes": [
      "No identificado"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Montangú+San+Juan+de+Lurigancho+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Montangú+San+Juan+de+Lurigancho+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "el_chinito_44",
    "name": "El Chinito",
    "category": "Sanguchería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Cercado de Lima (varias sedes)",
    "address": "Jr. Chancay 894 / Jr. Carabaya 318, Lima",
    "phone": "(01) 8234507",
    "image": "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pan con chicharrón",
    "popularDishes": [
      "Pan con chicharrón",
      "butifarra"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "pan_chicharron",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Chinito+Cercado+de+Lima+(varias+sedes)+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Chinito+Cercado+de+Lima+(varias+sedes)+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 7:30 am - 9:00 pm"
  },
  {
    "id": "antigua_taberna_queirolo_pueblo_libre_45",
    "name": "Antigua Taberna Queirolo (Pueblo Libre)",
    "category": "Sanguchería / Bar criollo",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Pueblo Libre",
    "address": "Av. San Martín 1090, Pueblo Libre",
    "phone": "(01) 2836882",
    "image": "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Butifarra",
    "popularDishes": [
      "Butifarra"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "pan_chicharron",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Antigua+Taberna+Queirolo+(Pueblo+Libre)+Pueblo+Libre+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Antigua+Taberna+Queirolo+(Pueblo+Libre)+Pueblo+Libre+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Mar - Dom: 6:00 pm - 1:00 am"
  },
  {
    "id": "bar_cordano_46",
    "name": "Bar Cordano",
    "category": "Sanguchería / Bar criollo",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Cercado de Lima",
    "address": "Jr. Áncash 202, Lima (junto al Palacio de Gobierno)",
    "phone": "(01) 5518713",
    "image": "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Butifarra",
    "popularDishes": [
      "Butifarra"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "pan_chicharron",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Bar+Cordano+Cercado+de+Lima+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Bar+Cordano+Cercado+de+Lima+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Mar - Dom: 6:00 pm - 1:00 am"
  },
  {
    "id": "sanguch_n_campesino_47",
    "name": "Sanguchón Campesino",
    "category": "Sanguchería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "San Isidro",
    "address": "Av. Primavera 120, San Isidro",
    "phone": "(01) 9205344",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Súper Campesino",
    "popularDishes": [
      "Súper Campesino"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "pan_chicharron",
      "bajon_individual",
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Sanguchón+Campesino+San+Isidro+/+varias+sedes+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Sanguchón+Campesino+San+Isidro+/+varias+sedes+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "la_lucha_sangucher_a_48",
    "name": "La Lucha Sanguchería",
    "category": "Sanguchería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Varias sedes (Miraflores, entre otras)",
    "address": "Consultar sede específica",
    "phone": "(01) 1971897",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pollo deluxe",
    "popularDishes": [
      "Pollo deluxe"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "pan_chicharron",
      "bajon_individual",
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=La+Lucha+Sanguchería+Varias+sedes+(Miraflores,+entre+otras)+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=La+Lucha+Sanguchería+Varias+sedes+(Miraflores,+entre+otras)+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "osso_churrasquer_a_49",
    "name": "Osso Churrasquería",
    "category": "Parrilla / Churrasquería / Parrilla premium",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Miraflores",
    "address": "No identificado",
    "phone": "(01) 7070231",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "No identificado",
    "popularDishes": [
      "No identificado"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Osso+Churrasquería+No+identificado+(Miraflores/San+Isidro,+confirmar+sede)+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Osso+Churrasquería+No+identificado+(Miraflores/San+Isidro,+confirmar+sede)+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "loco_de_asar_50",
    "name": "Loco de Asar",
    "category": "Parrilla / Parrilla argentina",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Lince",
    "address": "Av. Arequipa 2545, Lince / Jr. Antonio Bazo 1200, La Victoria",
    "phone": "(01) 3299972",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Asado argentino",
    "popularDishes": [
      "Asado argentino"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Loco+de+Asar+Lince+/+La+Victoria+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Loco+de+Asar+Lince+/+La+Victoria+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "boycott_hamburgueser_a_51",
    "name": "Boycott (hamburguesería)",
    "category": "Hamburguesería / Hamburguesas de autor",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "No identificado",
    "phone": "(01) 9613963",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Osaka Super Cheese",
    "popularDishes": [
      "Osaka Super Cheese",
      "Kyoto Sweet Shoyu",
      "Wisconsin Fire"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos",
      "hamburguesa_camote"
    ],
    "actionUrl": "https://maps.google.com/?q=Boycott+(hamburguesería)+No+identificado+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Boycott+(hamburguesería)+No+identificado+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "big_boy_hamburgueser_a_52",
    "name": "Big Boy (hamburguesería)",
    "category": "Hamburguesería",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "No identificado",
    "phone": "(01) 1247152",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Doble y triple carne",
    "popularDishes": [
      "Doble y triple carne"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos",
      "hamburguesa_camote"
    ],
    "actionUrl": "https://maps.google.com/?q=Big+Boy+(hamburguesería)+No+identificado+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Big+Boy+(hamburguesería)+No+identificado+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "2080_burger_place_53",
    "name": "2080 Burger Place",
    "category": "Hamburguesería / Smash burgers de autor",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Surquillo",
    "address": "Surquillo (dirección exacta no confirmada) / Yoy Lima Box Park",
    "phone": "(01) 1210009",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Hamburguesa 2080",
    "popularDishes": [
      "Hamburguesa 2080",
      "hamburguesa Zeta"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "hamburguesa_camote"
    ],
    "actionUrl": "https://maps.google.com/?q=2080+Burger+Place+Surquillo+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=2080+Burger+Place+Surquillo+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "burger_boy_54",
    "name": "Burger Boy",
    "category": "Hamburguesería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Miraflores",
    "address": "Jr. Choquehuanca 411, Miraflores",
    "phone": "(01) 1817260",
    "image": "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Kauboi San",
    "popularDishes": [
      "Kauboi San",
      "California OG"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "makis_acevichados",
      "social_amigos",
      "hamburguesa_camote"
    ],
    "actionUrl": "https://maps.google.com/?q=Burger+Boy+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Burger+Boy+Miraflores+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "el_vegetariano_55",
    "name": "El Vegetariano",
    "category": "Comida vegetariana",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Miraflores",
    "address": "Calle Cantuarias 285, Miraflores",
    "phone": "(01) 1015332",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ceviche vegetariano de champiñones",
    "popularDishes": [
      "Ceviche vegetariano de champiñones",
      "lomo saltado de seitán",
      "menú del día"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "ceviche",
      "lomo_saltado",
      "estudio_trabajo"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Vegetariano+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Vegetariano+Miraflores+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "seitan_urban_bistro_56",
    "name": "Seitan Urban Bistro",
    "category": "Comida vegana",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "Miraflores (dirección exacta no confirmada)",
    "phone": "(01) 7903510",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "'Pollo frito' vegano",
    "popularDishes": [
      "'Pollo frito' vegano",
      "alitas de coliflor BBQ",
      "lomo saltado de champiñones y seitán"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "lomo_saltado",
      "bajon_individual",
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Seitan+Urban+Bistro+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Seitan+Urban+Bistro+Miraflores+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "la_verde_bio_factor_a_57",
    "name": "La Verde Bio-Factoría",
    "category": "Comida vegana",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "Calle Gral. Recavarren 315, Miraflores",
    "phone": "(01) 8451386",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Tazones de açaí",
    "popularDishes": [
      "Tazones de açaí",
      "hamburguesas veganas",
      "pan orgánico"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "hamburguesa_camote"
    ],
    "actionUrl": "https://maps.google.com/?q=La+Verde+Bio-Factoría+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=La+Verde+Bio-Factoría+Miraflores+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 7:30 am - 9:00 pm"
  },
  {
    "id": "veda_restaurante_58",
    "name": "Veda Restaurante",
    "category": "Comida vegana",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Miraflores",
    "address": "No identificado",
    "phone": "(01) 7508814",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Tallarines a la huancaína con tofu",
    "popularDishes": [
      "Tallarines a la huancaína con tofu",
      "ají de gallina 'feliz'",
      "causa acevichada",
      "kombucha propia"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "causa_limena",
      "aji_gallina",
      "estudio_trabajo"
    ],
    "actionUrl": "https://maps.google.com/?q=Veda+Restaurante+No+identificado+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Veda+Restaurante+No+identificado+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "el_jard_n_de_jazm_n_59",
    "name": "El Jardín de Jazmín",
    "category": "Comida saludable / vegetariana",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "Av. La Paz 838, Miraflores",
    "phone": "(01) 9152118",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Mantra bowl",
    "popularDishes": [
      "Mantra bowl",
      "hamburguesa de frijoles negros"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos",
      "hamburguesa_camote"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Jardín+de+Jazmín+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Jardín+de+Jazmín+Miraflores+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "maz_60",
    "name": "Ámaz",
    "category": "Comida amazónica",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Miraflores",
    "address": "Av. La Paz 1079, Miraflores / Circunvalación Club Golf Los Incas 134, Surco",
    "phone": "(01) 2587853",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ceviche Ámaz",
    "popularDishes": [
      "Ceviche Ámaz",
      "totumazo de cerdo",
      "helado de cecina"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "ceviche",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Ámaz+Miraflores+/+Surco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Ámaz+Miraflores+/+Surco+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "mishkina_61",
    "name": "Mishkina",
    "category": "Comida amazónica / Cocina amazónica moderna",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Barranco",
    "address": "2 sedes: Barranco y Surquillo (direcciones exactas no confirmadas)",
    "phone": "(01) 3711907",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Tequeños amazónicos",
    "popularDishes": [
      "Tequeños amazónicos",
      "chaufa Mishkina",
      "costilla con tacacho"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "chifa_chaufa"
    ],
    "actionUrl": "https://maps.google.com/?q=Mishkina+Barranco+/+Surquillo+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Mishkina+Barranco+/+Surquillo+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "el_bijao_62",
    "name": "El Bijao",
    "category": "Comida amazónica",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Lince",
    "address": "Lince (dirección exacta no confirmada)",
    "phone": "(01) 5300039",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Tacu tacu con cecina",
    "popularDishes": [
      "Tacu tacu con cecina",
      "juane de yuca",
      "ensalada de chonta"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "tacu_tacu"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Bijao+Lince+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Bijao+Lince+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "el_pichito_63",
    "name": "El Pichito",
    "category": "Comida amazónica",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Breña",
    "address": "Jr. General Vidal 803, Breña / Calle Los Mangos 155, La Molina",
    "phone": "(01) 7511029",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Patarashca de paiche",
    "popularDishes": [
      "Patarashca de paiche",
      "inchicapi vegetariano",
      "tamales de plátano"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Pichito+Breña+/+La+Molina+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Pichito+Breña+/+La+Molina+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "mar_y_selva_cocina_amaz_nica_fusi_n_64",
    "name": "Mar y Selva - Cocina Amazónica Fusión",
    "category": "Comida amazónica",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Surquillo",
    "address": "Av. Tomás Marsano 1195, Surquillo",
    "phone": "(01) 5276203",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Tacacho con cecina",
    "popularDishes": [
      "Tacacho con cecina",
      "arroz de la selva"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Mar+y+Selva+-+Cocina+Amazónica+Fusión+Surquillo+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Mar+y+Selva+-+Cocina+Amazónica+Fusión+Surquillo+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "las_brisas_del_ucayali_65",
    "name": "Las Brisas del Ucayali",
    "category": "Comida amazónica",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Santiago de Surco",
    "address": "Puesto 359, Mercado Anexo Jorge Chávez, cdra. 7 Av. Jorge Chávez, Surco",
    "phone": "(01) 5610079",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Chaufa de la selva con cecina y chorizo",
    "popularDishes": [
      "Chaufa de la selva con cecina y chorizo"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "chifa_chaufa"
    ],
    "actionUrl": "https://maps.google.com/?q=Las+Brisas+del+Ucayali+Santiago+de+Surco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Las+Brisas+del+Ucayali+Santiago+de+Surco+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "flama_pizzeria_66",
    "name": "Flama Pizzeria",
    "category": "Pizzería",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "Calle Coronel Inclán 300, Miraflores",
    "phone": "(01) 6519091",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pomodorini bocconcini & pesto",
    "popularDishes": [
      "Pomodorini bocconcini & pesto",
      "pizza de prosciutto y arúgula",
      "cacio e pepe"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Flama+Pizzeria+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Flama+Pizzeria+Miraflores+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "amarcord_67",
    "name": "Amarcord",
    "category": "Pizzería",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "Miraflores (dirección exacta no confirmada)",
    "phone": "(01) 7745339",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pizza napolitana",
    "popularDishes": [
      "Pizza napolitana"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Amarcord+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Amarcord+Miraflores+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "indio_pizza_68",
    "name": "Indio Pizza",
    "category": "Pizzería / Pizza artesanal de autor",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Barranco",
    "address": "Barranco (dirección exacta no confirmada)",
    "phone": "(01) 9145520",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "No identificado",
    "popularDishes": [
      "No identificado"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Indio+Pizza+Barranco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Indio+Pizza+Barranco+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "spizza_69",
    "name": "Spizza",
    "category": "Pizzería",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "No identificado",
    "phone": "(01) 7614391",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Nido fungí",
    "popularDishes": [
      "Nido fungí",
      "tiramisú"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Spizza+No+identificado+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Spizza+No+identificado+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "mamma_lola_trattoria_70",
    "name": "Mamma Lola (Trattoria)",
    "category": "Restaurante italiano",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "Miraflores (dirección exacta no confirmada)",
    "phone": "(01) 2627472",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pulpo a la parrilla",
    "popularDishes": [
      "Pulpo a la parrilla",
      "pasta casera"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Mamma+Lola+(Trattoria)+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Mamma+Lola+(Trattoria)+Miraflores+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "rossa_pizza_appassionata_71",
    "name": "Rossa Pizza Appassionata",
    "category": "Pizzería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "San Isidro",
    "address": "Calle Choquehuanca 601, San Isidro",
    "phone": "(01) 8177319",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pizza Margarita (#1)",
    "popularDishes": [
      "Pizza Margarita (#1)",
      "pizza de hongos y mozzarella (#16)",
      "Carbonara (#22)"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Rossa+Pizza+Appassionata+San+Isidro+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Rossa+Pizza+Appassionata+San+Isidro+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "pizza_ra_l_72",
    "name": "Pizza Raúl",
    "category": "Pizzería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Varias sedes (más de 40 en Lima)",
    "address": "Consultar sede específica",
    "phone": "(01) 4498560",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pizza familiar clásica",
    "popularDishes": [
      "Pizza familiar clásica"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Pizza+Raúl+Varias+sedes+(más+de+40+en+Lima)+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Pizza+Raúl+Varias+sedes+(más+de+40+en+Lima)+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "namu_73",
    "name": "Namu",
    "category": "Comida coreana",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Miraflores",
    "address": "Av. Arenales (Lince), dirección exacta no confirmada",
    "phone": "(01) 7789297",
    "image": "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ramen",
    "popularDishes": [
      "Ramen",
      "bibimbap"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Namu+No+identificado+(Lince,+según+referencias)+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Namu+No+identificado+(Lince,+según+referencias)+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "maru_comida_coreana_74",
    "name": "Maru Comida Coreana",
    "category": "Comida coreana",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Santiago de Surco",
    "address": "C.C. Polvos Rosados, 3er piso, Surco",
    "phone": "(01) 2037352",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Comida coreana variada",
    "popularDishes": [
      "Comida coreana variada"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Maru+Comida+Coreana+Santiago+de+Surco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Maru+Comida+Coreana+Santiago+de+Surco+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "nodaji_75",
    "name": "NODAJI",
    "category": "Comida coreana",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "San Borja",
    "address": "San Borja (dirección exacta no confirmada)",
    "phone": "(01) 1273429",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Más de 50 platos típicos coreanos",
    "popularDishes": [
      "Más de 50 platos típicos coreanos"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos",
      "bajon_individual",
      "aji_gallina"
    ],
    "actionUrl": "https://maps.google.com/?q=NODAJI+San+Borja+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=NODAJI+San+Borja+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "restaurante_arirang_76",
    "name": "Restaurante Arirang",
    "category": "Comida coreana / Cocina coreana",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "San Isidro",
    "address": "Calle Las Orquídeas 443-447, San Isidro",
    "phone": "(01) 1280522",
    "image": "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Samgyupsal",
    "popularDishes": [
      "Samgyupsal",
      "chadolbagi",
      "kimbap",
      "mandu"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Restaurante+Arirang+San+Isidro+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Restaurante+Arirang+San+Isidro+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "chimaek_77",
    "name": "Chimaek",
    "category": "Comida coreana",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Surquillo",
    "address": "Surquillo (dark kitchen, solo delivery)",
    "phone": "(01) 2412095",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Yangnyeom Spicy chicken",
    "popularDishes": [
      "Yangnyeom Spicy chicken",
      "cheese tteokbokki"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Chimaek+Surquillo+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Chimaek+Surquillo+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "el_rancho_grande_del_per_78",
    "name": "El Rancho Grande del Perú",
    "category": "Restaurante regional / campestre",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Comas",
    "address": "Av. Héroes del Alto Cenepa (Ex Av. Trapiche), Comas",
    "phone": "(01) 3473958",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Cuy chactado con papa colorada",
    "popularDishes": [
      "Cuy chactado con papa colorada",
      "pachamanca tres sabores",
      "rocoto relleno"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Rancho+Grande+del+Perú+Comas+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Rancho+Grande+del+Perú+Comas+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "la_olla_arequipe_a_trapiche_79",
    "name": "La Olla Arequipeña (Trapiche)",
    "category": "Restaurante regional",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Comas",
    "address": "Calle 31 Mz. S1 Lt. 19-20, Urb. El Álamo, Comas",
    "phone": "(01) 2479375",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Rocoto relleno",
    "popularDishes": [
      "Rocoto relleno",
      "chicharrón de cuy",
      "costillar de carnero",
      "sarsa de patita"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=La+Olla+Arequipeña+(Trapiche)+Comas+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=La+Olla+Arequipeña+(Trapiche)+Comas+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "el_bonito_soy_yo_80",
    "name": "El Bonito Soy Yo",
    "category": "Cevichería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Comas",
    "address": "Av. Trapiche (Héroes del Alto Cenepa), Comas",
    "phone": "(01) 5071598",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ceviche",
    "popularDishes": [
      "Ceviche",
      "platos marinos"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "ceviche",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Bonito+Soy+Yo+Comas+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Bonito+Soy+Yo+Comas+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 11:30 am - 5:00 pm"
  },
  {
    "id": "el_rinconcito_chinchano_81",
    "name": "El Rinconcito Chinchano",
    "category": "Restaurante regional",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Comas",
    "address": "Av. México, Comas",
    "phone": "(01) 3813781",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Seco de cabrito",
    "popularDishes": [
      "Seco de cabrito",
      "chinguirito"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "seco_res",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Rinconcito+Chinchano+Comas+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Rinconcito+Chinchano+Comas+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "la_t_a_meche_82",
    "name": "La Tía Meche",
    "category": "Cevichería / Cevichería de Lima Norte",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Comas",
    "address": "Av. Túpac Amaru, Comas",
    "phone": "(01) 5014654",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ceviche clásico",
    "popularDishes": [
      "Ceviche clásico"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "ceviche",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=La+Tía+Meche+Comas+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=La+Tía+Meche+Comas+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 11:30 am - 5:00 pm"
  },
  {
    "id": "central_83",
    "name": "Central",
    "category": "Restaurante de autor",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Barranco",
    "address": "Av. Pedro de Osma 301, Barranco (Casa Túpac)",
    "phone": "(01) 2270190",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Menú degustación por pisos ecológicos (17+ tiempos)",
    "popularDishes": [
      "Menú degustación por pisos ecológicos (17+ tiempos)"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Central+Barranco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Central+Barranco+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "kjolle_84",
    "name": "Kjolle",
    "category": "Restaurante de autor",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Barranco",
    "address": "Av. Pedro de Osma 301, Barranco (Casa Túpac)",
    "phone": "(01) 2133859",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Interpretación de tubérculos andinos ('Many Tubers')",
    "popularDishes": [
      "Interpretación de tubérculos andinos ('Many Tubers')"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Kjolle+Barranco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Kjolle+Barranco+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "rafael_85",
    "name": "Rafael",
    "category": "Restaurante de autor",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Miraflores",
    "address": "Miraflores (dirección exacta no confirmada en esta tanda)",
    "phone": "(01) 1647972",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ceviche",
    "popularDishes": [
      "Ceviche",
      "tiradito",
      "pizza y pasta de autor"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "ceviche",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Rafael+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Rafael+Miraflores+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "el_mexicano_86",
    "name": "El Mexicano",
    "category": "Comida mexicana",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Miraflores",
    "address": "Calle Manuel Bonilla 248, Miraflores / Av. Benavides 3761, Surco",
    "phone": "(01) 4191858",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Tacos de birria",
    "popularDishes": [
      "Tacos de birria",
      "nachos",
      "quesadillas tex"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Mexicano+Miraflores+/+Surco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Mexicano+Miraflores+/+Surco+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "como_agua_para_chocolate_87",
    "name": "Como Agua Para Chocolate",
    "category": "Comida mexicana",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "San Isidro",
    "address": "Calle Pancho Fierro 108, San Isidro",
    "phone": "(01) 2750075",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Tampiqueñas",
    "popularDishes": [
      "Tampiqueñas",
      "steak al tequila",
      "nachos con pico de gallo"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Como+Agua+Para+Chocolate+San+Isidro+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Como+Agua+Para+Chocolate+San+Isidro+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "chinga_tu_taco_88",
    "name": "Chinga Tu Taco",
    "category": "Comida mexicana",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Miraflores",
    "address": "Calle Berlín 135, Miraflores / Av. Mariscal La Mar 1300, Miraflores",
    "phone": "(01) 6037778",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Taco de lomo saltado",
    "popularDishes": [
      "Taco de lomo saltado",
      "taco de pollo anticuchero",
      "taco de carne gaucha"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "lomo_saltado",
      "bajon_individual",
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Chinga+Tu+Taco+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Chinga+Tu+Taco+Miraflores+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "burrito_bar_89",
    "name": "Burrito Bar",
    "category": "Comida mexicana",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Barranco",
    "address": "Av. Almirante Miguel Grau 113, Barranco",
    "phone": "(01) 9053572",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Burritos",
    "popularDishes": [
      "Burritos",
      "hamburguesas",
      "barbacoa"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "hamburguesa_camote"
    ],
    "actionUrl": "https://maps.google.com/?q=Burrito+Bar+Barranco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Burrito+Bar+Barranco+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "la_s_per_rueda_90",
    "name": "La Súper Rueda",
    "category": "Comida mexicana / Tex-Mex",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Miraflores",
    "address": "Av. José Pardo 1224, Miraflores",
    "phone": "(01) 2068787",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Enchilada mixta",
    "popularDishes": [
      "Enchilada mixta",
      "salchiextrema"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=La+Súper+Rueda+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=La+Súper+Rueda+Miraflores+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "el_huarique_de_los_cuchitos_malec_n_chorrillos_91",
    "name": "El Huarique de los Cuchitos - Malecón Chorrillos",
    "category": "Restaurante criollo",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Chorrillos",
    "address": "Malecón de Chorrillos (sede de reapertura de Cucho La Rosa)",
    "phone": "(01) 7252228",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Cocina criolla y marina tradicional",
    "popularDishes": [
      "Cocina criolla y marina tradicional"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Huarique+de+los+Cuchitos+-+Malecón+Chorrillos+Chorrillos+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Huarique+de+los+Cuchitos+-+Malecón+Chorrillos+Chorrillos+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "otani_el_encuentro_otani_92",
    "name": "Otani (El Encuentro Otani)",
    "category": "Restaurante nikkei",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Chorrillos",
    "address": "Jr. Los Titanes 182, La Campiña, Chorrillos",
    "phone": "(01) 4769557",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "El Encuentro Otani (pollo",
    "popularDishes": [
      "El Encuentro Otani (pollo",
      "carne",
      "pescado",
      "mariscos)"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "tacu_tacu",
      "pollo_brasa",
      "bajon_individual",
      "makis_acevichados",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Otani+(El+Encuentro+Otani)+Chorrillos+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Otani+(El+Encuentro+Otani)+Chorrillos+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "ballar_ristorante_93",
    "name": "Ballaró Ristorante",
    "category": "Restaurante italiano",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Chorrillos",
    "address": "Malecón Grau, Chorrillos",
    "phone": "(01) 3202053",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "No identificado",
    "popularDishes": [
      "No identificado"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Ballaró+Ristorante+Chorrillos+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Ballaró+Ristorante+Chorrillos+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "tarboush_94",
    "name": "Tarboush",
    "category": "Comida árabe / Cocina árabe con terraza",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "Miraflores (dirección exacta no confirmada)",
    "phone": "(01) 6627695",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Falafel",
    "popularDishes": [
      "Falafel",
      "shawarma",
      "hummus"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Tarboush+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Tarboush+Miraflores+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "restaurante_tierra_santa_95",
    "name": "Restaurante Tierra Santa",
    "category": "Comida árabe",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "Calle Shell 354, Miraflores / Av. Caminos del Inca 1512, Surco",
    "phone": "(01) 3206436",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Hojas de parra rellenas",
    "popularDishes": [
      "Hojas de parra rellenas",
      "falafel",
      "shawarma"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Restaurante+Tierra+Santa+Miraflores+/+Surco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Restaurante+Tierra+Santa+Miraflores+/+Surco+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "azahar_cocina_rabe_96",
    "name": "Azahar Cocina Árabe",
    "category": "Comida árabe",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "San Isidro",
    "address": "San Isidro (dirección exacta no confirmada)",
    "phone": "(01) 1227990",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Hummus",
    "popularDishes": [
      "Hummus"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual"
    ],
    "actionUrl": "https://maps.google.com/?q=Azahar+Cocina+Árabe+San+Isidro+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Azahar+Cocina+Árabe+San+Isidro+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "ali_baba_97",
    "name": "Ali Baba",
    "category": "Comida árabe / Cocina árabe/palestina",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Miraflores",
    "address": "Francisco Moreno 900, Surquillo / C.C. Lince / C. Teodoro Cárdenas 275, Cercado de Lima (3 sedes)",
    "phone": "(01) 3405769",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "No identificado",
    "popularDishes": [
      "No identificado"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual"
    ],
    "actionUrl": "https://maps.google.com/?q=Ali+Baba+No+identificado+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Ali+Baba+No+identificado+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "habibis_sangucher_a_caf_rabe_98",
    "name": "Habibis - Sanguchería & Café Árabe",
    "category": "Comida árabe",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Miraflores",
    "address": "Malecón de la Marina 880, Miraflores",
    "phone": "(01) 4973757",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Shawarmas",
    "popularDishes": [
      "Shawarmas",
      "pitas",
      "hummus"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "pan_chicharron",
      "bajon_individual"
    ],
    "actionUrl": "https://maps.google.com/?q=Habibis+-+Sanguchería+&+Café+Árabe+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Habibis+-+Sanguchería+&+Café+Árabe+Miraflores+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "sushimania_per_99",
    "name": "SushiMania Perú",
    "category": "Restaurante japonés / Sushi y ramen de barrio",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Santa Anita",
    "address": "Av. Los Eucaliptos 1256, Santa Anita",
    "phone": "(01) 5833328",
    "image": "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Rollos de sushi",
    "popularDishes": [
      "Rollos de sushi",
      "ramen"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "makis_acevichados",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=SushiMania+Perú+Santa+Anita+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=SushiMania+Perú+Santa+Anita+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "restaurante_la_barca_100",
    "name": "Restaurante La Barca",
    "category": "Restaurante marino / criollo / Cocina marina y criolla",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Ate",
    "address": "Av. La Molina Lote 4, Ate",
    "phone": "(01) 2953413",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Arroz con mariscos",
    "popularDishes": [
      "Arroz con mariscos",
      "causa de pulpa de cangrejo"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "causa_limena",
      "bajon_individual",
      "social_amigos",
      "arroz_mariscos"
    ],
    "actionUrl": "https://maps.google.com/?q=Restaurante+La+Barca+Ate+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Restaurante+La+Barca+Ate+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "poller_a_el_carbonero_101",
    "name": "Pollería El Carbonero",
    "category": "Pollería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "San Juan de Lurigancho",
    "address": "Av. Sta. Rosa de Lima 633-613, San Juan de Lurigancho",
    "phone": "(01) 9727640",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pollo a la brasa sazonado con mezcla de especias",
    "popularDishes": [
      "Pollo a la brasa sazonado con mezcla de especias"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Pollería+El+Carbonero+San+Juan+de+Lurigancho+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Pollería+El+Carbonero+San+Juan+de+Lurigancho+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "pollos_a_la_brasa_el_gringo_102",
    "name": "Pollos a la Brasa El Gringo",
    "category": "Pollería / Pollo a la brasa de barrio",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "San Juan de Lurigancho",
    "address": "Av. Sta. Rosa de Lima 1713, San Juan de Lurigancho",
    "phone": "(01) 4945985",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pollo a la brasa",
    "popularDishes": [
      "Pollo a la brasa",
      "papas fritas crujientes"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Pollos+a+la+Brasa+El+Gringo+San+Juan+de+Lurigancho+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Pollos+a+la+Brasa+El+Gringo+San+Juan+de+Lurigancho+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "don_dono_pollos_y_parrillas_103",
    "name": "Don Dono Pollos y Parrillas",
    "category": "Pollería / Pollo a la brasa y parrillas",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "San Juan de Lurigancho",
    "address": "Jr. San Martín 320, San Juan de Lurigancho",
    "phone": "(01) 6855958",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pollo a la brasa",
    "popularDishes": [
      "Pollo a la brasa",
      "parrillas de carne"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Don+Dono+Pollos+y+Parrillas+San+Juan+de+Lurigancho+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Don+Dono+Pollos+y+Parrillas+San+Juan+de+Lurigancho+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "poller_a_don_leo_104",
    "name": "Pollería Don Leo",
    "category": "Pollería / Pollo a la brasa de barrio",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "San Juan de Lurigancho",
    "address": "Av. San Hilarión Este 172, San Juan de Lurigancho",
    "phone": "(01) 9720528",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pollo a la brasa",
    "popularDishes": [
      "Pollo a la brasa",
      "salsas caseras"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Pollería+Don+Leo+San+Juan+de+Lurigancho+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Pollería+Don+Leo+San+Juan+de+Lurigancho+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "poller_a_do_a_brasa_105",
    "name": "Pollería Doña Brasa",
    "category": "Pollería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "San Juan de Lurigancho",
    "address": "Zona central del distrito (dirección exacta de calle no confirmada)",
    "phone": "(01) 1793727",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pollo a la brasa",
    "popularDishes": [
      "Pollo a la brasa",
      "toque casero"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Pollería+Doña+Brasa+San+Juan+de+Lurigancho+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Pollería+Doña+Brasa+San+Juan+de+Lurigancho+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "poller_a_paredes_106",
    "name": "Pollería Paredes",
    "category": "Pollería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Comas",
    "address": "Av. Universitaria 6703, Comas",
    "phone": "(01) 4927736",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pollo jugoso",
    "popularDishes": [
      "Pollo jugoso"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Pollería+Paredes+Comas+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Pollería+Paredes+Comas+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "poller_a_villa_granja_107",
    "name": "Pollería Villa Granja",
    "category": "Pollería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Comas",
    "address": "Av. Túpac Amaru 3788, Comas",
    "phone": "(01) 6600838",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pollo a la brasa",
    "popularDishes": [
      "Pollo a la brasa",
      "precios accesibles"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Pollería+Villa+Granja+Comas+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Pollería+Villa+Granja+Comas+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "sabor_chicken_and_grill_108",
    "name": "Sabor Chicken and Grill",
    "category": "Pollería / Pollo a la brasa de barrio",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Comas",
    "address": "Av. Micaela Bastidas 151, Comas",
    "phone": "(01) 7450212",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pollo a la brasa de sabor único",
    "popularDishes": [
      "Pollo a la brasa de sabor único"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Sabor+Chicken+and+Grill+Comas+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Sabor+Chicken+and+Grill+Comas+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "el_saz_n_de_la_le_a_109",
    "name": "El Sazón de la Leña",
    "category": "Pollería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Comas",
    "address": "Av. Guillermo de la Fuente 283, Comas",
    "phone": "(01) 6013886",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pollo a la brasa",
    "popularDishes": [
      "Pollo a la brasa",
      "cremas de acompañamiento"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Sazón+de+la+Leña+Comas+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Sazón+de+la+Leña+Comas+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "don_belisario_110",
    "name": "Don Belisario",
    "category": "Pollería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "San Luis",
    "address": "Av. San Luis 1770, San Luis / Av. Javier Prado 5475, Miraflores",
    "phone": "(01) 3956816",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pollo a la brasa con papas fritas y ensalada",
    "popularDishes": [
      "Pollo a la brasa con papas fritas y ensalada"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Don+Belisario+San+Luis+/+varias+sedes+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Don+Belisario+San+Luis+/+varias+sedes+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "rocky_s_roky_s_111",
    "name": "Rocky's (Roky's)",
    "category": "Pollería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Varias sedes en Lima",
    "address": "Consultar sede específica",
    "phone": "(01) 6946362",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pollo a la brasa",
    "popularDishes": [
      "Pollo a la brasa",
      "lomo saltado",
      "arroz con pollo"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "lomo_saltado",
      "bajon_individual",
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Rocky's+(Roky's)+Varias+sedes+en+Lima+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Rocky's+(Roky's)+Varias+sedes+en+Lima+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "m_rito_112",
    "name": "Mérito",
    "category": "Restaurante de autor",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Barranco",
    "address": "Jr. Grau 203A / Av. 28 de Julio 206, Barranco",
    "phone": "(01) 4852606",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Tiradito de vieiras",
    "popularDishes": [
      "Tiradito de vieiras",
      "platos de autor con insumos peruanos y venezolanos"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Mérito+Barranco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Mérito+Barranco+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "chamos_comida_a_tu_medida_113",
    "name": "Chamos - Comida a tu Medida",
    "category": "Comida venezolana",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Magdalena del Mar",
    "address": "Jr. Leoncio Prado 1094-A, Magdalena del Mar",
    "phone": "(01) 6046497",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Arepa Pituca (pollo",
    "popularDishes": [
      "Arepa Pituca (pollo",
      "palta",
      "queso gouda",
      "huancaína)"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Chamos+-+Comida+a+tu+Medida+Magdalena+del+Mar+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Chamos+-+Comida+a+tu+Medida+Magdalena+del+Mar+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "el_budare_resto_bar_114",
    "name": "El Budare Resto Bar",
    "category": "Comida venezolana",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Barranco",
    "address": "Calle Manuel Segura 123, Barranco",
    "phone": "(01) 8614568",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Cachapa de pabellón",
    "popularDishes": [
      "Cachapa de pabellón",
      "parrilla de carne en vara con guasacaca"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Budare+Resto+Bar+Barranco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Budare+Resto+Bar+Barranco+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "arepa_caf_115",
    "name": "Arepa Café",
    "category": "Comida venezolana / Primera arepera de Lima",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Barranco",
    "address": "Av. Grau 624, Barranco",
    "phone": "(01) 4658086",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Arepas con variedad de rellenos",
    "popularDishes": [
      "Arepas con variedad de rellenos",
      "golfeados",
      "chicha de arroz"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Arepa+Café+Barranco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Arepa+Café+Barranco+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 7:30 am - 9:00 pm"
  },
  {
    "id": "cachapas_de_lima_116",
    "name": "Cachapas de Lima",
    "category": "Comida venezolana",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Santiago de Surco",
    "address": "Jr. Sagitario 230, Surco / Av. Nicolás de Piérola 418, Barranco",
    "phone": "(01) 2614890",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Cachapa con queso",
    "popularDishes": [
      "Cachapa con queso",
      "cachapa parrillera",
      "tequeños"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Cachapas+de+Lima+Santiago+de+Surco+/+Barranco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Cachapas+de+Lima+Santiago+de+Surco+/+Barranco+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "nagoya_117",
    "name": "Nagoya",
    "category": "Comida china (no-chifa)",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "La Molina",
    "address": "Av. Javier Prado Este 5902, Urb. La Fontana, La Molina",
    "phone": "(01) 9407956",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pato pekín",
    "popularDishes": [
      "Pato pekín",
      "tallarines tai",
      "bocaditos de Shanghai",
      "arroz O-Mei"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "chifa_chaufa"
    ],
    "actionUrl": "https://maps.google.com/?q=Nagoya+La+Molina+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Nagoya+La+Molina+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "el_charr_a_118",
    "name": "El Charrúa",
    "category": "Parrilla / Parrilla uruguaya premium",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "La Molina",
    "address": "Av. Javier Prado Este 5898, La Molina",
    "phone": "(01) 5895984",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Tomahawk",
    "popularDishes": [
      "Tomahawk",
      "entraña",
      "lomo pallar"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "lomo_saltado",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Charrúa+La+Molina+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Charrúa+La+Molina+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "bloom_119",
    "name": "Bloom",
    "category": "Comida vegana",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "La Molina",
    "address": "Jr. Los Bambúes 198, La Molina",
    "phone": "(01) 3932215",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Vegan capresse",
    "popularDishes": [
      "Vegan capresse",
      "tostón con palta",
      "fudgy brownie",
      "pastas artesanales"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Bloom+La+Molina+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Bloom+La+Molina+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 7:30 am - 9:00 pm"
  },
  {
    "id": "el_hornero_la_molina_120",
    "name": "El Hornero (La Molina)",
    "category": "Restaurante criollo / Comida criolla y carnes",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "La Molina",
    "address": "Av. Circunvalación del Golf 408, La Molina",
    "phone": "(01) 6317670",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "No identificado",
    "popularDishes": [
      "No identificado"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Hornero+(La+Molina)+La+Molina+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Hornero+(La+Molina)+La+Molina+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "restaurante_chiclayano_la_molina_121",
    "name": "Restaurante Chiclayano (La Molina)",
    "category": "Restaurante regional / Cocina chiclayana auténtica",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "La Molina",
    "address": "Av. Los Constructores 902, La Molina",
    "phone": "(01) 6549790",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Arroz con pato",
    "popularDishes": [
      "Arroz con pato",
      "cabrito",
      "ceviche",
      "espesado de lunes"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "ceviche",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Restaurante+Chiclayano+(La+Molina)+La+Molina+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Restaurante+Chiclayano+(La+Molina)+La+Molina+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "elia_restaurante_122",
    "name": "Elia Restaurante",
    "category": "Restaurante italiano",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Magdalena del Mar",
    "address": "Magdalena del Mar (dirección exacta no confirmada)",
    "phone": "(01) 6062437",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pastas",
    "popularDishes": [
      "Pastas",
      "salsas",
      "postres",
      "panes"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "pareja"
    ],
    "actionUrl": "https://maps.google.com/?q=Elia+Restaurante+Magdalena+del+Mar+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Elia+Restaurante+Magdalena+del+Mar+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "el_fog_n_del_asador_123",
    "name": "El Fogón del Asador",
    "category": "Parrilla / Parrilla de carnes variadas",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Magdalena del Mar",
    "address": "Magdalena del Mar (dirección exacta no confirmada)",
    "phone": "(01) 5454503",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Parrillas de distintas procedencias",
    "popularDishes": [
      "Parrillas de distintas procedencias"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Fogón+del+Asador+Magdalena+del+Mar+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Fogón+del+Asador+Magdalena+del+Mar+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "p_prika_hotel_costa_del_sol_124",
    "name": "Páprika (Hotel Costa del Sol)",
    "category": "Restaurante internacional",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Magdalena del Mar",
    "address": "Av. Javier Prado Oeste 299, Magdalena del Mar",
    "phone": "(01) 9270739",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ceviche",
    "popularDishes": [
      "Ceviche",
      "cuy",
      "lomo saltado",
      "causa"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "causa_limena",
      "lomo_saltado",
      "bajon_individual",
      "ceviche",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Páprika+(Hotel+Costa+del+Sol)+Magdalena+del+Mar+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Páprika+(Hotel+Costa+del+Sol)+Magdalena+del+Mar+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 7:30 am - 9:00 pm"
  },
  {
    "id": "don_bosco_125",
    "name": "Don Bosco",
    "category": "Restaurante criollo",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Jesús María",
    "address": "Av. Cuba 1265, Jesús María",
    "phone": "(01) 2051866",
    "image": "https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Tallarines verdes con apanado",
    "popularDishes": [
      "Tallarines verdes con apanado",
      "cau cau",
      "chanfainita",
      "carapulcra"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "pareja"
    ],
    "actionUrl": "https://maps.google.com/?q=Don+Bosco+Jesús+María+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Don+Bosco+Jesús+María+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "el_tarwi_126",
    "name": "El Tarwi",
    "category": "Restaurante regional",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Jesús María",
    "address": "Jesús María (dirección exacta no confirmada)",
    "phone": "(01) 6185236",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Platos regionales de la sierra ancashina",
    "popularDishes": [
      "Platos regionales de la sierra ancashina"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Tarwi+Jesús+María+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Tarwi+Jesús+María+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "la_retama_127",
    "name": "La Retama",
    "category": "Restaurante regional",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Jesús María",
    "address": "Jesús María (dirección exacta no confirmada)",
    "phone": "(01) 5626695",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Mondongo",
    "popularDishes": [
      "Mondongo",
      "cuy chactado",
      "puca picante",
      "pachamanca (primer día de mes)"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=La+Retama+Jesús+María+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=La+Retama+Jesús+María+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "yo_amo_ferre_afe_128",
    "name": "Yo Amo Ferreñafe",
    "category": "Restaurante regional",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Jesús María",
    "address": "Av. Gral. Eugenio Garzón 699, Jesús María",
    "phone": "(01) 6115004",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Arroz con pato",
    "popularDishes": [
      "Arroz con pato",
      "ceviche",
      "seco de cabrito con frijoles"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "ceviche",
      "seco_res",
      "social_amigos",
      "bajon_individual"
    ],
    "actionUrl": "https://maps.google.com/?q=Yo+Amo+Ferreñafe+Jesús+María+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Yo+Amo+Ferreñafe+Jesús+María+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "el_aguajal_129",
    "name": "El Aguajal",
    "category": "Comida amazónica",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Jesús María",
    "address": "Jr. Huiracocha 1498, Jesús María",
    "phone": "(01) 9203867",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Platos tradicionales amazónicos",
    "popularDishes": [
      "Platos tradicionales amazónicos"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Aguajal+Jesús+María+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Aguajal+Jesús+María+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "ko_asian_kitchen_130",
    "name": "Ko Asian Kitchen",
    "category": "Comida asiática panasiática",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Jesús María",
    "address": "Real Plaza Salaverry, Plaza Gourmet nivel 0, Jesús María",
    "phone": "(01) 1101624",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Makis",
    "popularDishes": [
      "Makis",
      "platos panasiáticos"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "makis_acevichados",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Ko+Asian+Kitchen+Jesús+María+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Ko+Asian+Kitchen+Jesús+María+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "cevicher_a_el_bote_131",
    "name": "Cevichería El Bote",
    "category": "Cevichería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Jesús María",
    "address": "Residencial San Felipe, Jesús María",
    "phone": "(01) 9262505",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Fuente 4x4 (arroz con mariscos",
    "popularDishes": [
      "Fuente 4x4 (arroz con mariscos",
      "ceviche",
      "chicharrón de calamar)",
      "parihuela con cangrejo"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "ceviche",
      "arroz_mariscos",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Cevichería+El+Bote+Jesús+María+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Cevichería+El+Bote+Jesús+María+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 11:30 am - 5:00 pm"
  },
  {
    "id": "la_posada_de_justo_132",
    "name": "La Posada de Justo",
    "category": "Restaurante español",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Jesús María",
    "address": "Av. Cuba 1200, Jesús María",
    "phone": "(01) 4755659",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "No identificado",
    "popularDishes": [
      "No identificado"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=La+Posada+de+Justo+Jesús+María+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=La+Posada+de+Justo+Jesús+María+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "el_caballero_negro_133",
    "name": "El Caballero Negro",
    "category": "Restaurante temático / bar",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Villa El Salvador",
    "address": "Villa El Salvador (dirección exacta vía Google Place ID de la fuente, no extraída directamente)",
    "phone": "(01) 3600627",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Cócteles creativos",
    "popularDishes": [
      "Cócteles creativos"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Caballero+Negro+Villa+El+Salvador+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Caballero+Negro+Villa+El+Salvador+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Mar - Dom: 6:00 pm - 1:00 am"
  },
  {
    "id": "d_kalle_pizza_134",
    "name": "D'Kalle Pizza",
    "category": "Pizzería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Villa El Salvador",
    "address": "Villa El Salvador (dirección exacta no confirmada)",
    "phone": "(01) 8469517",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pizza personalizable",
    "popularDishes": [
      "Pizza personalizable"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=D'Kalle+Pizza+Villa+El+Salvador+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=D'Kalle+Pizza+Villa+El+Salvador+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "el_rinc_n_del_sabor_135",
    "name": "El Rincón del Sabor",
    "category": "Restaurante criollo",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "San Juan de Miraflores",
    "address": "San Juan de Miraflores (dirección exacta no confirmada)",
    "phone": "(01) 8621236",
    "image": "https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Arroz con pato",
    "popularDishes": [
      "Arroz con pato",
      "seco con frejoles",
      "ají de gallina"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "seco_res",
      "social_amigos",
      "bajon_individual",
      "aji_gallina"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Rincón+del+Sabor+San+Juan+de+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Rincón+del+Sabor+San+Juan+de+Miraflores+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "vora_club_bar_136",
    "name": "Vora Club Bar",
    "category": "Bar / restaurante",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Villa María del Triunfo",
    "address": "Av. El Triunfo, Villa María del Triunfo",
    "phone": "(01) 6394770",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "No identificado",
    "popularDishes": [
      "No identificado"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Vora+Club+Bar+Villa+María+del+Triunfo+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Vora+Club+Bar+Villa+María+del+Triunfo+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Mar - Dom: 6:00 pm - 1:00 am"
  },
  {
    "id": "cevicher_a_entre_maderas_137",
    "name": "Cevichería Entre Maderas",
    "category": "Cevichería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Villa María del Triunfo",
    "address": "Jirón El Carmen 305, Villa María del Triunfo",
    "phone": "(01) 7790166",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ceviche",
    "popularDishes": [
      "Ceviche"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "ceviche",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Cevichería+Entre+Maderas+Villa+María+del+Triunfo+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Cevichería+Entre+Maderas+Villa+María+del+Triunfo+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 11:30 am - 5:00 pm"
  },
  {
    "id": "bravazo_villa_mar_a_del_triunfo_138",
    "name": "BRAVAZO Villa María del Triunfo",
    "category": "Hamburguesería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Villa María del Triunfo",
    "address": "Av. San José 229, Villa María del Triunfo",
    "phone": "(01) 9962665",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Hamburguesa americana clásica",
    "popularDishes": [
      "Hamburguesa americana clásica"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "hamburguesa_camote"
    ],
    "actionUrl": "https://maps.google.com/?q=BRAVAZO+Villa+María+del+Triunfo+Villa+María+del+Triunfo+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=BRAVAZO+Villa+María+del+Triunfo+Villa+María+del+Triunfo+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "restaurante_tur_stico_cajamarquino_del_buen_sabor_139",
    "name": "Restaurante Turístico Cajamarquino del Buen Sabor",
    "category": "Restaurante regional",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Puente Piedra",
    "address": "Av. Los Portales 458, Rosa Luz, Puente Piedra (frente al Mercado Los Portales)",
    "phone": "(01) 8186084",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pachamanca tradicional",
    "popularDishes": [
      "Pachamanca tradicional"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Restaurante+Turístico+Cajamarquino+del+Buen+Sabor+Puente+Piedra+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Restaurante+Turístico+Cajamarquino+del+Buen+Sabor+Puente+Piedra+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "anticucher_a_beny_140",
    "name": "Anticuchería Beny",
    "category": "Restaurante criollo",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Puente Piedra",
    "address": "Puente Piedra (dirección exacta no confirmada)",
    "phone": "(01) 6718678",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Anticuchos",
    "popularDishes": [
      "Anticuchos",
      "pancita"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "anticuchos",
      "pareja"
    ],
    "actionUrl": "https://maps.google.com/?q=Anticuchería+Beny+Puente+Piedra+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Anticuchería+Beny+Puente+Piedra+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "los_amigos_de_maca_141",
    "name": "Los Amigos de Maca",
    "category": "Restaurante criollo",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Puente Piedra",
    "address": "Zona Stone Bridge, Puente Piedra",
    "phone": "(01) 2509511",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Anticuchos",
    "popularDishes": [
      "Anticuchos",
      "alitas",
      "molleja",
      "churrasco"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "anticuchos",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Los+Amigos+de+Maca+Puente+Piedra+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Los+Amigos+de+Maca+Puente+Piedra+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "caba_a_steakhouse_142",
    "name": "Cabaña Steakhouse",
    "category": "Parrilla",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Puente Piedra",
    "address": "Puente Piedra, cerca a Ancón",
    "phone": "(01) 1122965",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Picaña",
    "popularDishes": [
      "Picaña",
      "entraña americana"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Cabaña+Steakhouse+Puente+Piedra+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Cabaña+Steakhouse+Puente+Piedra+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "don_fausto_restaurant_143",
    "name": "Don Fausto Restaurant",
    "category": "Sanguchería / Desayunos",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Puente Piedra",
    "address": "A espaldas de la Municipalidad de Puente Piedra",
    "phone": "(01) 8103368",
    "image": "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pan con chicharrón",
    "popularDishes": [
      "Pan con chicharrón",
      "pan con lomo",
      "jugos frescos"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "pan_chicharron",
      "lomo_saltado",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Don+Fausto+Restaurant+Puente+Piedra+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Don+Fausto+Restaurant+Puente+Piedra+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 7:30 am - 9:00 pm"
  },
  {
    "id": "yakumar_144",
    "name": "Yakumar",
    "category": "Restaurante marino",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Puente Piedra",
    "address": "Puente Piedra (dirección exacta no confirmada; cadena con sedes en Callao, Carabayllo, Los Olivos)",
    "phone": "(01) 9516603",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Platos de mariscos clásicos y contemporáneos",
    "popularDishes": [
      "Platos de mariscos clásicos y contemporáneos"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Yakumar+Puente+Piedra+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Yakumar+Puente+Piedra+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "taitarumi_se_or_de_las_piedras_145",
    "name": "Taitarumi, Señor de las Piedras",
    "category": "Restaurante regional",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Carabayllo",
    "address": "Carabayllo (dirección exacta no confirmada)",
    "phone": "(01) 4370334",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "No identificado",
    "popularDishes": [
      "No identificado"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Taitarumi,+Señor+de+las+Piedras+Carabayllo+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Taitarumi,+Señor+de+las+Piedras+Carabayllo+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "cevicher_a_el_anzuelo_146",
    "name": "Cevichería El Anzuelo",
    "category": "Cevichería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Independencia",
    "address": "Av. Túpac Amaru 270, Independencia",
    "phone": "(01) 3281703",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ceviche",
    "popularDishes": [
      "Ceviche"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "ceviche",
      "bajon_individual"
    ],
    "actionUrl": "https://maps.google.com/?q=Cevichería+El+Anzuelo+Independencia+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Cevichería+El+Anzuelo+Independencia+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 11:30 am - 5:00 pm"
  },
  {
    "id": "chifa_fu_yao_147",
    "name": "Chifa Fu Yao",
    "category": "Chifa / Chifa de barrio",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Independencia",
    "address": "Av. Los Alisos, Independencia (dirección exacta no confirmada de forma independiente)",
    "phone": "(01) 9100447",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "No identificado",
    "popularDishes": [
      "No identificado"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "chifa_chaufa"
    ],
    "actionUrl": "https://maps.google.com/?q=Chifa+Fu+Yao+Independencia+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Chifa+Fu+Yao+Independencia+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "troppo_148",
    "name": "Troppo",
    "category": "Restaurante italiano",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "San Isidro",
    "address": "San Isidro (dirección exacta no confirmada)",
    "phone": "(01) 6869854",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pizzas artesanales",
    "popularDishes": [
      "Pizzas artesanales",
      "pesce piccata",
      "pastas"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Troppo+San+Isidro+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Troppo+San+Isidro+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "la_trattoria_di_mambrino_149",
    "name": "La Trattoria di Mambrino",
    "category": "Restaurante italiano",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "Malecón de la Reserva 610 (CC. Larcomar), Miraflores / Av. Pardo y Aliaga 656, San Isidro / C.C. Jockey Plaza, Surco",
    "phone": "(01) 7816871",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Arroz marisquero con langostinos",
    "popularDishes": [
      "Arroz marisquero con langostinos",
      "tiramisú reinventado"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=La+Trattoria+di+Mambrino+Miraflores+/+San+Isidro+/+Surco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=La+Trattoria+di+Mambrino+Miraflores+/+San+Isidro+/+Surco+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "pasta_restaurante_150",
    "name": "Pasta (Restaurante)",
    "category": "Restaurante italiano",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "San Isidro",
    "address": "Calle Choquehuanca 611, San Isidro",
    "phone": "(01) 8346254",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Taglierini con anchoas",
    "popularDishes": [
      "Taglierini con anchoas",
      "spaghetti alle vongole",
      "spaghetti carbonara",
      "cacio e pepe"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Pasta+(Restaurante)+San+Isidro+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Pasta+(Restaurante)+San+Isidro+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "la_piccolina_151",
    "name": "La Piccolina",
    "category": "Restaurante italiano",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Santiago de Surco",
    "address": "Calle Simón Salguero 625, Surco / Av. La Encalada 895, Surco / Calle Los Laureles 519, San Isidro (6 locales en total)",
    "phone": "(01) 8652243",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ravioles a la bolognesa",
    "popularDishes": [
      "Ravioles a la bolognesa",
      "ossobuco",
      "pizzas (entre las 10 mejores de Lima)"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=La+Piccolina+Santiago+de+Surco+/+San+Isidro+/+varias+sedes+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=La+Piccolina+Santiago+de+Surco+/+San+Isidro+/+varias+sedes+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "osteria_convivium_152",
    "name": "Osteria Convivium",
    "category": "Restaurante italiano / Osteria italiana de autor",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "San Isidro",
    "address": "Calle Santa Luisa 110, San Isidro",
    "phone": "(01) 4772794",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Fettuccine ai funghi porcini e tartufo",
    "popularDishes": [
      "Fettuccine ai funghi porcini e tartufo",
      "spaghetti carbonara",
      "tiramisú"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Osteria+Convivium+San+Isidro+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Osteria+Convivium+San+Isidro+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "trattoria_don_vito_153",
    "name": "Trattoria Don Vito",
    "category": "Restaurante italiano",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "Miraflores (dirección exacta no confirmada)",
    "phone": "(01) 3407857",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Arancinis al tartufo",
    "popularDishes": [
      "Arancinis al tartufo",
      "ravioles petto di pato",
      "surf & turf"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Trattoria+Don+Vito+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Trattoria+Don+Vito+Miraflores+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "la_linterna_154",
    "name": "La Linterna",
    "category": "Restaurante italiano",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Barranco",
    "address": "Av. Miguel Grau 689, Barranco / Calle Los Libertadores 311, San Isidro",
    "phone": "(01) 8619775",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pizza de masa delgada",
    "popularDishes": [
      "Pizza de masa delgada",
      "pastas tradicionales"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=La+Linterna+Barranco+/+San+Isidro+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=La+Linterna+Barranco+/+San+Isidro+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "la_traviata_155",
    "name": "La Traviata",
    "category": "Restaurante italiano",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "Av. Reducto 1236, Miraflores / Emilio Cavenecia 321, San Isidro",
    "phone": "(01) 7037988",
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ravioles de espinaca",
    "popularDishes": [
      "Ravioles de espinaca",
      "fetuccinis a lo alfredo"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=La+Traviata+Miraflores+/+San+Isidro+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=La+Traviata+Miraflores+/+San+Isidro+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "shi_nu_156",
    "name": "Shi-Nuá",
    "category": "Comida china (no-chifa)",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "San Isidro",
    "address": "Centro Empresarial Real, Edificio Real 2, Av. Víctor Andrés Belaúnde 147, Vía Principal 133, San Isidro",
    "phone": "(01) 9133063",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Platos de autor con reinterpretación de clásicos chinos",
    "popularDishes": [
      "Platos de autor con reinterpretación de clásicos chinos"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "chifa_chaufa"
    ],
    "actionUrl": "https://maps.google.com/?q=Shi-Nuá+San+Isidro+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Shi-Nuá+San+Isidro+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "chifa_peach_garden_157",
    "name": "Chifa Peach Garden",
    "category": "Chifa",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Miraflores",
    "address": "Av. Vasco Núñez de Balboa 737, Miraflores",
    "phone": "(01) 2121070",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "No identificado",
    "popularDishes": [
      "No identificado"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "chifa_chaufa"
    ],
    "actionUrl": "https://maps.google.com/?q=Chifa+Peach+Garden+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Chifa+Peach+Garden+Miraflores+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "kion_158",
    "name": "Kion",
    "category": "Comida china (no-chifa)",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "No identificado",
    "phone": "(01) 6496732",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Platillos personales de fusión",
    "popularDishes": [
      "Platillos personales de fusión",
      "cócteles"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos",
      "chifa_chaufa"
    ],
    "actionUrl": "https://maps.google.com/?q=Kion+No+identificado+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Kion+No+identificado+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "el_chino_yuan_159",
    "name": "El Chino Yuan",
    "category": "Comida china (no-chifa)",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Santiago de Surco",
    "address": "Jr. Diana Mz. A18 Lt. 17, Surco",
    "phone": "(01) 2426517",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Arroz frito",
    "popularDishes": [
      "Arroz frito",
      "lumpias",
      "chop suey"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "chifa_chaufa"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Chino+Yuan+Santiago+de+Surco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Chino+Yuan+Santiago+de+Surco+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "casa_corea_160",
    "name": "Casa Corea",
    "category": "Comida coreana",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Miraflores",
    "address": "Av. Grau 237, Miraflores",
    "phone": "(01) 5690000",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Dosirak",
    "popularDishes": [
      "Dosirak",
      "pollo frito coreano",
      "kimbap",
      "postre de chocolate"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Casa+Corea+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Casa+Corea+Miraflores+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "han_kook_kwan_161",
    "name": "Han Kook Kwan",
    "category": "Comida coreana",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "San Borja",
    "address": "Av. San Luis 2256, San Borja",
    "phone": "(01) 4972593",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Cangrejo crudo",
    "popularDishes": [
      "Cangrejo crudo",
      "platos caseros tradicionales"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Han+Kook+Kwan+San+Borja+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Han+Kook+Kwan+San+Borja+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "coreano_dos_hermanos_162",
    "name": "Coreano Dos Hermanos",
    "category": "Comida coreana",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Santiago de Surco",
    "address": "Av. Aviación 4812, Surco",
    "phone": "(01) 3916644",
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Dumplings estilo dim sum con gochujang",
    "popularDishes": [
      "Dumplings estilo dim sum con gochujang"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Coreano+Dos+Hermanos+Santiago+de+Surco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Coreano+Dos+Hermanos+Santiago+de+Surco+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "seoul_garden_k_food_163",
    "name": "Seoul Garden K-Food",
    "category": "Comida coreana",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "No identificado",
    "phone": "(01) 4346285",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Buffet coreano libre",
    "popularDishes": [
      "Buffet coreano libre"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Seoul+Garden+K-Food+No+identificado+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Seoul+Garden+K-Food+No+identificado+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "asu_maki_164",
    "name": "Asu Maki",
    "category": "Makis / Nikkei",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "Calle La Mar 830, Miraflores",
    "phone": "(01) 8230429",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Maki Luiggi",
    "popularDishes": [
      "Maki Luiggi",
      "avocado",
      "acevichado",
      "mailey spicy"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "makis_acevichados",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Asu+Maki+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Asu+Maki+Miraflores+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "makoto_165",
    "name": "Makoto",
    "category": "Makis / Nikkei",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "Calle 2 de Mayo 413, Miraflores / C.C. Jockey Plaza",
    "phone": "(01) 7593998",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Maki acevichado",
    "popularDishes": [
      "Maki acevichado",
      "maki shogun",
      "maki parmesano",
      "maki volcán"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "makis_acevichados",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Makoto+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Makoto+Miraflores+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "nakachi_166",
    "name": "Nakachi",
    "category": "Makis / Nikkei",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "Calle Manuel Bonilla 170, Miraflores",
    "phone": "(01) 2028259",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Maki acevichado",
    "popularDishes": [
      "Maki acevichado",
      "koi maki",
      "inka maki",
      "nakachi maki"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "makis_acevichados",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Nakachi+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Nakachi+Miraflores+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "yoyogi_167",
    "name": "Yoyogi",
    "category": "Makis / Nikkei",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "Av. Angamos Este 415, Miraflores",
    "phone": "(01) 8678476",
    "image": "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Barra libre de makis y alitas BBQ",
    "popularDishes": [
      "Barra libre de makis y alitas BBQ"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "makis_acevichados",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Yoyogi+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Yoyogi+Miraflores+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "asi_nica_168",
    "name": "Asiánica",
    "category": "Makis / Comida saludable",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Miraflores",
    "address": "Av. Petit Thouars 5232, Miraflores",
    "phone": "(01) 7532834",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Maki Acevichado vegano",
    "popularDishes": [
      "Maki Acevichado vegano",
      "Asiánica",
      "Terimaki"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "makis_acevichados",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Asiánica+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Asiánica+Miraflores+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "hana_sushi_cocina_nikkei_169",
    "name": "Hana Sushi Cocina Nikkei",
    "category": "Makis / Nikkei",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "San Miguel",
    "address": "Av. Universitaria 770, San Miguel",
    "phone": "(01) 7553596",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Maki acevichado",
    "popularDishes": [
      "Maki acevichado",
      "Hana Sushi",
      "Oh Maki"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "makis_acevichados",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Hana+Sushi+Cocina+Nikkei+San+Miguel+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Hana+Sushi+Cocina+Nikkei+San+Miguel+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "beligicius_170",
    "name": "Beligicius",
    "category": "Comida árabe",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Surquillo",
    "address": "Sta. Rosa 900, Surquillo 15047",
    "phone": "(01) 7071982",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Shawarma de pollo",
    "popularDishes": [
      "Shawarma de pollo",
      "volcán de shawarmas gratinado"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Beligicius+Surquillo+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Beligicius+Surquillo+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "peshawari_shawarma_171",
    "name": "Peshawari Shawarma",
    "category": "Comida árabe",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "La Victoria",
    "address": "Ca. Rodolfo Beltrán 280, La Victoria",
    "phone": "(01) 3789741",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Shawarmas",
    "popularDishes": [
      "Shawarmas",
      "platos a la carta de cocina turca y pakistaní"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Peshawari+Shawarma+La+Victoria+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Peshawari+Shawarma+La+Victoria+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "pita_172",
    "name": "Pita",
    "category": "Comida árabe",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Santiago de Surco",
    "address": "Refugio (patio de comidas), C.C. Jockey Plaza, Surco",
    "phone": "(01) 5880693",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Shawarma de pollo en pan pita",
    "popularDishes": [
      "Shawarma de pollo en pan pita",
      "lafa",
      "bowl",
      "hummus"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Pita+Santiago+de+Surco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Pita+Santiago+de+Surco+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "el_egipcio_shawarma_173",
    "name": "El Egipcio Shawarma",
    "category": "Comida árabe",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Lince",
    "address": "Jr. Julio César Tello 872, Lince",
    "phone": "(01) 4947037",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Shawarma personalizable",
    "popularDishes": [
      "Shawarma personalizable",
      "bowls"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Egipcio+Shawarma+Lince+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Egipcio+Shawarma+Lince+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "rico_halal_174",
    "name": "Rico Halal",
    "category": "Comida árabe",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "San Isidro",
    "address": "San Isidro (dirección exacta no confirmada)",
    "phone": "(01) 7809426",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Shawarma certificado halal",
    "popularDishes": [
      "Shawarma certificado halal"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Rico+Halal+San+Isidro+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Rico+Halal+San+Isidro+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "el_jade_restaurante_175",
    "name": "El Jade Restaurante",
    "category": "Comida china (no-chifa)",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Miraflores",
    "address": "No identificado (confirmar en Google Maps antes de publicar)",
    "phone": "(01) 9621060",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Fo wo con mariscos",
    "popularDishes": [
      "Fo wo con mariscos",
      "dumplings",
      "carnes en láminas"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos",
      "chifa_chaufa"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Jade+Restaurante+No+identificado+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Jade+Restaurante+No+identificado+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "chifa_hou_wha_176",
    "name": "Chifa Hou Wha",
    "category": "Chifa",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "No identificado (confirmar en Google Maps antes de publicar)",
    "phone": "(01) 4119012",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pato pekín",
    "popularDishes": [
      "Pato pekín",
      "bocaditos al vapor",
      "mariscos frescos"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "chifa_chaufa"
    ],
    "actionUrl": "https://maps.google.com/?q=Chifa+Hou+Wha+No+identificado+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Chifa+Hou+Wha+No+identificado+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "astrid_gast_n_177",
    "name": "Astrid & Gastón",
    "category": "Restaurante de autor",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "San Isidro",
    "address": "Av. Paz Soldán 290, Casa Hacienda Moreyra, San Isidro",
    "phone": "(01) 6602305",
    "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Cuy en salsa de alta cocina",
    "popularDishes": [
      "Cuy en salsa de alta cocina",
      "menú degustación de productos peruanos"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Astrid+&+Gastón+San+Isidro+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Astrid+&+Gastón+San+Isidro+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "la_picanter_a_178",
    "name": "La Picantería",
    "category": "Cevichería / Marino",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Surquillo",
    "address": "Surquillo (dirección exacta no confirmada en esta tanda)",
    "phone": "(01) 1123411",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pescado del día elegido y cocinado al gusto (sudado",
    "popularDishes": [
      "Pescado del día elegido y cocinado al gusto (sudado",
      "frito",
      "cebiche",
      "a la brasa)"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "ceviche",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=La+Picantería+Surquillo+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=La+Picantería+Surquillo+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 11:30 am - 5:00 pm"
  },
  {
    "id": "cala_179",
    "name": "Cala",
    "category": "Restaurante marino",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Barranco",
    "address": "Circuito de Playas, Costa Verde, Barranco",
    "phone": "(01) 8356713",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Platos marinos de autor",
    "popularDishes": [
      "Platos marinos de autor",
      "cócteles creativos"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Cala+Barranco+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Cala+Barranco+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "restaurante_huaca_pucllana_180",
    "name": "Restaurante Huaca Pucllana",
    "category": "Restaurante turístico",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "Miraflores",
    "address": "Calle General Borgoño cdra. 8, Miraflores 15074",
    "phone": "(01) 1937076",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Causa de pejerrey",
    "popularDishes": [
      "Causa de pejerrey",
      "tiradito de atún",
      "medallón de alpaca"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "causa_limena",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Restaurante+Huaca+Pucllana+Miraflores+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Restaurante+Huaca+Pucllana+Miraflores+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "tanta_181",
    "name": "Tanta",
    "category": "Restaurante criollo",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Varias sedes (Grupo Acurio)",
    "address": "Larcomar (Malecón de la Reserva 610) / San Isidro (Pancho Fierro 115) / Miraflores (Av. Vasco Núñez de Balboa 660) / Jesús María, San Miguel, Surco (Jockey Plaza y Chacarilla), Centro Histórico (Pasaje Nicolás de Rivera 142) — 10 locales en Perú",
    "phone": "(01) 2842413",
    "image": "https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ají de gallina",
    "popularDishes": [
      "Ají de gallina",
      "tacu tacu a lo pobre",
      "sopas",
      "sánguches"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "estudio_trabajo",
      "tacu_tacu",
      "aji_gallina",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Tanta+Varias+sedes+(Grupo+Acurio)+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Tanta+Varias+sedes+(Grupo+Acurio)+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 7:30 am - 9:00 pm"
  },
  {
    "id": "el_bodeg_n_182",
    "name": "El Bodegón",
    "category": "Restaurante criollo",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Lima (Grupo Acurio)",
    "address": "1 local en Perú (dirección exacta no confirmada en esta tanda) + presencia confirmada en el nuevo Aeropuerto Jorge Chávez",
    "phone": "(01) 5947713",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ají de gallina",
    "popularDishes": [
      "Ají de gallina",
      "seco con frejoles",
      "anticuchos",
      "suspiro a la limeña"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "seco_res",
      "anticuchos",
      "social_amigos",
      "aji_gallina"
    ],
    "actionUrl": "https://maps.google.com/?q=El+Bodegón+Lima+(Grupo+Acurio)+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=El+Bodegón+Lima+(Grupo+Acurio)+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "barra_chalaca_183",
    "name": "Barra Chalaca",
    "category": "Cevichería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Varias sedes (Grupo Acurio)",
    "address": "11 locales en Lima según entrevista a CEO de Acurio Restaurantes (marzo 2025); direcciones específicas no confirmadas en esta tanda",
    "phone": "(01) 9252589",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ceviche",
    "popularDishes": [
      "Ceviche",
      "producto fresco",
      "porciones generosas"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "ceviche",
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Barra+Chalaca+Varias+sedes+(Grupo+Acurio)+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Barra+Chalaca+Varias+sedes+(Grupo+Acurio)+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 11:30 am - 5:00 pm"
  },
  {
    "id": "al_toke_pez_184",
    "name": "Al Toke Pez",
    "category": "Cevichería / Nikkei callejero",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Surquillo",
    "address": "Av. Angamos Este 886, Surquillo 15047 (con nueva sede adicional en Miraflores desde 2025, dirección exacta de la nueva sede no confirmada)",
    "phone": "(01) 8837710",
    "image": "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Ceviche clásico y mixto",
    "popularDishes": [
      "Ceviche clásico y mixto",
      "chicharrón de pescado",
      "arroz con mariscos",
      "leche de tigre"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "makis_acevichados",
      "leche_tigre",
      "bajon_individual",
      "ceviche",
      "arroz_mariscos",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Al+Toke+Pez+Surquillo+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Al+Toke+Pez+Surquillo+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 11:30 am - 5:00 pm"
  },
  {
    "id": "norky_s_185",
    "name": "Norky's",
    "category": "Pollería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Varias sedes (más de 60 en Lima)",
    "address": "Consultar sede específica; ejemplos confirmados: Av. Abancay 250 (Cercado de Lima), Jr. de la Unión 748 (Cercado), Av. México 1530, Av. Los Próceres 203 (Surco)",
    "phone": "(01) 1858516",
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Pollo a la brasa",
    "popularDishes": [
      "Pollo a la brasa",
      "parrillas"
    ],
    "supportsDelivery": true,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "pollo_brasa"
    ],
    "actionUrl": "https://maps.google.com/?q=Norky's+Varias+sedes+(más+de+60+en+Lima)+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Norky's+Varias+sedes+(más+de+60+en+Lima)+Lima",
    "deliveryUrl": "https://www.pedidosya.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "bembos_186",
    "name": "Bembos",
    "category": "Hamburguesería",
    "rating": 4.6,
    "priceRange": "$",
    "distrito": "Varias sedes (nacional)",
    "address": "Consultar sede específica; presencia confirmada en Miraflores, San Isidro, Ate, San Juan de Lurigancho, Villa El Salvador y centros comerciales (Jockey Plaza, Real Plaza, Mall del Sur)",
    "phone": "(01) 3601403",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Hamburguesa BM",
    "popularDishes": [
      "Hamburguesa BM",
      "hamburguesa con ají",
      "papas con salsas peruanas"
    ],
    "supportsDelivery": true,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos",
      "hamburguesa_camote"
    ],
    "actionUrl": "https://maps.google.com/?q=Bembos+Varias+sedes+(nacional)+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Bembos+Varias+sedes+(nacional)+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "papacho_s_187",
    "name": "Papacho's",
    "category": "Hamburguesería",
    "rating": 4.6,
    "priceRange": "$$",
    "distrito": "Miraflores",
    "address": "Av. La Paz 1045, Miraflores (sede original) / Jockey Plaza, Surco / Real Plaza Salaverry, Jesús María",
    "phone": "(01) 6266937",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Hamburguesas de ternera",
    "popularDishes": [
      "Hamburguesas de ternera",
      "cordero y vegetarianas con quinua",
      "tacos",
      "alitas"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "social_amigos",
      "hamburguesa_camote"
    ],
    "actionUrl": "https://maps.google.com/?q=Papacho's+Miraflores+/+Surco+/+Jesús+María+(Grupo+Acurio)+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Papacho's+Miraflores+/+Surco+/+Jesús+María+(Grupo+Acurio)+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  },
  {
    "id": "cosme_188",
    "name": "Cosme",
    "category": "Restaurante de autor",
    "rating": 4.6,
    "priceRange": "$$$",
    "distrito": "San Isidro",
    "address": "Av. Tudela y Varela 162, San Isidro 15073",
    "phone": "(01) 1863409",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "signatureDish": "Berenjena a la parrilla con stracciatella",
    "popularDishes": [
      "Berenjena a la parrilla con stracciatella",
      "pasta con erizo",
      "sopa criolla",
      "pudín"
    ],
    "supportsDelivery": false,
    "supportsPresencial": true,
    "tags": [
      "bajon_individual",
      "social_amigos"
    ],
    "actionUrl": "https://maps.google.com/?q=Cosme+San+Isidro+Lima",
    "googleMapsUrl": "https://maps.google.com/?q=Cosme+San+Isidro+Lima",
    "deliveryUrl": "https://www.rappi.com.pe",
    "schedule": "Lun - Dom: 12:00 pm - 10:30 pm"
  }
];

// Qué etiquetas del catálogo cuentan como "encaja con este plan".
//
// Normalmente el propio id del plan es la etiqueta. La excepción es 'familia':
// se agregó al formulario después de armar el catálogo, así que ningún
// restaurante la lleva. Sin esta equivalencia, elegir "comida en familia" no
// sumaría nunca los +2 y daría resultados peores en silencio. Se asimila a
// 'social_amigos', que es la etiqueta de sitios para ir en grupo.
const EQUIVALENCIAS_MOTIVO: Partial<Record<SearchMotive, string[]>> = {
  familia: ['familia', 'social_amigos'],
};

export function generateFallbackRecommendation(
  dishes: string[],
  context: ContextData,
  location: LocationData
): RecommendationResult[] {
  const motivosEquivalentes =
    EQUIVALENCIAS_MOTIVO[context.searchMotive] ?? [context.searchMotive];

  // Filter restaurants matching selected dishes or general mood
  let pool = [...RESTAURANTS_DATABASE];

  if (context.diningMode === 'delivery') {
    pool = pool.filter(r => r.supportsDelivery);
  } else {
    pool = pool.filter(r => r.supportsPresencial);
  }

  // If user has a selected district, prioritize nearby
  if (location.distrito) {
    const districtMatches = pool.filter(r => r.distrito.toLowerCase().includes(location.distrito.toLowerCase()));
    if (districtMatches.length >= 3) {
      pool = districtMatches;
    }
  }

  // Shuffle & score
  const scored = pool.map(r => {
    let score = r.rating;
    if (dishes.some(d => r.tags.includes(d) || r.popularDishes.some(pd => pd.toLowerCase().includes(d.toLowerCase())))) {
      score += 4;
    }
    if (r.tags.some(t => motivosEquivalentes.includes(t))) {
      score += 2;
    }
    if (context.priceRange && r.priceRange === context.priceRange) {
      score += 1.5;
    }
    // Small random jitter so results vary slightly per search
    score += Math.random() * 0.5;
    return { restaurant: r, score };
  }).sort((a, b) => b.score - a.score);

  const topResults = scored.slice(0, 3);

  return topResults.map((item, index) => {
    const isPrincipal = index === 0;
    const distanceMeters = Math.floor(400 + Math.random() * 1200);
    const walkMins = Math.ceil(distanceMeters / 80);
    const driveMins = Math.ceil(distanceMeters / 300);

    const distanceText = context.diningMode === 'delivery'
      ? `Delivery estimado 20-30 min (${(distanceMeters / 1000).toFixed(1)} km)`
      : `A ${walkMins} min a pie (${distanceMeters}m) · ${driveMins} min en auto`;

    return {
      priority: isPrincipal ? 'principal' : 'secundaria',
      restaurant_name: item.restaurant.name,
      dish_highlight: item.restaurant.signatureDish,
      category: item.restaurant.category,
      image: item.restaurant.image,
      address: item.restaurant.address,
      distrito: item.restaurant.distrito,
      phone: item.restaurant.phone,
      context_validators: {
        rating: item.restaurant.rating,
        distance_text: distanceText,
        price_range: item.restaurant.priceRange,
        walking_time: `${walkMins} min`,
        driving_time: `${driveMins} min`
      },
      action_url: item.restaurant.actionUrl,
      google_maps_url: item.restaurant.googleMapsUrl,
      delivery_url: item.restaurant.deliveryUrl,
      popular_dishes: item.restaurant.popularDishes,
      schedule: item.restaurant.schedule
    };
  });
}

export function generateJustificationPhrase(motive: string, hunger: string, mode: string, selectedDishesCount: number): string {
  const phrases = [
    "¡Perfecto para calmar el antojo! Encontramos la combinación justa que matará el hambre sin perder tiempo pensando.",
    "¡Saborazo directo al plato! Selección especial filtrada por ubicación y apetito del momento.",
    "¡A elegir rápido y disfrutar! La opción ideal para compartir o darte un gusto sin fatiga de decisión.",
    "¡Servido en bandeja! Elegimos el huarique con mejor puntaje y la distancia más corta para ti."
  ];

  if (hunger === 'alto') {
    return "¡Para un hambre voraz de aquellos! Esta opción tiene porciones generosas, rápida atención y está a un paso de ti.";
  }
  if (motive === 'social_amigos') {
    return "¡Aprobado para el grupo! Nadie va a discutir a dónde ir: platazos para compartir, buena vibra y cerca a todos.";
  }
  if (motive === 'pareja') {
    return "¡Ideal para salir en pareja! Buena atmósfera, comida insuperable y sin el clásico 'no sé, ¿tú qué quieres comer?'.";
  }
  if (mode === 'delivery') {
    return "¡Llega rapidito a tu puerta! Pide algo diferente a lo de siempre sin moverte del sillón.";
  }

  return phrases[Math.floor(Math.random() * phrases.length)];
}
