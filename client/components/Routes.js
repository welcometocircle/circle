import React from "react";
import { Route, Switch } from "react-router-dom";
import PLanding from "./PLanding";
import PTest from "./Test";
import POpportunities from "./POpportunities";


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={PLanding} />
      <Route path='/test' exact component={PTest}/>
      <Route path='/opportunities' exact component={POpportunities}/>
    </Switch>
  );
}