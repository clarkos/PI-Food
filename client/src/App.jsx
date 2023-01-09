import { Route, Switch } from "react-router";
import { useLocation } from "react-router-dom";
import { Navbar, Create } from "./components";
import { About, Detail, Footer, Home, Landing, NotFound } from "./pages";
import "./App.css";

function App() {
  let location = useLocation();
  return (
    <div className="container">
      <div className="content">
        {location.pathname !== "/" ? (
          <div className="gradient__bg">
            <Navbar />
          </div>
        ) : (
          <></>
        )}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/recipe/:id" component={Detail} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
