import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { HomePage } from "./pages/homeOLD/HomePage";
import { NewsRouter } from "./pages/news/NewsRouter";


class App extends React.Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/"/>
            <NewsRouter/>
            <Redirect to="/"/>
          </Switch>
        </Router>
    );
  }
}

export default App;
