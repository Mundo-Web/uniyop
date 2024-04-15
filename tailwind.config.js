/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      stroke: (theme) => ({
        strokeCeleste: "#3D8BF2",
      }),
      fill: (theme) => ({
        fillCeleste: "#3D8BF2",
        fillPurpose: "#A9A0EA",
      }),
      fontFamily: {
        asap: ["Asap", "sans-serif"],
      },
      fontSize: {
        text10: "10px",
        text12: "12px",
        text14: "14px",
        text16: "16px",
        text18: "18px",
        text20: "20px",
        text22: "22px",
        text24: "24px",
        text26: "26px",
        text28: "28px",
        text30: "30px",
        text32: "32px",
        text36: "36px",
        text40: "40px",
        text44: "44px",
        text48: "48px",
        text52: "52px",
        text56: "56px",
        text60: "60px",
        text64: "64px",
        text68: "68px",
        text72: "72px",
        text74: "74px",
        text80: "80px",
        text90: "90px",
        text100: "100px",
        text135: "135px",
        text145: "145px",
        text160: "160px",
      },
      backgroundColor: {
        bgCeleste: "#3D8BF2",
        bgAzulMarino: "#204088",
        bgAzulSuave: "#4E82C2",
        bgYellow: "#F6D84D",
        bgGreen: "#BEF4C0",
        bgRosa: "#E4E2F6",
        bgPink: "#FFD1E5",
        bgOrange: "#FFC193",
        bgInput: "#F7F8FA",
        bgCard: "#F7F8FA",
        bgPinkStrong: "#E398BB",
        bgPurposeStrong: "#A9A0EA",
        bgGreenStrong: "#33B438",
        bgYellowStrong: "#F6D84D",
        bgGreenSuave: "#98E69B",
        bgPurposeSuave: "#D5D0F4",
        bgYellowSuave: "#FAE9A5",
        bgPurposeBack: "#ABA0EA",
        bgAzulCeleste: "#3084E2",
      },
      textColor: {
        textWhite: "#FFFFFF",
        textWhiteWeak: "#FCFBFA",
        textAzul: "#00395F",
        textGray: "#566A7F",
        textAzulMarino: "#204088",
        textGrayStrong: "#334155",
        textGreen: "#85C988",
        textPurpose: "#A9A0EA",
        textPink: "#F094BC",
        textOrange: "#E19053",
        textCeleste: "#3D8BF2",
        textAzulDark: "#2C2543",
      },
    },
    screens: {
      xs: "320px",
      "2xs": "370px",
      sm: "640px",
      md: "768px",
      "2md": "900px",
      lg: "1024px",
      "2lg": "1100px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1600px",
    },
  },

  plugins: [],
};