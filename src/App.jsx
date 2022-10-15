import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { NavBar } from "./components/NavBar";
<<<<<<< HEAD
import { CommitteePage} from "./pages/undergrupper/Undergrupper";
=======
import { CommitteePage} from "./pages/subgroups/SubGroups";
>>>>>>> origin
import { H1 } from "./components/Text";
import { NavBarPhone } from "./components/NavBarPhone";
import { NewsRouter } from "./pages/news/NewsRouter";
import { NewsList } from "./pages/news/NewsList";
import { NewsDetail } from "./pages/news/NewsDetail";
import { NewsForm} from "./pages/news/NewsForm";
<<<<<<< HEAD
import { CommitteeDetailsPage } from "./pages/undergrupper/CommitteeDetailsPage";
import { Internside } from "./pages/internt/Internt";
import { Profil } from "./pages/profile/profile";
=======
import { CommitteeDetailsPage } from "./pages/subgroups/CommitteeDetailsPage";
>>>>>>> origin


class App extends React.Component {
  render() {
    return (
        <Router>
          <NavBar/>
          <Switch>
<<<<<<< HEAD
            <Route path="/" exact>        <HomePage/>                 </Route>
            <Route path="/arrangement">   <H1>BLOT OG SÅNN!!!</H1>    </Route>
            <Route path="/bedrift">       <H1>Bedrift</H1>            </Route>
            <Route path="/internt">       <Internside/>            </Route>
            <Route path="/info">          <H1>Info</H1>               </Route>
            <Route path="/profil">        <Profil/>             </Route>
            <Route path="/nyheter">       <NewsRouter/>               </Route>
            <Route path="/undergrupper/test">  <CommitteeDetailsPage/>            </Route>            
            <Route path="/undergrupper">  <CommitteePage/>            </Route>
=======
            <Route path="/" exact>                  <HomePage/>                 </Route>
            <Route path="/arrangement">             <H1>BLOT OG SÅNN!!!</H1>    </Route>
            <Route path="/bedrift">                 <H1>Bedrift</H1>            </Route>
            <Route path="/internt">                 <H1>Internt</H1>            </Route>
            <Route path="/info">                    <H1>Info</H1>               </Route>
            <Route path="/profil">                  <H1>Profil</H1>             </Route>
            <Route path="/nyheter">                 <NewsRouter/>               </Route>
            <Route path="/undergrupper/:committee"> <CommitteeDetailsPage/>     </Route>            
            <Route path="/undergrupper">            <CommitteePage/>            </Route>
>>>>>>> origin
          </Switch>
          <NavBarPhone/>
        </Router>
    );
  }
}

export default App;
