import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Home/HomePage";
import Opportunities from "./Opportunities";
import Faqs from "./Faqs";
import CompassPage from "./Compass/CompassPage";
import SponsPkg from "./SponsPkg"
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/opportunities" exact component={Opportunities} />
      <Route path="/faqs" exact component={Faqs} />
      <Route path="/compass" exact component={CompassPage} />
      <Route path="/sponspkg" exact component = {SponsPkg}/>
    </Switch>
  );
}