import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { CommitteePage} from "./pages/subgroups/SubGroups";
import { NavBar } from "./components/navigation/NavBar";
import { H1 } from "./components/Text";
import { NavBarPhone } from "./components/navigation/NavBarPhone";
import { NewsRouter } from "./pages/news/NewsRouter";
import { NewsList } from "./pages/news/NewsList";
import { NewsDetail } from "./pages/news/NewsDetail";
import { NewsForm} from "./pages/news/NewsForm";
import { Internside } from "./pages/internt/Internt";
import { Profil } from "./pages/profile/profile";
import { CommitteeDetailsPage } from "./pages/subgroups/CommitteeDetailsPage";

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
            <Route path="/internt">       <Internside/>            </Route>
            <Route path="/info">          <H1>Info</H1>               </Route>
            <Route path="/profil">        <Profil/>             </Route>
            <Route path="/nyheter">                 <NewsRouter/>               </Route>
            <Route path="/undergrupper/:committee"> <CommitteeDetailsPage/>     </Route>            
            <Route path="/undergrupper">            <CommitteePage/>            </Route>
          </Switch>
          <NavBarPhone/>
        </Router>
    );
  }
}

export default App;
