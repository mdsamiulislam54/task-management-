/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        background: "rgba(55,81,253,0.06)", 
        acent: "#3752FD", 
        text: "#00303C",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], 
      },
    },
  },
  plugins: [],
}

