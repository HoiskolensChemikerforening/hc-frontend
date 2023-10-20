import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import {EventPage} from "./events";
import {CreateSocialEvent} from "./createSocialEvent";


export const EventRouter = () => {
    return (
      <Fragment>
        <Switch>
        <Route exact path="/arrangement/sosialt/opprett">
            <CreateSocialEvent />
        </Route>
        <Route exact path="/arrangement">
          <EventPage/>
        </Route>
        </Switch>
        
      </Fragment>
    );
  };