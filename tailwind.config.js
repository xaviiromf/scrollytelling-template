/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        phuyu: {
          dark: '#0a0b0c',
          charcoal: '#141618',
          stone: '#24272a',
          earth: '#3d342d',
          clay: '#9c442b',
          moss: '#324035',
          fog: '#e5e7eb',
          mist: '#9ca3af',
        }
      },
      fontFamily: {
        editorial: ['Georgia', 'Cambria', 'serif'],
        mono: ['Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fog-flow': 'fog 25s ease-in-out infinite alternate',
      },
      keyframes: {
        fog: {
          '0%': { transform: 'translateX(-5%) translateY(-2%) scale(1)' },
          '100%': { transform: 'translateX(5%) translateY(2%) scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
