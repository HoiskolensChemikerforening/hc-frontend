import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { NewsList } from "./NewsList";
import { NewsDetail } from "./NewsDetail";
import { NewsForm } from "./NewsForm";

const NewsRouter = () => {
  return (
    <Fragment>
      <Switch>

      <Route exact path="/nyheter/ny">
          <NewsForm />
      </Route>
      <Route exact path="/">
        <NewsList />
      </Route>
      <Route path="/:id">
          <NewsDetail />
      </Route>
      </Switch>
      
    </Fragment>
  );
};

export { NewsRouter };
