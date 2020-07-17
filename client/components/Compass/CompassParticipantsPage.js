import React, { Component, createRef, useEffect } from "react";
import "../../css/compass.css";
import "../../css/Main.css"
import CBtn from "./CBtn";
import CYoutubeVid from "./CYoutubeVid";
import CLogoAnimation from "./CLogoAnimation";
import CPerk from "./CPerk";
import CSpeaker from "./CSpeaker";
import CSponsorFooter from "./CSponsorFooter"

class CompassParticipantsPage extends Component {
  constructor(props) {
    super(props);
    document.documentElement.setAttribute("data-theme", "dark");
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    analytics.logEvent("Compass Did Mount");
  }

  render() {
    return (
      <div>
        <div>
          <div className="compass container">
            <CLogoAnimation />
            <h2 className="compass-landing-title">Welcome to Compass</h2>
            <h3 className="compass-title">Ready, set, innovate.</h3>
            

            <div className='row justify-content-center' style={{marginBottom:"5vh"}}>
              <CYoutubeVid ytURL="https://www.youtube.com/embed/L0dDUoPa1TQ" />
            </div>

            {/* <div className="row justify-content-center">
              <img src="../../assets/arrow-down.png"/>
            </div> */}

            <img src="../../assets/arrow-down.png" className="d-block mx-auto"/>

            {/* <div className="row justify-content-center" style={{marginTop:"5vh"}}> */}
              <img src="../../assets/gearhead.png" className="d-block mx-auto" style={{marginTop:"50px"}}/>
            {/* </div> */}
            <h3 className='compass-title'>Your Mission</h3>



            {/* <div className="compass container">
              <div className="row justify-content-center">
                <img src="../assets/arrow-down.png" />
              </div>
              <div className="row justify-content-center">
                <h3 className="compass-title">Ready, set, innovate.</h3>
              </div>
            </div> */}


            <CSponsorFooter/>

          </div>

        </div>
      </div>
    );
  }
}

export default CompassParticipantsPage;
