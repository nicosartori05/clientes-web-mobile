/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // app: '64px 1fr 150px',
        app: '64px 1fr 150px',
      }
    },
  },
  plugins: [],
}

