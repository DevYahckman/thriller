/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "320px",

      md: "547px",

      lg: "862px",

      xl: "1024px",

      "2xl": "1680px",
    },
    extend: {
      colors:{
        bgColorOne:'#f3f6fd',
        bgColorTwo:'#e9f0f8',
        primaryColor:'#7c8ac0',
        primaryColor1:'#74c684',
        logoColor: '#9fa5c5',
        secondColor:'#646f8d'
        
      }
    },
  },
  plugins: [],
};
