# Validación — 03/10/2026

## Compilación
`npm run build` → código 0. TypeScript (`tsc -b`) y Vite pasan.
Bundle final: JS 312.90 kB / 108.49 kB gzip; CSS 29.32 kB / 7.53 kB gzip.
`git diff --check` → sin errores de espacios o conflictos.
No se añadieron dependencias a package.json ni se alteró package-lock.json.

## Recursos
Verificación física con `magick identify`: diez originales de 1920 × 1080 a
5923 × 3949; veinte WebP responsivos, sin ampliación. Todas las imágenes usadas
se cargan en Chromium. Las fuentes originales están en media.md y sources.json.

## Navegador e interacción
Verificado con Playwright en Chromium instalado en la máquina:

- 8 h2 exactos, desde `Acto 0 - 2020` hasta `Acto 7 - 2026`.
- Índice: selección del acto, cierre, foco en la sección y actualización del acto
  activo; enlaces a Equal aportados por el usuario presentes.
- Fuentes desplegables y refresco de posiciones de ScrollTrigger.
- Escucha: ningún iframe antes de la interacción; carga del disco oficial 2026;
  selección de 2021 cambia el álbum; Escape/cierre elimina el reproductor y
  devuelve foco al botón. Sin autoplay.
- Reproducción real del iframe comprobada: audio en ejecución a los 4.12 s
  (`paused: false`, `readyState: 4`); pausa a los 4.20 s (`paused: true`).
- Cambio dinámico de prefers-reduced-motion: destruye Lenis, revierte todos los
  paralajes y conserva el texto visible. Desplazamiento nativo en móvil táctil.
- Viewports 360, 390, 768 y 1440 px: sin overflow horizontal, imágenes completas,
  contenido visible. Navegación táctil hasta el epílogo comprobada.
- Fallo de solicitudes de imágenes: respaldo visible y ocho actos legibles.
- Cero errores de JavaScript y cero errores de consola de la aplicación.

Axe-core con etiquetas WCAG 2 A/AA y 2.1 AA: **0 infracciones detectadas**.
Es un control automatizado, no una certificación exhaustiva de accesibilidad.
El widget oficial de Bandcamp pertenece al proveedor y se carga únicamente al
abrir la escucha; su navegación y apariencia son las del reproductor original.

Las herramientas de navegador se instalaron en /tmp, fuera del proyecto.
El registro resumido está en [browser-results.json](evidence/browser-results.json).

## Revisión visual
Inspección de la portada en móvil/escritorio, díptico 2024, acto de sesiones y
panel de escucha. Se corrigieron la prioridad de posición de la foto del Hero,
los créditos solapados del díptico y un aviso de atributo React 18.

- [Escritorio, 1440 × 900](evidence/desktop.png)
- [Móvil, 390 × 844](evidence/mobile.png)
- [Escucha oficial](evidence/listening.png)

## Límites de la comprobación
La revisión se ejecutó en Chromium, no en dispositivos físicos ni en Safari o
Firefox. La lectura funciona con los medios locales; reproducción y fuentes
web requieren conectividad a sus proveedores. No se hizo despliegue.
