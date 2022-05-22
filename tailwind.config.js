module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#EA580C",
          secondary: "#E5E7EB",
          accent: "#111827",
          neutral: "#191D24",
          "base-100": "#2A303C",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  theme: {
    extend: {},
    fontFamily: {
      koulen: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1200px",
        xl: "1200px",
        "2xl": "1200px",
      },
    },
  },
  plugins: [require("daisyui")],
};
