/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "caveat": "Caveat', cursive",
        "Josefin": "'Josefin Sans', sans-serif",
        "Indie": "'Indie Flower', cursive",
      },
      colors: {
        "HOLIDAZE-BROWN": "#40281A",
        "HOLIDAZE-BLACK": "#0A0D0A",
        "HOLIDAZE-GRAY": "D9D9D9",
        "HOLIDAZE-BROWN-2": "#BF895A",
      },
      backgroundImage:
         {
           'hero_pattern': "url('/)"
         },
      screens: {

        'lMobile': '425px',

        'tablet': '740px',
        // => @media (min-width: 640px) { ... }
                                          
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
