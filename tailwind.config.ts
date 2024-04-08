import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width:{
        '30r': '30rem',
        '35r': '35rem',
        '40r': '40rem'
      },
      height:{
        '30r': '30rem',
        '35r': '35rem',
        '40r': '40rem'
      },
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
