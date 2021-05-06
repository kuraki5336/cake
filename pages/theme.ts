import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// 自定義主題
const theme = createMuiTheme({
  palette: {
    primary: { main: "#556cd6" },
    secondary: { main: "#19857b" },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
