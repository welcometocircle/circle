import React, { Component, createRef, useEffect } from "react";
import "../../css/compass.css";
import CBtn from "./CBtn";
import CYoutubeVid from "./CYoutubeVid";
import CLogoAnimation from "./CLogoAnimation";
import CPerk from "./CPerk";
import CSpeaker from "./CSpeaker";
import CSponsorFooter from "./CSponsorFooter";

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
            <CLogoAnimation />

            <h2 className="compass-landing-title">Compass</h2>
            <h3 className="compass-subheading">
              A conference for the future <br /> July 18 - 19
            </h3>

            <div className="row justify-content-center">
              <img src="../assets/arrow-down.png" />
            </div>
          </div>

          <CYoutubeVid ytURL="https://www.youtube.com/embed/L0dDUoPa1TQ" />

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
              <CPerk
                img="../assets/compass-speakers.png"
                title="Guest Speaker"
                desc="Gain inspiration through the insight and journey of industry experts"
              />
              <CPerk
                img="../assets/compass-network.png"
                title="Network"
                desc="Engage in conversations that diversify your perspective"
              />
            </div>
            <div className="row justify-content-between compass-perk-row">
              <CPerk
                img="../assets/compass-panel.png"
                title="Panelist Sessions"
                desc=" Embrace your curiousity by taking the opportunity to ask questions to a panel of speakers"
              />
              <CPerk
                img="../assets/compass-problems.png"
                title="Problem Solving"
                desc=" Immerse yourself in an environment of fellow problem solvers in their respective disciplines and collaborate to find an applicable solution"
              />
            </div>
          </div>

          <div className="container mt-5">
            <h3 className="compass-title my-5">Speakers for days</h3>
            <div className="row justify-content-md-around justify-content-center compass-sponsor-row">
              <CSpeaker
                src="../../assets/compass/Cspeaker-jonathan.png"
                name="Jonathan Javier"
                title="Founder & CEO"
                company="Wonsulting"
                btntxt="LinkedIn"
                href="https://www.linkedin.com/in/jonathanmjavier"
              />
              <CSpeaker
                src="../../assets/compass/Cspeaker-jerry.png"
                name="Jerry Lee"
                title="COO"
                company="Wonsulting"
                btntxt="LinkedIn"
                href="https://www.linkedin.com/in/jehakjerrylee"
              />
              <CSpeaker
                src="../../assets/compass/Cspeaker-gabriella.png"
                name="Gabriella Paniccia"
                title="Consultant"
                company="Big 4 Accounting Firms"
                btntxt="LinkedIn"
                href="https://www.linkedin.com/in/gabriella-paniccia/"
              />
            </div>
            <div className="row justify-content-md-around justify-content-center my-lg-5 my-0">
              <CSpeaker
                src="../../assets/compass/Cspeaker-stephanie.png"
                name="Stephanie Nuesi"
                title="Founder & CEO"
                company="Max Up"
                btntxt="LinkedIn"
                href="https://www.linkedin.com/in/stephanienuesi"
              />
              <CSpeaker
                src="../../assets/compass/Cspeaker-denys.png"
                name="Denys Linkov"
                title="Cloud Engineer"
                company="RBC"
                btntxt="LinkedIn"
                href="https://www.linkedin.com/in/denyslinkov"
              />
              <CSpeaker
                src="../../assets/compass/Cspeaker-dr-prasa.png"
                name="Dr. Prasa Gopee-Ramanan"
                title="Diagnostic Radiologist"
                company="University of Toronto"
                btntxt="LinkedIn"
                href="https://www.linkedin.com/in/drpgr"
              />
            </div>
            <div className="row justify-content-md-around justify-content-center my-lg-5 my-0">
              <CSpeaker
                src="../../assets/compass/Cspeaker-dr-laura-jana.png"
                name="Dr. Laura Jana"
                title="Pediatrician"
                btntxt="LinkedIn"
                href="https://www.linkedin.com/in/drlaurajana"
              />
              <CSpeaker
                src="../../assets/compass/Cspeaker-devin.png"
                name="Devin Golets"
                title="Higher Education Consultant"
                company="Top Hat"
                btntxt="LinkedIn"
                href="https://www.linkedin.com/in/devingolets"
              />
              <CSpeaker
                src="../../assets/compass/Cspeaker-dr-nigmendra.png"
                name="Dr. Nigmendra Narain"
                title="Political Science Lecturer"
                company="Western University"
                btntxt="LinkedIn"
                href="https://www.linkedin.com/in/nigmendra-narain-a3194248"
              />
            </div>
          </div>

          <CSponsorFooter/>
        </div>
      </div>
    );
  }
}

export default CompassPage;
