import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        '30r': '30rem',
        '35r': '35rem',
        '40r': '40rem'
      },
      height: {
        '30r': '30rem',
        '35r': '35rem',
        '40r': '40rem'
      },
      keyframes: {
        shift: {
          '0%, 25%': { 'background-position': '0%, 50%' },
          '50%, 75%': { 'background-position': '50%, 100%' },
          '100': { 'background-position': '100%, 0%' },
        }
      },
      animation: {
        shift: 'shift 5s linear infinite'
      }
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1080px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
  darkMode: "class",
}
export default config
