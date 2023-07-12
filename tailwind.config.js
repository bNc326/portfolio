/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/sections/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Montserrat",
      },
      fontSize: {
        dynamicTitle:
          "clamp(1.953rem, calc(1.953rem + ((1vw - 0.2rem) * 0.488)), 2.441rem);",
        dynamicTitle2:
          "clamp(2.441rem, calc(2.441rem + ((1vw - 0.2rem) * 0.611)), 3.052rem);",
        dynamicTitle3:
          "clamp(1.563rem, calc(1.563rem + ((1vw - 0.2rem) * 0.39)), 1.953rem);",
        dynamicDesc:
          "clamp(1.25rem, calc(1.25rem + ((1vw - 0.2rem) * 0.313)), 1.563rem);",
        dynamicLogo:
          "clamp(1.563rem, calc(1.563rem + ((1vw - 0.2rem) * 0.39)), 1.953rem);",
        dynamicBtn:
          "clamp(1.25rem, calc(1.25rem + ((1vw - 0.2rem) * 0.313)), 1.563rem);",
        dynamicTimelineTitle:
          "clamp(1rem, calc(1rem + ((1vw - 0.2rem) * 0.25)), 1.25rem);",
        dynamicMedium:
          "clamp(0.8rem, calc(0.8rem + ((1vw - 0.2rem) * 0.2)), 1rem);",
        dynamicSmall:
          "clamp(0.64rem, calc(0.64rem + ((1vw - 0.2rem) * 0.16)), 0.8rem);",
        dynamicFormInput:
          "clamp(1rem, calc(1rem + ((1vw - 0.2rem) * 0.25)), 1.25rem);",
        dynamicFormLabel:
          "clamp(1.25rem, calc(1.25rem + ((1vw - 0.2rem) * 0.313)), 1.563rem);",
        dynamicHelperText:
          "clamp(0.8rem, calc(0.8rem + ((1vw - 0.2rem) * 0.2)), 1rem);",
        dynamicErrorMessage:
          "clamp(0.8rem, calc(0.8rem + ((1vw - 0.2rem) * 0.2)), 1rem);",
      },
      maxHeight: {
        dynamicMockup:
          "clamp(350px, calc(21.875rem + ((1vw - 3.2px) * 18.75)), 650px)",
      },
      height: {
        dynamicTimeline: "clamp(300px, 700vw, 200px)",
      },
      colors: {
        "red-palette": "var(--red)",
        light: "var(--light)",
        cyan: "var(--cyan)",
        "dark-cyan": "var(--dark-cyan)",
        "gray-blue": "var(--gray-blue)",
        "gray-blue-2": "var(--gray-blue-2)",
        dark: "var(--dark)",
      },
      boxShadow: {
        baseShadow: "0px 5px 15px 0px rgba(0,0,0,.35)",
        autofillShadow: "0 0 0px 1000px transparent inset",
      },
      keyframes: {
        heroSvg: {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(-10px)" },
        },
        heroSvg2: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        heroSvg3: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(10px)" },
        },
        pagination: {
          "0%": {
            width: "inherit",
            height: "inherit",
            color: "rgb(255, 255, 255, 0)",
          },
          "100%": {
            width: "200px",
            height: "2rem",
            color: "rgb(255, 255, 255, 1)",
          },
        },
        paginationOut: {
          "0%": {
            width: "200px",
            height: "2rem",
            color: "rgb(255, 255, 255, 1)",
          },
          "100%": {
            width: "2rem",
            height: "2rem",
            color: "rgb(255, 255, 255, 0)",
          },
        },
      },
      animation: {
        heroSvg: "heroSvg 10s ease-in-out infinite",
        heroSvg2: "heroSvg2 7s ease-in-out infinite",
        heroSvg3: "heroSvg3 12s ease-in-out infinite",
        pagination: "pagination .3s ease-in-out both",
        paginationOut: "paginationOut .3s ease-in-out both",
      },
      screens: {
        mobile: "768px",
        tablet: "992px",
        nav: "1200px",
        laptop: "1366px",
        desktop: "1920px",
        tall: { raw: "(max-height: 650px)" },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
