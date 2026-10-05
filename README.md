# Marketing Scrollytelling Template

Base estática y personalizable para promocionar productos o servicios. Incluye
una portada, dos bloques narrativos de ejemplo y una llamada a la acción.
Sin backend, fotografías de stock, métricas ficticias ni integraciones obligatorias.

## Ramas

- **main**: template genérico para campañas y páginas de marketing.
- **phuyu**: experiencia completa de Phuyu y la Fantasma, con imágenes, cronología,
  escucha oficial, fuentes y documentación del trabajo artístico.

```bash
git switch main     # trabajar sobre el template
git switch phuyu    # ver la experiencia de la banda
```

## Desarrollo

```bash
npm ci
npm run dev
npm run build
npm run preview
```

Vite sirve el proyecto en el puerto 3000. `build` comprueba TypeScript y genera
`dist/`. Stack: React + TypeScript + Vite + GSAP/ScrollTrigger + Lenis + Tailwind.
No se necesitan API keys, servidor ni fuentes externas.

## Personalizar una campaña

1. Edita **src/data/site.ts**: marca, textos, navegación, beneficios, pasos,
   medios opcionales y CTA. El contenido actual es un ejemplo, no una marca real.
2. Sustituye `mailto:hola@example.com` por tu correo, una página de compra,
   reserva, formulario externo o canal de contacto. El enlace es el comportamiento
   real del CTA; no hay formularios que simulen envíos.
3. Cambia los tokens en **src/index.css**: colores, fuentes y superficies. Tailwind
   expone esos mismos tokens como `surface`, `ink`, `muted`, `accent`.
4. Coloca tus imágenes en **public/images/** y configura `hero.media` o
   `sections[n].media`. Usa rutas con `import.meta.env.BASE_URL`, dimensiones
   reales y texto alternativo; el gráfico abstracto desaparece al añadir la imagen.
5. Actualiza título, descripción y theme-color en **index.html**, y el favicon
   en **public/favicon.svg** antes de publicar.

`sections` puede contener cualquier cantidad de bloques: agregar, reordenar o
eliminar un bloque actualiza también el menú. `points`, `media` y `action` son
opcionales. Para una landing mínima, deja `sections: []` y quita o cambia el
`secondaryAction` del Hero para que no apunte a una sección eliminada.

```ts
{
  id: 'producto',
  navLabel: 'Producto',
  eyebrow: 'La solución',
  title: 'Nombre del producto',
  description: 'Qué ofrece y para quién.',
  media: {
    src: `${import.meta.env.BASE_URL}images/producto.webp`,
    alt: 'Descripción de lo que muestra la imagen',
    width: 1200,
    height: 900,
    caption: 'Información adicional opcional',
  },
  action: { label: 'Ver opciones', href: '#contacto' },
}
```

Usa IDs únicos, sin espacios, y haz que los enlaces internos apunten a IDs
existentes. Los IDs `inicio`, `hero-title`, `contact-title`, `site-links` y el
ID del contacto están reservados para los componentes base.

## Estructura

```text
src/
  components/
    Hero.tsx             # propuesta de valor y medio opcional
    StorySection.tsx     # bloque narrativo reutilizable
    ContactSection.tsx   # llamada a la acción
    SiteNavigation.tsx   # menú derivado del contenido y progreso
    SmoothScroll.tsx     # Lenis + ScrollTrigger
  data/site.ts           # configuración de la campaña
  hooks/useScene.ts      # animación y paralaje con reduced-motion
  types/marketing.ts     # contratos de contenido
  index.css              # tokens y diseño responsivo
```

Lenis se activa en dispositivos con puntero fino y movimiento permitido. En
móvil táctil se conserva el scroll nativo. `prefers-reduced-motion` desactiva
revelados y paralaje; los efectos se limpian al desmontar componentes.

Para publicar en un subdirectorio:

```bash
npm run build -- --base=/scrollytelling-template/
```

Consulta [la especificación](specs/001-marketing-template/spec.md) y
[la validación](specs/001-marketing-template/validation.md).
