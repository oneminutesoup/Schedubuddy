import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Main from "layouts/Main";

const theme = createTheme({
  palette: {
    primary: {
      main: "#167742",
    },
    secondary: {
      main: "#FEDB04",
    },
  },
});

const App = () => (
  <div className="page-container">
    <div className="content-wrap">
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </div>
  </div>
);

export default App;
