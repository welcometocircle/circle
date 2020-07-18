import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Home/HomePage";
import Opportunities from "./Opportunities";
import Faqs from "./Faqs";
import CompassTimerEventPage from "./Compass/CompassTimerEventPage";
import CompassTimerParticipantsPage from "./Compass/CompassTimerParticipantsPage";
import RedirectSponsPkg from "./Redirects/RedirectSponsPkg";
import RedirectRegister from "./Redirects/RedirectRegister";
import CoffeeChatPage from "./Compass/CoffeeChatPage";
import CompassEventPage from "./Compass/CompassEventPage";
import CompassParticipantsPage from "./Compass/CompassParticipantsPage";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/opportunities" exact component={Opportunities} />
      <Route path="/faqs" exact component={Faqs} />
      <Route path="/compass" exact component={CompassTimerEventPage} />
      <Route path="/compass-participants" exact component={CompassTimerParticipantsPage}/>
      <Route path="/compass-event-not-live" exact component={CompassEventPage} />
      <Route path="/compass-participants-not-live" exact component={CompassParticipantsPage}/>
      <Route path="/compass-coffee-chats" exact component={CoffeeChatPage} />
      <Route path="/sponspkg" exact component = {RedirectSponsPkg}/>
      <Route path="/register" exact component = {RedirectRegister}/>
    </Switch>
  );
}