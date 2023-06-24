/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueColor: "#4e82f0", // RGB(78,130,240)
        greenColor: "#5aab97", // RGB(90,171,151)
        orangeColor: "#e76546", // RGB(231,101,70)
        mustardColor: "#f2b262", // RGB(242,178,98)
        grayColor: "#f5f5f5", // RGB(245,245,245)
      },
      fontSize: {
        "4xl": [
          "2.6rem",
          {
            lineHeight: "3rem",
          },
        ],
      },
    },
  },
  plugins: [],
};
