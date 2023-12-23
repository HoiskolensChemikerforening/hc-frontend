import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { easterEggs } from "./easterEggs";

const easterEggsRouter = () => {
  return (
    <Fragment>
      <Switch>

      <Route exact path="/easterEggs">
          <easterEggs />
      </Route>
      </Switch>
      
    </Fragment>
  );
};

export { easterEggsRouter };
