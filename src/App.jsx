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
import { Kontortilgang } from "./pages/home/Kontortilgang";
import { AboutHC } from "./pages/home/AboutHC";
import { AuthProvider } from './context/AuthContext'
import { CommitteeDetailsPage } from "./pages/subgroups/CommitteeDetailsPage";
import { EventPage } from "./pages/events/events";
import { SoknadMidler } from "./pages/home/soknadommidler";
import { Internside } from "./pages/internt/internt";
import { Klassekatalog } from "./pages/internt/Klassekatalog";
import { General } from "./pages/training/general";
import { ApiDemo } from "./pages/training/API";
// import { FillIn } from "./pages/training/fill_in_code";
import { AddComments } from "./pages/training/add_comments_code";
import { MapDemo } from "./pages/training/mapGuide";


class App extends React.Component {

  render() {
    return (
        <Router>
          <AuthProvider>
          <NavBar/>
          <Switch>
            <Route path="/" exact>                  <HomePage/>                 </Route>
            <Route path="/arrangement">             <EventPage/>                </Route>
            <Route path='/login'>                   <Login/>                    </Route>
            <Route path="/bedrift">                 <H1>Bedrift</H1>            </Route>
            <Route path="/internt">                 <Internside/>               </Route>
            <Route path="/info">                    <H1>Info</H1>               </Route>
            <Route path="/profil">                  <H1>Profil</H1>             </Route>
            <Route path="/om-hc">                   <AboutHC/>                  </Route>
            <Route path="/nyheter">                 <NewsRouter/>               </Route>
            <Route path="/undergrupper/:committee"> <CommitteeDetailsPage/>     </Route>            
            <Route path="/undergrupper">            <CommitteePage/>            </Route>
            <Route path="/kontortilgang">           <Kontortilgang/>            </Route>
            <Route path="/midler">                  <SoknadMidler/>             </Route>
            <Route path="/klassekatalog">           <Klassekatalog/>            </Route>
            <Route path="/hjelp">                   <General/>                  </Route> {/* A page with general components to start learning */}
            <Route path="/APIdemo">                 <ApiDemo/>                  </Route> {/* A page with API, axios, post and fetch */}
            {/* <Route path="/fillIn">                  <FillIn/>                   </Route>  A page with un-finished code to fill in */}
            <Route path="/addComments">             <AddComments/>              </Route> {/* A page with finished code to fill out comments */}
            <Route path="/mapDemo">                 <MapDemo/>                  </Route>
          </Switch>
          <NavBarPhone/>
          </AuthProvider>
        </Router>
    );
  }
}

export default App;
