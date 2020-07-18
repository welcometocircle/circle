import React, { Component, createRef, useEffect } from "react";
import "../../css/compass.css";
import "../../css/Main.css"
import CBtn from "./CBtn";
import CYoutubeVid from "./CYoutubeVid";
import CLogoAnimation from "./CLogoAnimation";
import CPerk from "./CPerk";
import CSpeaker from "./CSpeaker";
import CSponsorFooter from "./CSponsorFooter"
import CCountdown from "./CCountdown";
import {FaGoogleDrive,FaQuestionCircle, FaEnvelope, FaFacebookMessenger} from 'react-icons/fa';
import CItineraryTable from "./CItineraryTable";


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
            <h3 className='compass-title'>Participants Dashboard</h3>
            



            {/* Game Plan*/}
            <h3 className='compass-title' style={{marginBottom:"-20px !important"}}>Game Plan</h3>
            <CItineraryTable/>

            <img src="../../assets/arrow-down.png" className="d-block mx-auto" style={{marginTop:"20px"}}/>

            {/* innovate */}
            <h3 className="compass-title" style={{marginTop:"30px",marginBottom:"-50px"}}>Ready? Set? Innovate!</h3>            
            <div className='row justify-content-center' style={{marginBottom:"5vh"}}>
              <CYoutubeVid ytURL="https://youtube.com/embed/LouLJqrOdc0" />
            </div>

            {/* your mission */}
            <img src="../../assets/gearhead.png" className="d-block mx-auto" style={{marginTop:"30px",width:"100px"}}/>
            <h3 className='compass-title'>Your Mission</h3>
            <p className='compass-desc-big' style={{marginTop:"-10px"}}>Talk about Case themes. Mention that case is emailed to them or they can view it below</p>
            <CBtn href="http://google.com" txt="View Case" newTab={true} style={{marginTop:"5px"}}/>

            {/* solution submission */}
            <img src="../../assets/rocket.png" className="d-block mx-auto" style={{marginTop:"50px",width:"100px"}}/>
            <h3 className='compass-title'>Solution Submission</h3>
            <p className='compass-desc-small' style={{marginTop:"-10px"}}>Submit your solution by July 19, 2020 8AM EST<br/>
              Make sure it meets the requirements specified in the case document and submission form
            </p>
            <CCountdown date="2020-07-19T08:00:00-04:00" 
              styleDays="compass-desc-big" 
              styleNoDays="compass-desc-big" 
              styleFinished="compass-desc-big" 
              finishedTxt="SUBMISSIONS CLOSED"
              divClassBol ={true}
              style={{marginTop:"-10px",marginBottom:"-10px"}}
            />
            <div >
              <CBtn href="https://forms.gle/mMJBPtpmyswAq6Ga8" txt="Submit Solution" newTab={true} style={{marginTop:"15px"}}/>
            </div>

            {/* Help Desk */}
            <img src="../../assets/help.png" className="d-block mx-auto" style={{marginTop:"30px",width:"100px"}}/>
            <h3 className='compass-title'>Have Questions?</h3>
            <p className='compass-desc-big' style={{marginTop:"-10px"}}>Feel free to join our zoom call, message us on messenger or email us for assistance at info@hellocircle.ca<br/>Help Desk will be closed from Sun July 19 00:00 to 06:00 EST<br/>Note: As we may not be able to assist all requests in time, Help Desk will close 30mins before submission</p>
            
            <CBtn href="https://utoronto.zoom.us/j/93159682205?pwd=VkR5MHE0UFkzOUgyQXNFSndsVTJvdz09" txt="Zoom Support" newTab={true} style={{marginTop:"5px"}} /> 
            <CBtn href="mailto:info@hellocircle.ca" txt="Email Support" newTab={true} style={{marginTop:"-10px"}}/>
            <CBtn href="http://m.me/welcometocircle" txt='Messenger Support' newTab={true} style={{marginTop:"-10px"}} /> {/* icon={<FaFacebookMessenger style={{verticalAlign: 'middle'}}/>}*/}
            <CSponsorFooter/>

          </div>

        </div>
      </div>
    );
  }
}

export default CompassParticipantsPage;
