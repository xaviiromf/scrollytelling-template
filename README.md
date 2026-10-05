# Phuyu y la Fantasma — Archivo de tierra y ruido

Experiencia editorial de scrollytelling dedicada a la banda de Chillán. Ocho actos,
desde la habitación de 2020 hasta *Anticuecas Subterráneas (Reconstruidas)* en 2026.

Vite + React 18 + TypeScript + GSAP/ScrollTrigger + Lenis + Tailwind. Arquitectura
estática, sin backend ni nuevas dependencias de aplicación.

## Desarrollo

```bash
npm ci
npm run dev
```

El servidor de desarrollo usa el puerto 3000. Para producción:

```bash
npm run build
npm run preview
```

`build` ejecuta TypeScript y crea el sitio estático en `dist/`. Para servir desde
un subdirectorio, configurar la base de Vite; por ejemplo, GitHub Pages:

```bash
npm run build -- --base=/scrollytelling-template/
```

## Experiencia

- Tipografía editorial, negro húmedo, papel, óxido y musgo; micelio y vetas en SVG.
- Fotografías y portadas reales con máscaras radiales, duotono y paralaje.
- Índice por teclado, anclas, foco visible, progreso y estado del acto actual.
- Scroll nativo táctil; Lenis en escritorio. Respeta cambios de movimiento reducido.
- Escucha oficial de las versiones 2021/2026 de Anticuecas, bajo interacción del
  visitante. Cerrar elimina el reproductor. Hay un enlace de respaldo a Bandcamp.
- Fuentes, notas históricas y créditos accesibles dentro de cada acto.

## Contenido y recursos

`src/data/timeline.ts` contiene ocho actos. Los h2 usan exactamente
`Acto X - 202X`; las frases conceptuales son subtítulos.

`src/data/media.ts` centraliza imágenes, originales y plataformas oficiales.
`public/media/` contiene WebP locales con variantes responsivas: el sitio no
necesita descargar las fotos de las páginas de prensa durante la lectura.
[Inventario de fuentes y dimensiones](specs/001-archivo-anticueca/media.md).

Las fuentes oficiales fechan *Cantata del Desierto Verde* el 15/02/2026 y Equal
Music Sessions el 26/04/2026. El acto 2025 explica su continuación en 2026. El
nombre oficial de la edición de octubre es *Reconstruidas*; la reconstitución
orgánica permanece como concepto del relato. No hay citas inventadas.

La lectura y sus imágenes funcionan sin servicios externos. Las tipografías
Google Fonts tienen alternativas locales; la escucha requiere acceso a Bandcamp.

## Especificación y validación

- [Especificación](specs/001-archivo-anticueca/spec.md)
- [Plan](specs/001-archivo-anticueca/plan.md)
- [Tareas](specs/001-archivo-anticueca/tasks.md)
- [Validación](specs/001-archivo-anticueca/validation.md)

El trabajo implementa el encargo en este repositorio local. Publicación y envío
a GitHub son pasos independientes.
