import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { NavBar } from "./components/navigation/NavBar";
import { CommitteePage} from "./pages/subgroups/SubGroups";
import { H1 } from "./components/Text";
import { NavBarPhone } from "./components/navigation/NavBarPhone";
import { NewsRouter } from "./pages/news/NewsRouter";
import { Login } from "./pages/login/Login";
import { setAuthToken } from "./pages/login/setAuthToken";
import { AboutHC } from "./pages/home/AboutHC";
import { AuthProvider } from './context/AuthContext'
import { CommitteeDetailsPage } from "./pages/subgroups/CommitteeDetailsPage";
import { SoknadMidler } from "./pages/home/soknadommidler";


class App extends React.Component {

  render() {
    return (
        <Router>
          <AuthProvider>
          <NavBar/>
          <Switch>
            <Route path="/" exact>                  <HomePage/>                 </Route>
            <Route path='/login'>                   <Login/>                    </Route>
            <Route path="/arrangement">             <H1>BLOT OG SÅNN!!!</H1>    </Route>
            <Route path="/bedrift">                 <H1>Bedrift</H1>            </Route>
            <Route path="/internt">                 <H1>Internt</H1>            </Route>
            <Route path="/info">                    <H1>Info</H1>               </Route>
            <Route path="/profil">                  <H1>Profil</H1>             </Route>
            <Route path="/om-hc">                   <AboutHC/>                  </Route>
            <Route path="/nyheter">                 <NewsRouter/>               </Route>
            <Route path="/undergrupper/:committee"> <CommitteeDetailsPage/>     </Route>            
            <Route path="/undergrupper">            <CommitteePage/>            </Route>
            <Route path="/midler">                  <SoknadMidler/>             </Route>
          </Switch>
          <NavBarPhone/>
          </AuthProvider>
        </Router>
    );
  }
}

export default App;
