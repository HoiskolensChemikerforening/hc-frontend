import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { NewsList } from "./NewsList";
import { NewsDetail } from "./NewsDetail";
import { NewsForm } from "./NewsForm";

const NewsRouter = () => {
  return (
    <Fragment>
      <Route exact path="/">
        <NewsList />
      </Route>
      <Route path="/ny">
        <NewsForm />
      </Route>
      <Route path="/:id">
        <NewsDetail />
      </Route>
    </Fragment>
  );
};

export { NewsRouter };
