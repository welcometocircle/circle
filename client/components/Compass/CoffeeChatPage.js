import React, { Component, createRef, useEffect } from "react";
import "../../css/compass.css";
import CBtn from "./CBtn";
import CYoutubeVid from "./CYoutubeVid";
import CLogoAnimation from "./CLogoAnimation";
import CPerk from "./CPerk";
import CSpeaker from "./CSpeaker";
import CSponsor from "./CSponsor";
import CSpeakerCoffee from "./CSpeakerCoffee";

class CoffeeChatPage extends Component {
  constructor(props) {
    super(props);
    document.documentElement.setAttribute("data-theme", "dark");
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    analytics.logEvent("Coffee Chat Did Mount");
  }

  render() {
    return (
      <div>
        <div className="coffee-cup">
          <div className="container">
            <h3 className="compass-title">Have a cup of coffee with the industry's finest</h3>
            <p className="compass-desc">Signup is only for registered Compass participants</p>
          </div>


          <div className="container mt-5">
            <div className="row justify-content-md-around justify-content-center compass-sponsor-row">
              <CSpeakerCoffee
                src="../../assets/compass/Cspeaker-gabriella.png"
                name="Gabriella Paniccia"
                title="Consultant"
                company="Big 4 Accounting Firms"
                btntxt="LinkedIn"
                href="https://www.linkedin.com/in/gabriella-paniccia/"
                btnCoffeeTxt = "Chat Signup"
                chatLink = "https://www.google.com"
              />
              <CSpeakerCoffee
                src="../../assets/compass/Cspeaker-stephanie.png"
                name="Stephanie Nuesi"
                title="Founder & CEO"
                company="Max Up"
                btntxt="LinkedIn"
                href="https://www.linkedin.com/in/stephanienuesi"
                btnCoffeeTxt = "Chat Signup"
                chatLink = "https://www.google.com"
              />
            </div>
            <div className="row justify-content-center coffee-icon">
              <img src="../../assets/coffee-icon.png" className="justify-content-center"/>
            </div>
            <div className="row justify-content-md-around justify-content-center my-lg-5 my-0">
              <CSpeakerCoffee
                src="../../assets/compass/Cspeaker-denys.png"
                name="Denys Linkov"
                title="Cloud Engineer"
                company="RBC"
                btntxt="LinkedIn"
                href="https://www.linkedin.com/in/denyslinkov"
                btnCoffeeTxt = "Chat Signup"
                chatLink = "https://www.google.com"
              />
              <CSpeakerCoffee
                src="../../assets/compass/Cspeaker-dr-prasa.png"
                name="Dr. Prasa Gopee-Ramanan"
                title="Diagnostic Radiologist"
                company="University of Toronto"
                btntxt="LinkedIn"
                href="https://www.linkedin.com/in/drpgr"
                btnCoffeeTxt = "Chat Signup"
                chatLink = "https://www.google.com"
              />
            </div>
          </div>

          <div className="container mt-5">
            <h3 className="compass-title my-5">We ❤️ our supporters</h3>
            <div className="row justify-content-md-around justify-content-center align-items-center compass-sponsor-row">
              <CSponsor
                src="../../assets/compass/sponsors/next36.png"
                href="https://www.nextcanada.com/next-36/"
              />
              <CSponsor
                src="../../assets/compass/sponsors/1517.png"
                href="https://www.1517fund.com"
              />
              <CSponsor
                src="../../assets/compass/sponsors/mossify.png"
                href="https://mossify.ca"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoffeeChatPage;
