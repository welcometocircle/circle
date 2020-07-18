import React, { Component } from "react";
import "../../css/App.css";
import "../../css/Main.css";
import "../../css/compass.css"
import GradientLogo from "./GradientLogo.js";
import Subjects from "./Subjects";
import Conference from "./Conference";
import ConferenceDetails from "./ConferenceDetails";
import Team from "./Team";
import Inquiries from "./Inquiries";
import "bootstrap/dist/css/bootstrap.css";
import CLogoAnimation from "../Compass/CLogoAnimation";
import CBtn from "../Compass/CBtn";
import CCountdown from "../Compass/CCountdown";

class HomePage extends Component {
  constructor(props) {
    super(props);
    document.documentElement.setAttribute("data-theme", "home");
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    analytics.logEvent("Home Did Mount");
  }
  render() {

    return (
      <div>
        <div className="compass-home">
          <div className="compass container">
            <CLogoAnimation/>

            <h2 className="compass-landing-title">Compass</h2>
            <h3 className="compass-subheading">A conference for the future</h3>
            <CCountdown date="2020-07-18T08:45:00-04:00"
            styleDays="countdown-txt" 
            styleNoDays="countdown-txt" 
            styleFinished="countdown-txt" 
            finishedTxt="Happening Now!"/>
            <div style={{marginTop: "-15px", marginBottom: "20px"}} className="d-flex justify-content-center">
              <CBtn txt="Learn More" href="/compass"/>
            </div>
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

export default HomePage;
