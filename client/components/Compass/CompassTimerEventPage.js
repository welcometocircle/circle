import React, { Component, createRef, useEffect } from "react";
import "../../css/compass.css";
import CompassEventHolderPage from "./CompassEventHolderPage";
import CompassEventPage from "./CompassEventPage";

class CompassTimerEventPage extends Component {
  constructor(props) {
    super(props);
    document.documentElement.setAttribute("data-theme", "dark");
    this.state = {viewEventPage:false};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    analytics.logEvent("Event Did Mount");
    console.log("MOUNT")
    
    if (this.state.viewEventPage == false) {
      setInterval(function(){
        console.log("interval")
        const eventDate = new Date("2020-07-18T09:00:00-04:00")
          console.log("FALSE")
          if (Date.now()>eventDate){
            window.location.reload(true)
          }
        },5000);
    }

  }



  render() {
    const eventDate = new Date("2020-07-18T09:00:00-04:00")
    // console.log(Date.now())
    // console.log(eventDate)
    // console.log(Date.now() > eventDate)
    if (Date.now() < eventDate){
      return(
        <CompassEventHolderPage/>
      )
    }else{
      this.state.viewEventPage=true;
      return(
        <CompassEventPage/>
      )
    }
  }
}

export default CompassTimerEventPage;
