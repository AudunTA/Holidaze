import { colors, createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      light: "rgb(148 163 184",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

export { Theme };
