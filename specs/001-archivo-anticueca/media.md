# Recursos y procedencia

Verificación física de dimensiones con ImageMagick, no con los tamaños anunciados
en HTML. Todas las fuentes integradas tienen al menos 1920 × 1080 píxeles.
El inventario legible por máquina es `public/media/sources.json`; las URLs,
créditos, texto alternativo y puntos de encuadre están en `src/data/media.ts`.

| Recurso | Dimensiones del original | Procedencia |
| --- | --- | --- |
| Rodrigo en concierto | 4750 × 3167 | [Wavromance](https://wavromance.substack.com/p/todo-esta-conectado-phuyu-y-la-fantasma) |
| Cuarteto en Rockódromo 2024 | 5923 × 3949 | [Wavromance](https://wavromance.substack.com/p/todo-esta-conectado-phuyu-y-la-fantasma) |
| El Patio de los Calla’os | 2000 × 2000 | [Registro Móvil](https://registromovil.bandcamp.com/album/el-patio-de-los-callaos-remasterizado) |
| Anticuecas originales | 3000 × 3000 | [Registro Móvil](https://registromovil.bandcamp.com/album/anticuecas-subterr-neas) |
| Tetralogía | 3000 × 3000 | [Registro Móvil](https://registromovil.bandcamp.com/album/a-tetralog-a-de-bichos-y-setas) |
| Décimas | 3000 × 3000 | [Registro Móvil](https://registromovil.bandcamp.com/album/b-d-cimas-de-phuyu-y-la-fantasma) |
| Cantata (recurso disponible) | 3000 × 3000 | [Registro Móvil](https://registromovil.bandcamp.com/album/cantata-del-desierto-verde-ep) |
| Reconstruidas | 3000 × 3000 | [Registro Móvil](https://registromovil.bandcamp.com/album/anticuecas-subterr-neas-reconstruidas) |
| Basural, fotograma 00:30 | 1920 × 1080 | [Equal Music / video original](https://www.youtube.com/watch?v=IYuS6CxEHEY&t=30s) |
| No Quiero Darte Esto, fotograma 00:30 | 1920 × 1080 | [Equal Music / video original](https://www.youtube.com/watch?v=nBCHfG0PIAE&t=30s) |

## Preparación
Se guardaron derivados locales WebP a 2400 y 960 px de ancho (2000 px máximos
para Patio), y a 1920 y 960 px para Equal. Sin ampliación artificial. Las imágenes
de Equal se extrajeron de un segundo del video 1080p mediante yt-dlp y FFmpeg:
sus miniaturas reales son 1280 × 720, aunque ciertos metadatos anuncian 1920.
No se incluyen videos ni archivos de audio completos en el repositorio.

Los tratamientos artísticos son CSS: máscaras radiales sobre la superficie
completa, mezcla de luminosidad para fotos, desaturación moderada, tinte de
óxido/musgo y movimiento de transformación con ScrollTrigger. Los originales
permanecen enlazados. No se acredita a Wavromance como fotógrafo: la publicación
no identifica al autor de las dos fotografías.

## Criterio histórico
Las fotos de 2024/archivo posterior no se hacen pasar por documentos de 2020.
La reconstitución se narra con su nombre comercial oficial, **Reconstruidas**.
Equal (26/04/2026) y Cantata (15/02/2026) son continuidad del acto 2025, con fechas
explícitas. La formación de 2023 es un hito editorial: no se inventa una fecha
única de ingreso de los músicos. El manifiesto se identifica como lectura del
archivo, sin atribuir sus palabras a la banda.
