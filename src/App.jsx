import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { NavBar } from "./components/NavBar";
import { CommitteePage} from "./pages/subgroups/SubGroups";
import { H1 } from "./components/Text";
import { NavBarPhone } from "./components/NavBarPhone";
import { NewsRouter } from "./pages/news/NewsRouter";
import { NewsList } from "./pages/news/NewsList";
import { NewsDetail } from "./pages/news/NewsDetail";
import { NewsForm} from "./pages/news/NewsForm";
import { CommitteeDetailsPage } from "./pages/undergrupper/CommitteeDetailsPage";
import { Internside } from "./pages/internt/Internt";
import { Bokskap } from "./pages/bokskap/bokskap";
import { Reservasjon } from "./pages/bokskap/reservasjon";


class App extends React.Component {
  render() {
    return (
        <Router>
          <NavBar/>
          <Switch>
            <Route path="/" exact>        <HomePage/>                 </Route>
            <Route path="/arrangement">   <H1>BLOT OG SÅNN!!!</H1>    </Route>
            <Route path="/bedrift">       <H1>Bedrift</H1>            </Route>
            <Route path="/internt">       <Internside/>            </Route>
            <Route path="/info">          <H1>Info</H1>               </Route>
            <Route path="/profil">        <H1>Profil</H1>             </Route>
            <Route path="/nyheter">       <NewsRouter/>               </Route>
            <Route path="/undergrupper/:committee"> <CommitteeDetailsPage/>     </Route>            
            <Route path="/undergrupper">            <CommitteePage/>            </Route>
            <Route path="/bokskap"> <Bokskap/> </Route>
            <Route path="/reservasjon"> <Reservasjon/> </Route>
          </Switch>
          <NavBarPhone/>
        </Router>
    );
  }
}

export default App;
