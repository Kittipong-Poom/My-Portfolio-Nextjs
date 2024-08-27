/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-old': '#6D7462', // Custom color name and code
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        hero_shape: "url(/hero/shape-1.svg)",
        hero_shape2_light: "url(/hero/shape-2-light.svg)",
        hero_shape2_dark: "url(/hero/shape-2-dark.svg)",
        about_shape_light: "url(/about/shape-light.svg)",
        about_shape_dark: "url(/about/shape-dark.svg)",
        service_bg : "url(/about/japan.jpeg)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dracula", "cupcake"], // You can list the themes you want to use here
    // Or you can set a default theme with
    // themes: ["myCustomTheme", "light", "dark"],
  },
};
