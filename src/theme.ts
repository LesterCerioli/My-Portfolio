import { createTheme } from "@mui/material";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500], // Purple color for primary theme
    },
    secondary: {
      main: green[500], // Green color for secondary theme  
    },
  },
});

export default theme;
