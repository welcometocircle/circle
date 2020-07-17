import React, { Component, createRef, useEffect } from "react";
import "../../css/compass.css";
import CBtn from "./CBtn";
import CYoutubeVid from "./CYoutubeVid";
import CLogoAnimation from "./CLogoAnimation";

import CSponsorFooter from "./CSponsorFooter";

class CompassEventPage extends Component {
  constructor(props) {
    super(props);
    document.documentElement.setAttribute("data-theme", "dark");
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    analytics.logEvent("Event Did Mount");
  }

  render() {
    return (
      <div>
        <div>
          <div className="compass container">
            <CLogoAnimation />
            <h2 className="compass-landing-title">Welcome to Compass EVENT PAGE</h2>
          </div>

          {/* <div className="compass container">
            <div className="row justify-content-center">
              <img src="../assets/arrow-down.png" />
            </div>
            <div className="row justify-content-center">
              <h3 className="compass-title">Ready, set, innovate.</h3>
            </div>
          </div> */}

          <CYoutubeVid ytURL="https://www.youtube.com/embed/L0dDUoPa1TQ" />

          <CSponsorFooter/>
        </div>
      </div>
    );
  }
}

export default CompassEventPage;
