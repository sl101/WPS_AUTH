import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [],
  theme: {
    extend: {
      colors: {
        cyan: {
          "071": "#071a3b",
          "130": "#13294b",
          "730": "#7286a8",
          "740": "rgba(30, 60, 100, 0.8)",
        },
        red: {
          "620": "#d22630",
        },
      },
      fontFamily: {
        Roboto: ['"Roboto"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
