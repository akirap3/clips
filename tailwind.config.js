module.exports = {
  purge: {
    options: {
      safelist: ["bg-blue-400", "bg-green-400", "bg-red-400"],
    },
  },
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      backgroundColor: ["disabled"],
    },
  },
  plugins: [],
};
