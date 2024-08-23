import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { EasterEggs } from "./easterEggs";
import { HundreSPM } from "./hundreSPM";
import { ComplimentMe } from "./complimentMe";
import { Magic8Ball } from "./magicEightBall";

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
      <Route exact path="/easterEggs/kompliment">
        <ComplimentMe />
      </Route>
      <Route exact path="/easterEggs/magic8ball">
        <Magic8Ball />
      </Route>

      </Switch>
      
    </Fragment>
  );
};

export { EasterEggsRouter };