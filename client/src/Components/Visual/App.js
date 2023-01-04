import { Route, Switch } from "react-router";
import "./App.css";
import Form from "./Form/Form";
import GetStarted from "./Landing/GetStarted";
import { Home } from "../Visual/Home/Home";
import MainDetails from "./Details/MainDetails";
import Errorhandler from "./Errorhandler";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={GetStarted} />
          <Route exact path="/home" component={Home} />
          <Route path="/makeRecipe" component={Form} />
          <Route path="/recipe/:id" component={MainDetails} />
          <Route component={Errorhandler} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

const theme = {
  glassWhite: "rgba(255, 255, 255, 0.35)",
  glassTransparent: "rgba(255, 255, 255, 0.35)",
  glassBorder: "1px solid rgba(255, 255, 255, 0.18)",
  darkBorder: "1px solid rgba(55, 55, 55)",
  glassBorderRadius: `10px`,
  hoverShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
};

export default App;
