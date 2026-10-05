import type { SiteContent } from '../types/marketing';

/** Contenido de ejemplo. Sustituye los textos y el correo antes de publicar. */
export const SITE: SiteContent = {
  brand: 'Tu marca',
  hero: {
    eyebrow: 'Productos / Servicios',
    title: 'Tu propuesta de valor,\ncon claridad.',
    description: 'Una solución para conectar lo que ofreces con lo que tus clientes necesitan.',
    primaryAction: { label: 'Hablemos', href: '#contacto' },
    secondaryAction: { label: 'Conocer la propuesta', href: '#beneficios' },
    visualLabel: 'Tu producto o servicio',
    // media: { src: `${import.meta.env.BASE_URL}images/producto.webp`, alt: 'Descripción del producto', width: 1200, height: 900 },
  },
  // Puedes eliminar, reordenar o agregar bloques. Para una landing mínima: [].
  sections: [
    {
      id: 'beneficios',
      navLabel: 'Beneficios',
      eyebrow: '01 / La propuesta',
      title: 'Lo que cambia\npara tus clientes.',
      description: 'El valor de un producto o servicio está en lo que permite hacer, mejorar o resolver.',
      points: [
        { title: 'Un beneficio claro', description: 'Una mejora concreta en el día a día de quien te elige.' },
        { title: 'Una experiencia sencilla', description: 'Menos pasos entre una necesidad y su solución.' },
        { title: 'Un siguiente paso', description: 'Una forma directa de conocer más y empezar una conversación.' },
      ],
    },
    {
      id: 'proceso',
      navLabel: 'Cómo funciona',
      eyebrow: '02 / El recorrido',
      title: 'Del interés\na la solución.',
      description: 'Un recorrido simple para encontrar la opción que se adapta a cada necesidad.',
      points: [
        { title: 'Conoce la propuesta', description: 'Descubre qué ofrece el producto o servicio.' },
        { title: 'Encuentra tu opción', description: 'Conversa sobre lo que necesitas y resuelve tus dudas.' },
        { title: 'Da el primer paso', description: 'Elige cómo comenzar.' },
      ],
    },
  ],
  contact: {
    id: 'contacto',
    navLabel: 'Contacto',
    eyebrow: 'El siguiente paso',
    title: 'Empecemos\nuna conversación.',
    description: 'Cuéntanos qué necesitas. Busquemos una opción para ti.',
    action: { label: 'Solicitar información', href: 'mailto:hola@example.com' },
  },
  footer: 'Productos y servicios. Una propuesta a tu medida.',
};
