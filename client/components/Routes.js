import React from "react";
import { Route, Switch } from "react-router-dom";
import PLanding from "./PLanding";


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={PLanding} />
    </Switch>
  );
}