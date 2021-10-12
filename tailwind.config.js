module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      sm: { min: "640px" },
      // => @media (min-width: 640px) { ... }

      md: { min: "570px" },
      // => @media (min-width: 570px) { ... }

      lg: { min: "1024px" },
      // => @media (min-width: 1024px) { ... }

      xl: { min: "1280px" },
      // => @media (min-width: 1280px) { ... }

      "2xl": { min: "1536px" }
      // => @media (min-width: 1536px) { ... }
    }
    // spacing: {
    //   xs: "12px",
    //   sm: "24px",
    //   md: "30px",
    //   lg: "30px",
    //   xl: "30px"
    // }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
