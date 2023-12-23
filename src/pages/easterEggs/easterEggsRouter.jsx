import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { EasterEggs } from "./easterEggs";

const easterEggsRouter = () => {
  return (
    <Fragment>
      <Switch>

      <Route exact path="/easterEggs">
        <EasterEggs />
      </Route>

      </Switch>
      
    </Fragment>
  );
};

export { easterEggsRouter };