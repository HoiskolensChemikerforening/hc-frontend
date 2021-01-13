import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { News } from "./pages/news/News";
import {NavBar} from "./components/NavBar";

class ExampleApp extends React.Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path="/test/">
              <p>Hei</p>
            </Route>
            <Route path="/">
              <NavBar/>
              <News/>
            </Route>
          </Switch>
        </Router>
    );
  }
}

export default ExampleApp;

/* 
  <>
    <NavBar />
    <News />
  </> 
      */