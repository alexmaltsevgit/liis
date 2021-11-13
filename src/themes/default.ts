import { AppTheme } from "./types";

const defaultTheme: AppTheme = {
  colors: {
    background: "#F4F4F4",
    red: "#E55858",
    yellow: "#CDBC1E",
    text: {
      primary: "#424242",
      secondary: "#878787",
    },
  },

  breakpoints: {
    lg: "(max-width: 1300px)",
    md: "(max-width: 900px)",
    sm: "(max-width: 600px)",
  },
};

export default defaultTheme;
