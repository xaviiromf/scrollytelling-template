# Archivo anticueca — especificación

## Alcance autorizado
Elevar el proyecto existente, 100 % cliente, conservando Vite, React, TypeScript,
GSAP, Lenis y Tailwind. El usuario autoriza implementación completa tras este
resumen; no solicita publicación ni cambios en GitHub.

## Dirección de arte
Un archivo musical de Ñuble: negro de tierra húmeda, hueso/papel, óxido #9c442b,
musgo #324035. Serif editorial de gran escala, monoespaciada de imprenta para
fechas y créditos. Grabados de micelio y vetas en SVG, grano discreto y niebla.
Fotografía real con bordes radiales disueltos, mezcla de luminosidad y tinte
terroso. Sin tarjetas, esquinas redondeadas ni fotografías de stock.

## Requisitos
- RF01: ocho actos con h2 exactamente `Acto X - 202X`; conceptos en subtítulos.
- RF02: cronología completa, fuentes por acto, enlaces oficiales, sin citas
  inventadas. El epílogo es Acto 7 - 2026 y contiene formación y manifiesto.
- RF03: imágenes originales verificadas, créditos y URL de procedencia;
  derivados locales responsivos para evitar hotlinking en la experiencia.
- RF04: desplazamiento continuo, paralaje con transformaciones, sin scroll
  secuestrado ni secciones fijadas en móvil. Respeto dinámico de reduced-motion.
- RF05: índice por teclado, estado del acto, progreso de lectura, anclas nativas,
  foco visible, tamaños táctiles y ausencia de desbordamiento horizontal.
- RF06: escucha real mediante reproductor oficial cargado por decisión del
  visitante, sin autoplay ni botón que simule audio inexistente.
- RF07: compilación TypeScript y Vite, verificación en escritorio y móvil,
  comportamiento con movimiento reducido, errores de red y ciclo de limpieza.

## Selección documental y recursos
- Wavromance, entrevista 22/03/2026: fotografías originales de concierto
  (4750 × 3167) y cuarteto (5923 × 3949). No presentarlas como fotos de 2020.
- Registro Móvil/Bandcamp: portadas originales de El Patio, Anticuecas,
  Tetralogía, Décimas, Cantata y Reconstruidas. Confirmar dimensiones reales.
- Rockaxis: reseña del 02/10/2026 para contexto del disco eléctrico; su imagen
  se admite solo si cumple resolución, sin inventar una URL mayor.
- La Vitrola: registro de Chiguayante en septiembre de 2025, publicado en 2026.
- Equal Music Sessions: videos oficiales aportados por el usuario; grabación
  26/04/2026 en Sala Lázaro Cárdenas. Fotogramas de sus videos 1080p en 00:30.
  Las miniaturas HTTP son 1280 × 720 y fueron descartadas, sin reescalarlas.

## Precisiones históricas
El sello acredita `Anticuecas Subterráneas (Reconstruidas)` (01/10/2026);
«reconstituidas» describe el concepto solicitado, no reemplaza su título oficial.
Cantata salió el 15/02/2026: se explica como continuación del acto 2025.
La canción de La Vitrola se titula `Balance de muerte e indiferencia`.
Equal Music Sessions / Basural / No Quiero Darte Esto están corroboradas:
el usuario aportó los enlaces y los metadatos oficiales fechan la grabación
el 26/04/2026. Se integran como continuación de los registros de 2025.

## Aceptación
Ocho encabezados exactos y únicos; fuentes accesibles; imágenes reales sin
rectángulos crudos; audio funcional; lectura completa en 360 px y escritorio;
modo reducido sin paralaje; `npm run build` sin errores. Evidencias en validation.md.
