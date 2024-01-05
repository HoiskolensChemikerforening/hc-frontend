import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { EasterEggs } from "./easterEggs";
import { HundreSPM } from "./hundreSPM";
import { SpinningTree } from "./spinningTree";
import { ComplimentMe } from "./complimentMe";
import { Magic8Ball } from "./magicEightBall";
import { VirtualSnowGlobe } from "./viritualSnowGlobe"

const EasterEggsRouter = () => {
  return (
    <Fragment>
      <Switch>

      <Route exact path="/easterEggs">
        <EasterEggs />
      </Route>
      <Route exact path="/easterEggs/100spm">
        <HundreSPM />
      </Route>
      <Route exact path="/easterEggs/spinningTree"> {/* Does not work properly:( */}
        <SpinningTree />
      </Route>
      <Route exact path="/easterEggs/kompliment">
        <ComplimentMe />
      </Route>
      <Route exact path="/easterEggs/magic8ball">
        <Magic8Ball />
      </Route>
      <Route exact path="/easterEggs/snowGlobe"> {/* Does not work properly:( */}
        <VirtualSnowGlobe />
      </Route>

      </Switch>
      
    </Fragment>
  );
};

export { EasterEggsRouter };