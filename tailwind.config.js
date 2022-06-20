const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter", ...defaultTheme.fontFamily.sans],
        "roboto": ["Roboto", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        "green-primary": "#105032"
      }
    },
  },
  plugins: [],
}