/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#83aed3",

          "secondary": "#efde8b",

          "accent": "#ef21b1",

          "neutral": "#1C1E26",

          "base-100": "#F8F6F9",

          "info": "#5FA5D3",

          "success": "#1D8645",

          "warning": "#E8C126",

          "error": "#EC3266",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
