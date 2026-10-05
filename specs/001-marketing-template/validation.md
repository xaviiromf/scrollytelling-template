# Validación — 04/10/2026

- `npm run build`: código 0. TypeScript y Vite compilan correctamente.
- `git diff --check`: código 0.
- Chromium / Playwright, viewports 360, 390, 768 y 1440 px: sin overflow horizontal.
- Un h1 y tres h2; contenido de ejemplo, sin texto o medios de la banda.
- Todos los enlaces internos resuelven a secciones existentes.
- CTA principal desplaza al contacto; CTA de contacto tiene el mailto configurable.
- Menú móvil abre/cierra, selecciona contacto y dirige el foco a la sección.
- Escape cierra el menú y devuelve el foco al botón.
- Móvil táctil usa scroll nativo; escritorio usa Lenis.
- Cambiar a movimiento reducido destruye Lenis, revierte paralaje y deja todos
  los textos visibles.
- Cero errores de consola y JavaScript.
- Axe-core (WCAG 2 A/AA y 2.1 AA): cero infracciones detectadas en la revisión
  automatizada. No equivale a certificación completa.
- No hay dependencias nuevas; package-lock solo cambia el nombre del proyecto.
- phuyu conserva los 49 archivos de fuente/recursos/documentación verificados
  del trabajo anterior en su commit 42e5b39.

Revisión ejecutada sobre el build de producción servido con `npm run preview`
en el puerto 4173. Las herramientas de navegador están fuera del repositorio,
en /tmp. Safari/Firefox y dispositivos físicos no se probaron.

La rama activa al terminar es main. Los commits se guardan localmente;
no se ha realizado publicación en GitHub ni despliegue del sitio.
