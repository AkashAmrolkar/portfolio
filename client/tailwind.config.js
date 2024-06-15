/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          DEFAULT: '#ffcb75'
        },
        secondary: {
          DEFAULT: '#191d28'
        },
      },
    },
  },
  plugins: [],
}

