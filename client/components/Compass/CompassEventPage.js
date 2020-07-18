import React, { Component, createRef, useEffect } from "react";
import "../../css/compass.css";
import CBtn from "./CBtn";
import CYoutubeVid from "./CYoutubeVid";
import CLogoAnimation from "./CLogoAnimation";
import CSpeaker from "./CSpeaker";
import CSpeakerMin from "./CSpeakerMin"

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
            <h2 className="compass-landing-title">Welcome to Compass</h2>
            {/* <p className="compass-title">Event Dashboard</p> */}

            {/* Opening */}
            <p className="compass-title" >Opening Ceremonies</p>
            <p className="compass-subheading">Keynote by Dr. Laura Jana</p>
            <CYoutubeVid ytURL="https://www.youtube.com/embed/LouLJqrOdc0" />
            
            
            <hr/>

            {/* Panel 1*/}
            
            <p className="compass-title" style={{marginTop:"30px"}} >Panel 1</p>
            <div className="row justify-content-md-around justify-content-center compass-sponsor-row" style={{marginTop:"-10px"}}>
              <CSpeakerMin
                  src="../../assets/compass/Cspeaker-denys.png"
                  name="Denys Linkov"
                  title="Cloud Engineer"
                  company="RBC"
                  btntxt="LinkedIn"
                  href="https://www.linkedin.com/in/denyslinkov"
                />
                <CSpeakerMin
                  src="../../assets/compass/Cspeaker-devin.png"
                  name="Devin Golets"
                  title="Higher Education Consultant"
                  company="Top Hat"
                  // btntxt="LinkedIn"
                  // href="https://www.linkedin.com/in/devingolets"
                />
            </div>
            <CYoutubeVid ytURL="https://www.youtube.com/embed/LouLJqrOdc0" style={{marginTop:"-30px"}}/>

            <hr/>

            {/* Workshop: Dr. Prasa Gopee-Ramanan */ }
            <p className="compass-title" style={{marginTop:"50px",marginBottom:"-10px"}} >Workshop</p>
            {/* <p className="compass-subheading">Dr. Prasa Gopee-Ramanan</p> */}
            <div className="row justify-content-md-around justify-content-center compass-sponsor-row" style={{marginTop:"-10px"}}>
              <CSpeakerMin
                src="../../assets/compass/Cspeaker-dr-prasa.png"
                name="Dr. Prasa Gopee-Ramanan"
                title="Diagnostic Radiologist"
                company="University of Toronto"
              />
            </div>
            <hr/>

          {/* Panel 2 */ }
            <p className="compass-title" style={{marginTop:"50px",marginBottom:"-10px"}} >Panel 2</p>
            {/* <p className="compass-subheading">Stephanie Nuesi, Dr. Nigmendra Narain, Gabriella Pannicia</p> */}
            <div className="row justify-content-md-around justify-content-center compass-sponsor-row" style={{marginTop:"-10px"}}>
              <CSpeakerMin
                src="../../assets/compass/Cspeaker-gabriella.png"
                name="Gabriella Paniccia"
                title="Consultant"
                company="Big 4 Accounting Firms"
              />
              <CSpeakerMin
                src="../../assets/compass/Cspeaker-stephanie.png"
                name="Stephanie Nuesi"
                title="Founder & CEO"
                company="Max Up"
              />
              <CSpeakerMin
                src="../../assets/compass/Cspeaker-dr-nigmendra.png"
                name="Dr. Nigmendra Narain"
                title="Political Science Lecturer"
                company="Western University"
              />
            </div>
            <CYoutubeVid ytURL="https://www.youtube.com/embed/LouLJqrOdc0"  style={{marginTop:"-30px"}}/>

            <hr/>


            {/* Workshop: Dr. Nigmendra Narain */ }
            <p className="compass-title" style={{marginTop:"50px",marginBottom:"-10px"}} >Workshop</p>
            {/* <p className="compass-subheading">Dr. Nigmendra Narain</p> */}
            <div className="row justify-content-md-around justify-content-center compass-sponsor-row" style={{marginTop:"-10px"}}>
              <CSpeakerMin
                src="../../assets/compass/Cspeaker-dr-nigmendra.png"
                name="Dr. Nigmendra Narain"
                title="Political Science Lecturer"
                company="Western University"
              />
            </div>
            <CYoutubeVid ytURL="https://www.youtube.com/embed/LouLJqrOdc0"  style={{marginTop:"-30px"}}/>

            <hr/>

            {/* Workshop: Dr. Nigmendra Narain */ }
            <p className="compass-title" style={{marginTop:"50px",marginBottom:"-10px"}} >Workshop</p>
            {/* <p className="compass-subheading">Dr. Prasa Gopee-Ramanan</p> */}
            <div className="row justify-content-md-around justify-content-center compass-sponsor-row" style={{marginTop:"-10px"}}>
              <CSpeakerMin
                src="../../assets/compass/Cspeaker-jonathan.png"
                name="Jonathan Javier"
                title="Founder & CEO"
                company="Wonsulting"
              />
              <CSpeakerMin
                src="../../assets/compass/Cspeaker-jerry.png"
                name="Jerry Lee"
                title="COO"
                company="Wonsulting"
              />
            </div>

            <hr/>

            {/* Workshop: Dr. Laura Jana */ }
            <p className="compass-title" style={{marginTop:"50px",marginBottom:"-10px"}} >Workshop</p>
            {/* <p className="compass-subheading">Dr. Nigmendra Narain</p> */}
            <div className="row justify-content-md-around justify-content-center compass-sponsor-row" style={{marginTop:"-10px"}}>
              <CSpeakerMin
                src="../../assets/compass/Cspeaker-dr-laura-jana.png"
                name="Dr. Laura Jana"
                title="Pediatrician"
              />
            </div>
            <CYoutubeVid ytURL="https://www.youtube.com/embed/LouLJqrOdc0"  style={{marginTop:"-30px"}}/>

            <img
                src="../assets/compass-innovation.png"
                className = "d-block mx-auto compass-img-innovation"
              />
            <CSponsorFooter/>

          </div>

          {/* <div className="compass container">
            <div className="row justify-content-center">
              <img src="../assets/arrow-down.png" />
            </div>
            <div className="row justify-content-center">
              <h3 className="compass-title">Ready, set, innovate.</h3>
            </div>
          </div> */}

          
        </div>
      </div>
    );
  }
}

export default CompassEventPage;
