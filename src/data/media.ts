import type { ArchiveImage, ArchiveLink } from '../types/scrollytelling';

export const INTERVIEW: ArchiveLink = {
  label: 'Wavromance · entrevista a Rodrigo Romero, 22.03.2026',
  url: 'https://wavromance.substack.com/p/todo-esta-conectado-phuyu-y-la-fantasma',
};
export const ALBUMS = {
  patio: 'https://registromovil.bandcamp.com/album/el-patio-de-los-callaos-remasterizado',
  original: 'https://registromovil.bandcamp.com/album/anticuecas-subterr-neas',
  a: 'https://registromovil.bandcamp.com/album/a-tetralog-a-de-bichos-y-setas',
  b: 'https://registromovil.bandcamp.com/album/b-d-cimas-de-phuyu-y-la-fantasma',
  cantata: 'https://registromovil.bandcamp.com/album/cantata-del-desierto-verde-ep',
  rebuilt: 'https://registromovil.bandcamp.com/album/anticuecas-subterr-neas-reconstruidas',
};

function artwork(id: keyof typeof ALBUMS, artId: string, title: string, width = 3000): ArchiveImage {
  return {
    src: `${import.meta.env.BASE_URL}media/${id}-2400.webp`,
    srcSet: `${import.meta.env.BASE_URL}media/${id}-960.webp 960w, ${import.meta.env.BASE_URL}media/${id}-2400.webp ${Math.min(width, 2400)}w`,
    originalUrl: `https://f4.bcbits.com/img/a${artId}_0.jpg`,
    source: { label: 'Registro Móvil / Bandcamp', url: ALBUMS[id] },
    width, height: width,
    alt: `Portada oficial de ${title}, de Phuyu y la Fantasma`,
    caption: `${title} / arte de la edición publicada por Registro Móvil.`,
    blendMode: 'normal',
  };
}

export const MEDIA = {
  basural: {
    src: `${import.meta.env.BASE_URL}media/basural-1920.webp`,
    srcSet: `${import.meta.env.BASE_URL}media/basural-960.webp 960w, ${import.meta.env.BASE_URL}media/basural-1920.webp 1920w`,
    originalUrl: 'https://www.youtube.com/watch?v=IYuS6CxEHEY&t=30s',
    source: { label: 'Equal Music Sessions / Basural', url: 'https://www.youtube.com/watch?v=IYuS6CxEHEY' },
    width: 1920, height: 1080,
    alt: 'Fotograma de la interpretación de Basural por Phuyu y la Fantasma en Equal Music Sessions',
    caption: 'Basural / fotograma del video oficial (00:30). Equal Music y ÑIM. Sala Lázaro Cárdenas / 26.04.2026. Dirección: Ulises Sanher.',
    blendMode: 'luminosity',
  } satisfies ArchiveImage,
  noQuiero: {
    src: `${import.meta.env.BASE_URL}media/no-quiero-1920.webp`,
    srcSet: `${import.meta.env.BASE_URL}media/no-quiero-960.webp 960w, ${import.meta.env.BASE_URL}media/no-quiero-1920.webp 1920w`,
    originalUrl: 'https://www.youtube.com/watch?v=nBCHfG0PIAE&t=30s',
    source: { label: 'Equal Music Sessions / No Quiero Darte Esto', url: 'https://www.youtube.com/watch?v=nBCHfG0PIAE' },
    width: 1920, height: 1080,
    alt: 'Mano y guitarra eléctrica en un fotograma de No Quiero Darte Esto por Phuyu y la Fantasma',
    caption: 'No Quiero Darte Esto / fotograma del video oficial (00:30). Equal Music y ÑIM / 26.04.2026. Dirección: Ulises Sanher.',
    blendMode: 'luminosity',
  } satisfies ArchiveImage,
  live: {
    src: `${import.meta.env.BASE_URL}media/live-2400.webp`,
    srcSet: `${import.meta.env.BASE_URL}media/live-960.webp 960w, ${import.meta.env.BASE_URL}media/live-2400.webp 2400w`,
    originalUrl: 'https://substack-post-media.s3.amazonaws.com/public/images/59f4bc35-1d00-4831-999a-5d65d90f5a17_4750x3167.jpeg',
    source: INTERVIEW, width: 4750, height: 3167,
    alt: 'Rodrigo Romero canta al micrófono y toca guitarra eléctrica en un concierto de Phuyu y la Fantasma',
    caption: 'Rodrigo Romero en vivo / fotografía publicada por Wavromance, 2026. Autor y fecha de toma no indicados.',
    position: '50% 42%', blendMode: 'luminosity',
  } satisfies ArchiveImage,
  band: {
    src: `${import.meta.env.BASE_URL}media/band-2400.webp`,
    srcSet: `${import.meta.env.BASE_URL}media/band-960.webp 960w, ${import.meta.env.BASE_URL}media/band-2400.webp 2400w`,
    originalUrl: 'https://substack-post-media.s3.amazonaws.com/public/images/f31380fa-ce84-47ec-a4b5-4ae4e72a53c8_5923x3949.jpeg',
    source: INTERVIEW, width: 5923, height: 3949,
    alt: 'Catalina Parra, Rodrigo Romero, Óscar Hernández e Ignacio Romero juntos en el escenario de Rockódromo 2024',
    caption: 'El cuarteto en Rockódromo, 2024 / archivo publicado por Wavromance. Autor de la fotografía no indicado.',
    position: '50% 65%', blendMode: 'luminosity',
  } satisfies ArchiveImage,
  patio: artwork('patio', '4124594411', 'El Patio de los Calla’os', 2000),
  original: artwork('original', '0203426669', 'Anticuecas Subterráneas'),
  a: artwork('a', '0424227316', 'A| Tetralogía de Bichos y Setas'),
  b: artwork('b', '0409686699', 'B| Décimas de Phuyu y la fantasma'),
  cantata: artwork('cantata', '2859856508', 'Cantata del Desierto Verde'),
  rebuilt: artwork('rebuilt', '1243948115', 'Anticuecas Subterráneas (Reconstruidas)'),
};

export const OFFICIAL_LINKS: ArchiveLink[] = [
  { label: 'Spotify', url: 'https://open.spotify.com/artist/5CfGxPnJI6v2I76sJO1WqB' },
  { label: 'Bandcamp / discografía', url: 'https://registromovil.bandcamp.com/music' },
  { label: 'YouTube', url: 'https://www.youtube.com/@phuyuylafantasma8429' },
  { label: 'Instagram', url: 'https://www.instagram.com/phuyu_fantasma/' },
  { label: 'Registro Móvil', url: 'https://registromovil.cl' },
];
