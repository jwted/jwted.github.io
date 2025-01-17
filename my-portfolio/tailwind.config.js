
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    screens:{
      phone:"640px",
      pc:"1024px",
      tablet:"768px"
    },
    extend: {
      height:{
        'nav' : '9vh'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}



