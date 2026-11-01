/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'deep-teal': '#0E7D7A',
          'turquoise': '#14B8A6',
          'nature-green': '#84D46B',
          'info-blue': '#3B82F6',
          'alert-orange': '#F59E0B',
          'highlight-yellow': '#FCD34D',
          'bg-ice': '#F0F9FF',
          'surface': '#E2E8F0',
          'text': '#475569',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)',
        'card': '0 4px 6px -1px rgba(14, 125, 122, 0.05), 0 2px 4px -2px rgba(14, 125, 122, 0.05)',
        'card-hover': '0 10px 15px -3px rgba(14, 125, 122, 0.08), 0 4px 6px -4px rgba(14, 125, 122, 0.08)',
      }
    },
  },
  plugins: [],
}

