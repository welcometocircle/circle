import React from "react";
import { Route, Switch } from "react-router-dom";
import PLanding from "./PLanding";
import PTest from "./Test";


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={PLanding} />
      <Route path='/test' exact component={PTest}/>
    </Switch>
  );
}