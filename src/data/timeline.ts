import type { ActItem } from '../types/scrollytelling';
import { ALBUMS, INTERVIEW, MEDIA } from './media';

const ROCKAXIS = {
  label: 'Rockaxis · reseña, 02.10.2026',
  url: 'https://www.rockaxis.com/rock/disco/52153/anticuecas-subterraneas-reconstruidas--phuyu-y-la-fantasma/',
};
export const VITROLA = {
  label: 'La Vitrola · Nunca será / Chiguayante',
  url: 'https://www.youtube.com/watch?v=KA8joI1tEMg',
};

export const LIVE_SESSIONS = [
  { label: 'Basural', url: 'https://www.youtube.com/watch?v=IYuS6CxEHEY' },
  { label: 'No Quiero Darte Esto', url: 'https://www.youtube.com/watch?v=nBCHfG0PIAE' },
];

export const TIMELINE_ACTS: ActItem[] = [
  {
    id: 'acto-0', actNumber: 0, year: '2020', label: 'El origen', motif: 'mist',
    tagline: 'Una habitación. Una nube. Todo por desenterrar.',
    narrative: [
      'Phuyu: nube, niebla, en quechua. En Chillán, durante el confinamiento de 2020, Rodrigo Romero comienza un proyecto solitario. La habitación es refugio, estudio y lugar de búsqueda: volver al folclor para reconocer una identidad que se estaba moviendo bajo sus pies.',
      'La obra de Violeta Parra abre un camino. En sus anticuecas, la guitarra permite torcer las expectativas del baile y escuchar la tradición como una fuerza experimental. De esa inquietud nace Phuyu y la Fantasma.',
    ],
    contextNotes: 'La imagen pertenece al archivo posterior del cuarteto (2024); acompaña el relato de origen y no documenta el confinamiento.',
    image: MEDIA.band,
    sources: [INTERVIEW, { label: 'Glosario quechua · nube / niebla', url: 'https://www.curriculumnacional.cl/614/articles-134497_recurso_pdf.pdf' }],
    accentColor: '#324035',
  },
  {
    id: 'acto-1', actNumber: 1, year: '2020', label: 'La habitación', motif: 'room',
    tagline: 'El Patio de los Calla’os',
    narrative: [
      'El primer disco se publica el 9 de octubre de 2020. El Patio de los Calla’os lleva el encierro a una grabación doméstica: guitarra, charango, voz y experimentación conviven sin pedir permiso a una sola escuela musical.',
      'El folclor aparece como una memoria que se puede intervenir. La búsqueda que inaugura este dormitorio encontrará en la anticueca de Violeta una manera de romper la métrica predecible y de hacer sitio a la inquietud, el duelo y la disonancia.',
    ],
    albumOrWork: { title: 'El Patio de los Calla’os', releaseDate: '09.10.2020', format: 'Grabación doméstica / edición remasterizada en Registro Móvil', url: ALBUMS.patio },
    image: MEDIA.patio,
    sources: [{ label: 'Registro Móvil · edición y fecha original', url: ALBUMS.patio }, INTERVIEW],
    accentColor: '#9c442b',
  },
  {
    id: 'acto-2', actNumber: 2, year: '2021', label: 'La raíz acústica', motif: 'roots',
    tagline: 'Anticuecas Subterráneas',
    narrative: [
      'El 27 de mayo de 2021 aparece Anticuecas Subterráneas. Rodrigo registra el álbum en solitario: una raíz acústica, áspera e íntima que hace de la repetición y la tensión un lenguaje propio.',
      'Registro Móvil publica la obra en digital y también en cassette y CD. Las canciones nacen en una habitación, pero ya contienen una posibilidad colectiva: llevar esa guitarra de anticueca a la batería, el bajo y la electricidad de una banda.',
    ],
    albumOrWork: { title: 'Anticuecas Subterráneas', releaseDate: '27.05.2021', format: 'Original acústico / digital, cassette y CD · Registro Móvil', url: ALBUMS.original },
    image: MEDIA.original,
    sources: [{ label: 'Registro Móvil · Anticuecas originales', url: ALBUMS.original }, INTERVIEW],
    accentColor: '#324035',
  },
  {
    id: 'acto-3', actNumber: 3, year: '2023', label: 'El cuerpo eléctrico', motif: 'electric',
    tagline: 'El zapateo encuentra la distorsión.',
    narrative: [
      'El proyecto se abre al formato colectivo. Junto a Rodrigo, Catalina Parra aporta piano y voces; Ignacio Romero, bajo; Óscar Hernández, batería. El cuarteto ensancha el pulso de las canciones con noise rock y post-hardcore.',
      'La imagen que guía este tramo es física: el zapateo campesino junto al pogo, el peso del pie de cueca frente al golpe eléctrico. No hace falta abandonar la raíz para tensarla. El escenario se convierte en el lugar donde esas fuerzas se encuentran.',
    ],
    contextNotes: '2023 sitúa la mutación eléctrica en la estructura editorial del encargo. Las fuentes consultadas acreditan la formación, pero no una fecha única de ingreso de cada integrante. Zapateo y mosh funcionan aquí como lectura escénica, no como cita atribuida.',
    image: MEDIA.live,
    sources: [INTERVIEW, { label: 'Las Dunas Records · del solista al cuarteto', url: 'https://lasdunasrecords.com/blogs/media/phuyu-y-la-fantasma-a-tetralogia-de-bichos-y-setas' }],
    accentColor: '#9c442b',
  },
  {
    id: 'acto-4', actNumber: 4, year: '2024', label: 'El micelio', motif: 'mycelium',
    tagline: 'La Antropofagia Nos Une',
    narrative: [
      'Dos cuerpos para una misma obra: A| Tetralogía de Bichos y Setas y B| Décimas de Phuyu y la fantasma. El díptico de 2024 reúne la descarga de la banda y una narración extensa que se abre al post-rock y a la contemplación.',
      'Insectos, hongos y relaciones simbióticas atraviesan una crítica a la privatización y a las estructuras de poder. El micelio es una imagen de conexión; la descomposición, una pregunta por lo que puede volver a crecer. La tradición devora influencias y devuelve un lenguaje propio.',
    ],
    albumOrWork: { title: 'A| Tetralogía de Bichos y Setas', releaseDate: '18.09.2024', format: 'Díptico con B| Décimas · Registro Móvil', url: ALBUMS.a },
    image: MEDIA.a, companionImage: MEDIA.b,
    sources: [{ label: 'Registro Móvil · lado A', url: ALBUMS.a }, { label: 'Registro Móvil · lado B, 22.11.2024', url: ALBUMS.b }, { label: 'Lúcuma · el díptico y la antropofagia', url: 'https://lucumalucuma.com/resenas-cpt/phuyu-y-la-fantasma-a-tetralogia-de-bichos-y-setas/' }],
    accentColor: '#324035',
  },
  {
    id: 'acto-5', actNumber: 5, year: '2025', label: 'El registro vivo', motif: 'live',
    tagline: 'Una toma. La madera. La respiración.',
    narrative: [
      'En septiembre de 2025, La Vitrola registra a Phuyu y la Fantasma en Chiguayante. Las sesiones, publicadas en 2026, acercan la voz, las cuerdas y el espacio. Entre los temas del registro está Balance de muerte e indiferencia: otra forma de escuchar el cuerpo de la banda.',
      'El archivo crece con Equal Music Sessions: Basural y No Quiero Darte Esto, grabadas el 26 de abril de 2026 en la Sala Lázaro Cárdenas de Chillán durante ÑIM. Voz, piano, bajo, batería, charango y quena ocupan un mismo espacio de escucha.',
      'Entre ambos registros llega Cantata del Desierto Verde, publicada el 15 de febrero de 2026. El EP enfrenta la devastación del negocio forestal desde la memoria y el folclor; amplía el archivo con charango, quena, guitarrón y percusiones.',
    ],
    contextNotes: 'El capítulo parte en 2025 y continúa en 2026. La canción de La Vitrola figura como «Balance de muerte e indiferencia», no «Aequilibrium». Equal Music fecha su grabación en Sala Lázaro Cárdenas el 26.04.2026; los enlaces fueron aportados por el usuario y comprobados en los metadatos oficiales.',
    albumOrWork: { title: 'Cantata del Desierto Verde (EP)', releaseDate: '15.02.2026', format: 'Continuación de este capítulo / Registro Móvil', url: ALBUMS.cantata },
    image: MEDIA.basural, companionImage: MEDIA.noQuiero,
    sources: [VITROLA, ...LIVE_SESSIONS, { label: 'Registro Móvil · Cantata, fecha y créditos', url: ALBUMS.cantata }],
    accentColor: '#9c442b',
  },
  {
    id: 'acto-6', actNumber: 6, year: '2026', label: 'La reconstrucción', motif: 'reconstituted',
    tagline: 'La raíz vuelve con todo el cuerpo.',
    narrative: [
      '1 de octubre de 2026. Anticuecas Subterráneas regresa reconstruido por la banda completa. La obra que Rodrigo había grabado a solas en 2021 recoge ahora cinco años de crecimiento compartido y la energía de su sonido en vivo.',
      'Bajo y batería sostienen un muro eléctrico. Las voces, el piano y las percusiones nativas de José Rocandio —pandero, kaskawilla y chajcha— abren nuevas texturas. La intimidad germinal se reconstituye como un cuerpo colectivo.',
    ],
    contextNotes: 'El título oficial del sello es «Anticuecas Subterráneas (Reconstruidas)». «Reconstituidas» se conserva como concepto narrativo del encargo. Los créditos del álbum asignan el piano a Rodrigo Romero y la voz a Catalina Parra.',
    quote: { text: 'Aquí está la mejor versión de estas canciones', author: 'Rodrigo Romero · notas del disco, 2026', source: { label: 'Leer las notas originales', url: ALBUMS.rebuilt } },
    albumOrWork: { title: 'Anticuecas Subterráneas (Reconstruidas)', releaseDate: '01.10.2026', format: 'Banda completa / regmvl250 · Registro Móvil', url: ALBUMS.rebuilt },
    image: MEDIA.rebuilt,
    sources: [{ label: 'Registro Móvil · lanzamiento y créditos', url: ALBUMS.rebuilt }, ROCKAXIS],
    accentColor: '#9c442b',
  },
  {
    id: 'acto-7', actNumber: 7, year: '2026', label: 'El epílogo', motif: 'epilogue',
    tagline: 'El archivo sigue vivo.',
    narrative: [
      'De una habitación en Chillán a una obra compartida. La historia de Phuyu y la Fantasma se escucha en esa transformación: una tradición que cambia de manos, se contamina de ruido y encuentra otras formas de reunirse.',
      'Esta es nuestra lectura editorial del recorrido: mantener la raíz en movimiento. Escuchar la tierra, incomodar el compás y hacer del encuentro una fuerza. La última palabra le pertenece a la música.',
    ],
    image: MEDIA.band,
    sources: [INTERVIEW, { label: 'Registro Móvil · créditos de Reconstruidas', url: ALBUMS.rebuilt }],
    accentColor: '#324035',
  },
];
