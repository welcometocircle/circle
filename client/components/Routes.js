import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Opportunities from "./Opportunities";
import Faqs from "./Faqs";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/opportunities" exact component={Opportunities} />
      <Route path="/faqs" exact component={Faqs} />
    </Switch>
  );
}