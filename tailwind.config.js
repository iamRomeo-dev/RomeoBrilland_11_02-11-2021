module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "10xl": "10rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
