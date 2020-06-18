import React, { Component, createRef, useEffect } from "react";
import "../css/compass.css";
import Lottie from "react-lottie";
import * as aniCompassData from "../assets/animations/compass-rotating-logo/compass-logo-layered.json";

class Compass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStopped: false,
      isPaused: false,
    };
    document.documentElement.setAttribute("data-theme", "dark");
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    analytics.logEvent("Compass Did Mount");
  }

  render() {
    const aniCompass = {
      animationData: aniCompassData.default,
      loop: true,
      autoplay: true,
      renderer: "canvas",
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
        // progressiveLoad:true,
        // clearCanvas:true,
      },
    };
    return (
      <div>
        <div>
          <div className="compass container">
            <div className="row justify-content-center">
              <Lottie
                isClickToPauseDisabled
                options={aniCompass}
                height={200}
                width={200}
              />
            </div>
            <h2 className="compass-landing-title">Compass</h2>

            <div className="row justify-content-center compass-date">
              <p className="compass-date-text">July 18 | July 19</p>
            </div>

            <div className="row justify-content-center compass-date">
              <img src="../assets/arrow-down.png" />
            </div>
          </div>

          <div className="compass-conv">
            <h3 className="compass-title">Tag word. Tag Word.</h3>
            <div className="row justify-content-center">
              <img
                src="../assets/compass-innovation.png"
                className="col-12 col-lg-10"
              />
            </div>
            <h5 className="compass-h5">
              From the convenience of your home on July 18-19
            </h5>
            <p className="compass-desc">
              Description continues, this aint no hackatahon. <br /> aint no
              wtvr u think it is, its some goated stuff
            </p>
          </div>

          <div className="container compass-perk-grid">
            <div className="row justify-content-between">
              <div className="col-12 col-lg-4 col-md-4">
                <div className="row justify-content-center">
                  <img src="../assets/compass-speakers.png" className="col-9" />
                </div>
                <h4 className="compass-perk-title">Guest Speakers</h4>
                <p className="compass-desc">
                  Gain inspiration through the insight and journey of industry
                  experts
                </p>
              </div>
              <div className="col-12 col-lg-4 col-md-4">
                <div className="row justify-content-center">
                  <img src="../assets/compass-network.png" className="col-9" />
                </div>
                <h4 className="compass-perk-title">Network</h4>
                <p className="compass-desc">
                  Engage in conversations that diversify your perspective
                </p>
              </div>
            </div>
            <div className="row justify-content-between compass-perk-row">
              <div className="col-12 col-lg-4 col-md-4">
                <div className="row justify-content-center">
                  <img src="../assets/compass-panel.png" className="col-9" />
                </div>
                <h4 className="compass-perk-title">Panelist Sessions</h4>
                <p className="compass-desc">
                  Embrace your curiousity by taking the opportunity to ask
                  questions to a panel of speakers
                </p>
              </div>
              <div className="col-12 col-lg-4 col-md-4">
                <div className="row justify-content-center">
                  <img src="../assets/compass-problems.png" className="col-9" />
                </div>
                <h4 className="compass-perk-title">Problem Solving</h4>
                <p className="compass-desc">
                  Immerse yourself in an environment of fellow problem solvers
                  in their respective disciplines and collaborate to find an
                  applicable solution
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center compass-reg">
            <p className="compass-reg-text">Registration Opens June 22</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Compass;
