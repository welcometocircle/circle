import React from "react";
import { Route, Switch } from "react-router-dom";
import PLanding from "./PLanding.js";
import PTest from "./Test.js";
import POpportunities from "./POpportunities.js";
import PAbout from "./PAbout.js";
import POpenCircle from './POpenCircle.js';
import PError from './PError.js';
import PConferences from './PConferences.js';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={PLanding} />
      <Route path='/test' exact component={PTest}/>
      <Route path='/opportunities' exact component={POpportunities}/>
      <Route path='/about' exact component={PAbout}/>
      <Route path='/open-circle' exact component={POpenCircle}/>
      <Route path='/conferences' exact component={PConferences}/>
      <Route component={PError}/>
    </Switch>
  );
}