/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["League Spartan", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "480px",
        sm: "768px",
      },
      backgroundColor: {
        DesaturatedDarkCyan: "hsl(180, 29%, 50%)",
        LightGrayishCyanFilterTablets: "hsl(180, 52%, 96%)",
        LightGrayishCyan: "hsl(180, 31%, 95%)",
        DarkGrayishCyan: "hsl(180, 8%, 52%)",
        VeryDarkGrayishCyan: "hsl(180, 14%, 20%)",
      },
      colors: {
        DesaturatedDarkCyan: "hsl(180, 29%, 50%)",
        LightGrayishCyanFilterTablets: "hsl(180, 52%, 96%)",
        LightGrayishCyan: "hsl(180, 31%, 95%)",
        DarkGrayishCyan: "hsl(180, 8%, 52%)",
        VeryDarkGrayishCyan: "hsl(180, 14%, 20%)",
      },
      fontSize: {
        body: "15px",
      },
    },
  },
  plugins: [],
};
