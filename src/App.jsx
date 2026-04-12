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
import { Kontortilgang } from "./pages/internt/Kontortilgang";
import { AboutHC } from "./pages/internt/AboutHC";
import { AuthProvider } from './context/AuthContext'
import { CommitteeDetailsPage } from "./pages/subgroups/CommitteeDetailsPage";
import { EventPage } from "./pages/events/events";
import { SoknadMidler } from "./pages/internt/soknadommidler";
import { Internside } from "./pages/internt/internt";
import { Klassekatalog } from "./pages/internt/Klassekatalog";
import { Kontaktinfo } from "./pages/internt/kontaktinfo";
import { Kontoret } from "./pages/internt/kontoret";
import { Komponenter } from "./components/ComponentTesting";
import { Bedrift } from "./pages/Bedrift/bedrift";
import { Jobbutlysninger } from "./pages/Bedrift/jobbutlysninger";
import { Arrangementer } from "./pages/Bedrift/arrangementer";
import { Intervjuer } from "./pages/Bedrift/Intervjuer";
import { Diplomundersøkelsen } from "./pages/Bedrift/Diplomundersøkelsen";
import { Indkom_infoside } from "./pages/Bedrift/indkom_infoside";



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
            <Route path="/indkom_infoside">         <Indkom_infoside/>          </Route>
            <Route path="/bedrift">                 <Bedrift/>                  </Route>
            <Route path="/jobbutlysninger">         <Jobbutlysninger/>          </Route>
            <Route path="/arrangementer">           <Arrangementer/>            </Route>
            <Route path="/Intervjuer">              <Intervjuer/>               </Route>
            <Route path="/Diplomundersøkelsen">     <Diplomundersøkelsen/>      </Route>
            <Route path="/internt">                 <Internside/>               </Route>
            <Route path="/profil">                  <H1>Profil</H1>             </Route>
            <Route path="/om-hc">                   <AboutHC/>                  </Route>
            <Route path="/nyheter">                 <NewsRouter/>               </Route>
            <Route path="/undergrupper/:committee"> <CommitteeDetailsPage/>     </Route>            
            <Route path="/undergrupper">            <CommitteePage/>            </Route>
            <Route path="/kontortilgang">           <Kontortilgang/>            </Route>
            <Route path="/midler">                  <SoknadMidler/>             </Route>
            <Route path="/klassekatalog">           <Klassekatalog/>            </Route>
            <Route path="/kontaktinfo">             <Kontaktinfo/>              </Route>
            <Route path="/kontoret">                <Kontoret/>                 </Route> 
            <Route path="/komponenter">             <Komponenter/>                 </Route> 
          </Switch>
          <NavBarPhone/>
          </AuthProvider>
        </Router>
    );
  }
}

export default App;
