import React from "react";
import { Route } from "react-router-dom";
import { NewsList } from "./NewsList";
import { NewsDetail } from "./NewsDetail";
import { NewsForm } from "./NewsForm"


const NewsRouter = () => {
  return (
      <Route>
        <Route exact path="/nyheter" component={NewsList}/>
        <Route exact path="/nyheter/ny" component={NewsForm}/>
        <Route exact path="/nyheter/info/:id" component={NewsDetail}/>
      </Route>
  )
};

export { NewsRouter };
