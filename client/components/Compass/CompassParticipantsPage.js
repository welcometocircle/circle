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
    this.state = {crisis1:false,crisis2:false};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    analytics.logEvent("Participants Did Mount");
    if (this.state.crisis1 == false) {
      setInterval(function () {
        console.log("interval c1")
        const c1 = new Date("2020-07-18T17:00:00-04:00")
        // console.log("FALSE")
        if (Date.now() > c1) {
          window.location.reload(true)
        }
      }, 5000);
      
      }
    if (this.state.crisis2 == false) {
      setInterval(function () {
        console.log("interval c2")
        const c2 = new Date("2020-07-18T21:00:00-04:00")
        // console.log("FALSE")
        if (Date.now() > c2) {
          window.location.reload(true)
        }
      }, 5000);
    }
  }
  

  render() {

    var c1Title = ""
    var c1Txt = ""
    var c2Title = ""
    var c2Txt = ""

    const c1Date = new Date("2020-07-18T17:00:00-04:00");
    if (Date.now() > c1Date) {
      c1Title = "Crisis 1"
      c1Txt = "The teachers have decided to strike! Recent government mandates have forced schools to increase the number of students in each class. As a result, this would decrease the number of teachers hired and impact students’ learning. Your solution should address an accommodation for this issue or a method of dissolving the strike."
      this.state.crisis1 = true;
    }else{
      c1Title = ""  
      c1Txt = ""
    }
    
    const c2Date = new Date("2020-07-18T21:00:00-04:00");
    if (Date.now() > c2Date) {
      c2Title = "Crisis 2"
      c2Txt = "Due to the increased political tension around the rights of Indiginous peoples, your initiative must be accessible to Indigenous reserves and improve the status of their current education system as well."
      this.state.crisis2 = true;
    }else{
      c2Title = ""  
      c2Txt = ""
    }



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
              <CYoutubeVid ytURL="https://youtube.com/embed/xz8WGnvQuX8" />
            </div>

            {/* your mission */}
            <img src="../../assets/gearhead.png" className="d-block mx-auto" style={{marginTop:"50px",width:"100px"}}/>
            <h3 className='compass-title'>Your Mission</h3>
            {/* <p className='compass-desc-big' style={{marginTop:"-10px"}}>Talk about Case themes. Mention that case is emailed to them or they can view it below</p> */}
            <CBtn href="https://drive.google.com/file/d/1KEHbzAP-OUlDhJwzdR3U4MabDlGb7DSH/view?usp=sharing" txt="View Case" newTab={true} style={{marginTop:"5px"}} analytics="Case Clicked"/>

            {/* Crisis 1 */}
            <h3 className='compass-crisis-title' style={{marginTop:"20px"}}>{c1Title}</h3>
            <p className='compass-crisis-desc-small'>{c1Txt}</p>

            {/* Crisis 2 */}
            <h3 className='compass-crisis-title' style={{marginTop:"40px"}}>{c2Title}</h3>
            <p className='compass-crisis-desc-small'>{c2Txt}</p>


            {/* solution submission */}
            <img src="../../assets/rocket.png" className="d-block mx-auto" style={{marginTop:"70px",width:"100px"}}/>
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
              <CBtn href="https://forms.gle/mMJBPtpmyswAq6Ga8" txt="Submit Solution" newTab={true} style={{marginTop:"15px"}} analytics="Submission Form"/>
            </div>

            {/* Help Desk */}
            <img src="../../assets/help.png" className="d-block mx-auto" style={{marginTop:"70px",width:"100px"}}/>
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
