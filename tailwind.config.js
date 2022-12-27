/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#324F6D",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
        },
      },
    ],
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
