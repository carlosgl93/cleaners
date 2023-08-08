import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#C77FC1",
    },
    secondary: {
      main: "#5CBBA8",
    },
    background: {
      default: "#02082B",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#C77FC1",
          color: "#02082B",
          "&:hover": {
            backgroundColor: "#5CBBA8",
            color: "#02082B",
          },
          "&:focus": {
            backgroundColor: "#5CBBA8",
            color: "#02082B",
          },
        },
      },
    },
  },
});

export default theme;
