import React, { Component } from "react";
import "../../css/compass.css";
import CLogoAnimation from "./CLogoAnimation";

import CSponsorFooter from "./CSponsorFooter";
import CCountdown from "./CCountdown";
import CItineraryTable from "./CItineraryTable";

class CompassParticipantsHolderPage extends Component {
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
            <h3 className='compass-title'>Participants Dashboard</h3>
            

            <CCountdown date="2020-07-18T09:00:00-04:00"
              styleDays="countdown-txt" 
              styleNoDays="countdown-txt" 
              styleFinished="countdown-txt" 
              finishedTxt="Stream Live!"/>

            <h3 className='compass-title'>Game Plan</h3>
            <CItineraryTable/>
            <CSponsorFooter/>
          
          </div>
          
        </div>
      </div>
    );
  }
}

export default CompassParticipantsHolderPage;
