/** Palette sampled from the official school emblem */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        crimson: { DEFAULT: '#8E0F2B', dark: '#6A0A20', light: '#B3173A' },
        navy: { DEFAULT: '#14224D', dark: '#0C1633', light: '#22346E' },
        gold: { DEFAULT: '#E3A81C', dark: '#BF8A0E', light: '#F6D77A' },
        cream: '#FFF9EE',
        leaf: '#1F7A3A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(20,34,77,.25)',
      },
    },
  },
  plugins: [],
}
