import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  spacing: 8,
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: "#15aeb5",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f37b87",
      contrastText: "#fff",
    },
    colors: {
      green: "#008000",
      lightGrey: "#cccccc",
      grey: "#aaaaaa",
      darkGrey: "#777777"
    },
  },
  overrides: {
    MuiPickersModal: {
      dialogAction: {
        "&:nth-of-type(1)": {
          order: 2,
        },
        "&:nth-of-type(2)": {
          order: 1,
        },
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: ".875rem",
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: "#cccccc",
      },
    },
    MuiMenuItem: {
      root: {
        paddingTop: 11,
        paddingBottom: 11
      }
    }
  },
});
