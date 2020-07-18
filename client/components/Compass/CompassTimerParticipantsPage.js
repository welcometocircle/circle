import React, { Component, createRef, useEffect } from "react";
import "../../css/compass.css";
import CompassEventHolderPage from "./CompassEventHolderPage";
import CompassEventPage from "./CompassEventPage";
import CompassParticipantsPage from "./CompassParticipantsPage";
import CompassParticipantsHolderPage from "./CompassParticipantsHolderPage";
class CompassTimerParticipantsPage extends Component {
  constructor(props) {
    super(props);
    document.documentElement.setAttribute("data-theme", "dark");
    this.state = {viewEventPage:false};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    analytics.logEvent("Participants Did Mount");
    if (this.state.viewEventPage == false) {
      setInterval(function(){
        // console.log("interval")
        const eventDate = new Date("2020-07-18T09:30:00-04:00")
          // console.log("FALSE")
          if (Date.now()>eventDate){
            window.location.reload(true)
          }
        },5000);
    }
  }

  render() {
    const eventDate = new Date("2020-07-18T09:30:00-04:00");
    // console.log(Date.now())
    // console.log(eventDate)
    // console.log(Date.now() > eventDate)
    if (Date.now() < eventDate){
      return(
        <CompassParticipantsHolderPage/>
      )
    }else{
      this.state.viewEventPage = true;
      return(
        <CompassParticipantsPage/>
      )
    }
  }
}

export default CompassTimerParticipantsPage;
