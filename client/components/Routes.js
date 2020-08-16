import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./PHome";


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  );
}