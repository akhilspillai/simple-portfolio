import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h6: {
      fontWeight: "bolder",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: "bolder",
      color: "#1A1BF",
    },
    subtitle2: {
      color: "#1A1BF",
    },
  },
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

theme.typography.h2 = {
  fontSize: "3.7rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
};

theme.typography.h3 = {
  fontSize: "3rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
};

theme.typography.h4 = {
  fontSize: "2.1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.6rem",
  },
};

theme.typography.h6 = {
  fontSize: "1.4rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
  },
};

function App(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <div className="title-wrapper">
            <Typography variant="h6" className="title">
              Portfolio
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
