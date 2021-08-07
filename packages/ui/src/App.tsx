import { ReactElement } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      fontSize: "4rem",
      fontFamily: ["Freescript", "sans-serif"].join(","),
      fontWeight: "normal",
    },
    h2: {
      fontSize: "4.5rem",
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontWeight: "bold",
      lineHeight: "1",
    },
    h3: {
      fontSize: "3rem",
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontWeight: "bold",
    },
    h4: {
      fontSize: "2.1rem",
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    h6: {
      fontSize: "2rem",
      fontFamily: ["Newsgoth", "sans-serif"].join(","),
    },
    subtitle1: {
      fontSize: "1.5rem",
      fontWeight: "normal",
      lineHeight: "normal",
      color: "#1A1BF",
      fontFamily: ["Newsgoth", "sans-serif"].join(","),
    },
    body1: {
      fontFamily: ["Newsgoth", "sans-serif"].join(","),
    },
    body2: {
      fontSize: "0.7rem",
      fontFamily: ["Newsgoth", "sans-serif"].join(","),
    },
  },
  palette: {
    primary: {
      main: "#12B2F9",
    },
    text: {
      primary: "#040221",
      secondary: "#E3E3E3",
    },
  },
});

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down("xs")]: {
    fontSize: "3rem",
  },
};

theme.typography.h2 = {
  ...theme.typography.h2,
  [theme.breakpoints.down("xs")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "2.5rem",
  },
};

theme.typography.h3 = {
  ...theme.typography.h3,
  [theme.breakpoints.down("xs")]: {
    fontSize: "2rem",
  },
};

theme.typography.h4 = {
  ...theme.typography.h4,
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.6rem",
  },
};

theme.typography.h5 = {
  ...theme.typography.h5,
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.2rem",
  },
};

theme.typography.subtitle1 = {
  ...theme.typography.subtitle1,
  [theme.breakpoints.down("xs")]: {
    fontSize: "1rem",
  },
};

function App(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
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
