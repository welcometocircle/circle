import React, { Component } from "react";
import "../css/App.css";
import "../css/Main.css";
import "../css/compass.css"
import MyNavbar from "./MyNavbar.js";
import GradientLogo from "./GradientLogo.js";
import Subjects from "./Subjects";
import Conference from "./Conference";
import ConferenceDetails from "./ConferenceDetails";
import Team from "./Team";
import Inquiries from "./Inquiries";
import Lottie from "react-lottie";
import * as aniCompassData from "../assets/animations/compass-rotating-logo/compass-logo-layered.json";
import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
  constructor(props) {
    super(props);
    document.documentElement.setAttribute("data-theme", "home");
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    analytics.logEvent("Home Did Mount");
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
        {/* <MyNavbar /> */}
        <div className="compass-home">
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
            <h3 className="compass-subheading">A conference for the future</h3>
            <a
              className="row justify-content-center compass-learn-more"
              href="/compass"
            >
              <p className="compass-date-text">Learn More</p>
            </a>
          </div>
        </div>

        <GradientLogo />
        <div className="innovation">
          {/* <h2 className="innovation-title">Innovation is just the beginning</h2> */}
          <p className="gen-text">
            Circle is a new-age innovation company dedicated to bringing
            opportunities for students and empowering them to become the leaders
            of tomorrow. With an interdisicplinary focus, we aspire for students
            of multiple sectors to come together and create for the future.
          </p>
        </div>
        <Subjects />
        {/* <Conference /> */}
        <ConferenceDetails />
        <Team />
        <div className="toronto">
          <h2 className="toronto-title">
            Made in the <img className="heart" src="../assets/heart.png"></img>{" "}
            of Toronto
          </h2>
          <img className="toronto-pic" src="../assets/toronto.png" />
        </div>
        <Inquiries />
      </div>
    );
  }
}

export default Home;
