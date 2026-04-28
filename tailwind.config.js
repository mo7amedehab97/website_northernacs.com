import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        arabic: ['Cairo', 'sans-serif'],
      },
      colors: {
        nacs: {
          green: '#08563D',
          greenDark: '#064531',
          greenDeep: '#043222',
          greenHover: '#064531',
          accent: '#0A6F4C',
          mint: '#e6f4ec',
          ink: '#0f172a',
          muted: '#475569',
          line: '#e2e8f0',
          surface: '#f8fafc',
          card: '#ffffff',
        },
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out',
      },
    },
  },
  plugins: [typography],
};
