module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1280px",
        xl: "1280px",
        "2xl": "1280px",
      },
    },
  },
  plugins: [require("daisyui")],
};
