import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";

class ExampleApp extends React.Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path="/test/">
              <p>Hei</p>
            </Route>
            <Route path="/">
              <HomePage/>
            </Route>
          </Switch>
        </Router>
    );
  }
}

export default ExampleApp;
