# Plan de implementación

1. Tipar actos, medios, referencias y enlaces; registrar procedencia y tamaños.
2. Descargar originales verificados, generar WebP a 2400/960 px y documentar
   URLs originales. Conservar texto de respaldo si falla un recurso.
3. Hero editorial con fotografía fundida, grabado SVG y entrada por ancla.
4. ActSection con composiciones variables, créditos, discografía y fuentes.
   Manifesto integra el octavo acto, formación en filas y plataformas oficiales.
5. Índice plegable y navegación de actos con progreso en GSAP, sin actualizar
   React en cada frame. Escucha original/reconstruida en iframe oficial.
6. Lenis solo con ratón y movimiento permitido; GSAP matchMedia por viewport y
   reduced-motion. Limpieza en StrictMode; refresco tras fuentes e imágenes.
7. Tokens/CSS fluidos, SVG de micelio, textura, selección, foco y móvil.
8. Compilar y revisar Chromium en varias resoluciones; verificar navegación,
   imágenes, escucha, reduced-motion y errores. Guardar resultados honestos.

No nuevas dependencias de aplicación. No backend. No despliegue.
