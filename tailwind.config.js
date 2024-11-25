/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*", "./assets/**/*", "./node_modules/preline/**/*"],
  theme: {
    extend: {
      fontFamily: {
        calsans: "Cal Sans"
      }
    },
  },
  plugins: [
    require('preline/plugin')
  ],
}

