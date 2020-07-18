import React, { Component } from "react";
import "../../css/compass.css";
import CLogoAnimation from "./CLogoAnimation";

import CSponsorFooter from "./CSponsorFooter";
import CCountdown from "./CCountdown";

class CompassEventHolderPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div>
        <div>
          <div className="compass container">
            <CLogoAnimation />
            <h2 className="compass-landing-title">Welcome to Compass</h2>
          </div>
          
          <CCountdown date="2020-07-18T09:00:00-04:00" 
            styleDays="countdown-txt" 
            styleNoDays="countdown-txt" 
            styleFinished="countdown-txt" 
            finishedTxt="Happening Now!"
            />

          <CSponsorFooter/>
        </div>
      </div>
    );
  }
}

export default CompassEventHolderPage;
