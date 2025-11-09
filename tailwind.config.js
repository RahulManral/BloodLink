export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        customFont:["Poppins","sans-serif"]
      },
      
      screens: {
        'xs': '350px',  
        'ms': '420px',
        'sm': '640px',  
        'md': '768px',  
        'lg': '1024px', 
        'xl': '1280px', 
        '2xl': '1536px', 
      },

    },
  },
  plugins: [],
}

