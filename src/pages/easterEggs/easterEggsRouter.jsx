import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { EasterEggs } from "./easterEggs";
import { HundreSPM } from "./hundreSPM";

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

      </Switch>
      
    </Fragment>
  );
};

export { EasterEggsRouter };