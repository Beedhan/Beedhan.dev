/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#1E1E1E",
        "text":"#FBFBFB",
        "text-secondary":"#B1B1B1"
      }
    },
    fontFamily:{
      'Poppins':['Poppins', 'sans-serif'],
      "Roboto-Slab":['Roboto Slab', 'serif'],
    }
  },
  plugins: [],
}