import React, { Component, createRef, useEffect } from "react";
import "../../css/compass.css";
import CBtn from "./CBtn"
import CYoutubeVid from "./CYoutubeVid"
import CLogoAnimation from "./CLogoAnimation";
import CPerk from "./CPerk";

class CompassPage extends Component {
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
          
            <CLogoAnimation/>

            <h2 className="compass-landing-title">Compass</h2>
            <h3 className="compass-subheading">
              A conference for the future <br /> July 18 - 19
            </h3>

            <CBtn txt="Register Now!" href="https://forms.gle/nXT8L5Q9ejrr1H259" newTab={true}/>

            <div className="row justify-content-center compass-date">
              <img src="../assets/arrow-down.png" />
            </div>
          </div>

          <CYoutubeVid ytURL="https://www.youtube.com/embed/L0dDUoPa1TQ"/>
          
          <div className="compass-conv">
            <h3 className="compass-title">A whole new direction</h3>
            <div className="row justify-content-center">
              <img
                src="../assets/compass-innovation.png"
                className="col-12 col-lg-7  compass-img-innovation"
              />
            </div>
            <h5 className="compass-h5">
              From the convenience of your home on July 18-19
            </h5>
            <div className="row justify-content-center">
              <p className="compass-desc col-11 col-lg-5">
                Circle's first ever 2-day digital conference, Compass aims to
                revolutionize education. Students will participate in teams to
                solve global challenges, interact with panelists, view keynotes,
                and more – all from the convenience of their home.
              </p>
            </div>
          </div>

          <div className="container compass-perk-grid">
            <div className="row justify-content-between compass-perk-row">
              <CPerk img="../assets/compass-speakers.png" title="Guest Speaker" desc="Gain inspiration through the insight and journey of industry experts"/>
              <CPerk img="../assets/compass-network.png" title="Network" desc="Engage in conversations that diversify your perspective"/>
            </div>
            <div className="row justify-content-between compass-perk-row">
              <CPerk img="../assets/compass-panel.png" title="Panelist Sessions" desc=" Embrace your curiousity by taking the opportunity to ask questions to a panel of speakers"/>
              <CPerk img="../assets/compass-problems.png" title="Problem Solving" desc=" Immerse yourself in an environment of fellow problem solvers in their respective disciplines and collaborate to find an applicable solution"/>
            </div>
          </div>
          
          <CBtn txt="Register Now!" href="https://forms.gle/nXT8L5Q9ejrr1H259" newTab={true} />

          <div className="row justify-content-center">
            <p className="compass-desc col-11 col-lg-5 mt-0">
              Whether you are a high school freshman or university grad, this
              conference is for you! No worries needed - all from the
              convenience of your home. Testing 123 - AKSHAR
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CompassPage;
