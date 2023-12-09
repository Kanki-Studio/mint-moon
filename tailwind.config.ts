import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#131129',
        primary: '#1D1932',
        btnPrimary: '#6F4FF2',
        btnSecondary: '#DC3546'
      }
    },
  },
  plugins: [],
}
export default config
