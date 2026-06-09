export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#0b0504',
          900: '#1b1210',
          800: '#2a1917',
          700: '#3e2d28',
          600: '#554239',
          500: '#7a574b',
          400: '#b38f7f',
          300: '#d5b59f',
          200: '#f0e4d8',
          gold: '#d5b36c'
        }
      },
      boxShadow: {
        glass: '0 30px 80px rgba(0,0,0,0.35)',
        soft: '0 18px 50px rgba(0,0,0,0.22)'
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        steam: 'steam 6s ease-in-out infinite',
        pulse: 'pulse 6s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' }
        },
        steam: {
          '0%': { opacity: 0.2, transform: 'translateY(0) scale(0.9)' },
          '50%': { opacity: 0.7, transform: 'translateY(-40px) scale(1.05)' },
          '100%': { opacity: 0, transform: 'translateY(-80px) scale(1.2)' }
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' }
        }
      }
    }
  },
  plugins: []
};
