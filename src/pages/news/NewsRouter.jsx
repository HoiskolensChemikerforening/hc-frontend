import React from "react";
import { Route } from "react-router-dom";
import { NewsList } from "./NewsList";
import { NewsDetail } from "./NewsDetail";
import { NewsForm } from "./NewsForm"


const NewsRouter = () => {
  return (
      <Route>
        <Route exact path="/" component={NewsList}/>
        <Route exact path="/ny" component={NewsForm}/>
        <Route exact path="/:id" component={NewsDetail}/>
      </Route>
  )
};

export { NewsRouter };
