import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { NavBar } from "./components/navigation/NavBar";
import { H1 } from "./components/Text";
import { NavBarPhone } from "./components/navigation/NavBarPhone";
import { NewsRouter } from "./pages/news/NewsRouter";
import { Login } from "./pages/login/Login";
import { setAuthToken } from "./pages/login/setAuthToken";

class App extends React.Component {
  
  componentDidMount() {
    // Check for JWT
    const token = localStorage.getItem("token");
    if (token) {
        setAuthToken(token);
    }
  }

  render() {
    return (
        <Router>
          <NavBar/>
          <Switch>
            <Route path="/" exact>        <HomePage/>                 </Route>
            <Route path='/login'>         <Login/>                    </Route>
            <Route path="/arrangement">   <H1>BLOT OG SÅNN!!!</H1>    </Route>
            <Route path="/bedrift">       <H1>Bedrift</H1>            </Route>
            <Route path="/internt">       <H1>Internt</H1>            </Route>
            <Route path="/info">          <H1>Info</H1>               </Route>
            <Route path="/profil">        <H1>Profil</H1>             </Route>
            <Route path="/nyheter"> <NewsRouter /> </Route>
          </Switch>
          <NavBarPhone/>
        </Router>
    );
  }
}

export default App;
