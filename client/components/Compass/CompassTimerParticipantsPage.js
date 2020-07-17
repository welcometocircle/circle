import React, { Component, createRef, useEffect } from "react";
import "../../css/compass.css";
import CompassEventHolderPage from "./CompassEventHolderPage";
import CompassEventPage from "./CompassEventPage";

class CompassTimerParticipantsPage extends Component {
  constructor(props) {
    super(props);
    document.documentElement.setAttribute("data-theme", "dark");
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    analytics.logEvent("Event Did Mount");
  }

  render() {
    const eventDate = new Date("2020-07-18T09:00:00-04:00");
    // console.log(Date.now())
    // console.log(eventDate)
    // console.log(Date.now() > eventDate)
    if (Date.now() < eventDate){
      return(
        <CompassEventHolderPage/>
      )
    }else{
      return(
        <CompassEventPage/>
      )
    }
  }
}

export default CompassTimerParticipantsPage;
