/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff', 100: '#d9ecff', 200: '#bcdcff', 300: '#8ec5ff',
          400: '#59a3ff', 500: '#2f81fe', 600: '#1864f5', 700: '#1450e1',
          800: '#1742b6', 900: '#193d8f', 950: '#142557',
        },
        accent: {
          50: '#ecfdf5', 100: '#d1fae5', 200: '#a7f3d0', 300: '#6ee7b7',
          400: '#34d399', 500: '#10b981', 600: '#059669', 700: '#047857',
          800: '#065f46', 900: '#064e3b',
        },
        ink: {
          50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1',
          400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155',
          800: '#1e293b', 900: '#0f172a', 950: '#020617',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(15,23,42,.08), 0 4px 16px -4px rgba(15,23,42,.06)',
        card: '0 1px 3px rgba(15,23,42,.08), 0 8px 24px -8px rgba(15,23,42,.12)',
        glow: '0 0 0 1px rgba(47,129,254,.1), 0 8px 32px -8px rgba(47,129,254,.25)',
      },
      animation: {
        'fade-in': 'fadeIn .5s ease-out', 'fade-up': 'fadeUp .6s ease-out',
        'slide-down': 'slideDown .3s ease-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(16px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideDown: { '0%': { opacity: '0', transform: 'translateY(-8px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};
