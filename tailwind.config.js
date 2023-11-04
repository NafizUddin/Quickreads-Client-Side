/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#13A5C9",
          "primary-focus": "mediumblue",
          "primary-hover": "#1083A7",
        },
      },
      {
        night: {
          ...require("daisyui/src/theming/themes")["[data-theme=night]"],
          primary: "#13A5C9",
          "primary-focus": "mediumblue",
          "primary-hover": "#1083A7",
        },
      },
    ],
  },
};
