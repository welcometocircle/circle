import React from "react";
import { Route, Switch } from "react-router-dom";
import PLanding from "./PLanding.js";
import PTest from "./Test.js";
import POpportunities from "./POpportunities.js";
import PAbout from "./PAbout.js";
import POpenCircle from "./POpenCircle.js";
import PError from "./PError.js";
import PConferences from "./PConferences.js";
import PContact from "./PContact.js";
import PEnvision from "./PEnvision";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={PLanding} />
      <Route path="/test" exact component={PTest} />
      <Route path="/opportunities" exact component={POpportunities} />
      <Route path="/about" exact component={PAbout} />
      <Route path="/open-circle" exact component={POpenCircle} />
      <Route path="/conferences" exact component={PConferences} />
      <Route path="/contact" exact component={PContact} />
      <Route path="/envision" exact component={PEnvision} />

      <Route component={PError} />
    </Switch>
  );
}
