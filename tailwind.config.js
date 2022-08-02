/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#176F6B",
          secondary: "#FF7700",
          accent: "#8FBDD3",
          neutral: "#F3F4F6",
          "base-100": "#ffffff",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#f2a218",
          error: "#FA5C5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
