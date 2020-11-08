import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import CButton from "./CButton";
import CSpeaker from "./CSpeaker";
import CEmailForm from "./CEmailForm";
import LottieAnimation from "./global/LottieAnimation";
import * as compassani from "../assets/animations/compass/compass-logo-layered.json";
import "../css/conferences.css";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobileOnly,
  isMobile,
} from "react-device-detect";

class PConferences extends Component {
  constructor(props) {
    super(props);
    document.documentElement.setAttribute("data-theme", "light");
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    analytics.logEvent("Conference Did Mount");
  }

  componentWillUnmount() {}

  render() {
    const styles = {
      mind: {
        maxWidth: isMobileOnly ? "100%" : "600px",
        maxHeight: isMobileOnly ? "100%" : "600px",
        marginBottom: 30,
        width: isMobileOnly ? "100%" : "600px",
        height: isMobileOnly ? "100%" : "600px",
      },
      title: {
        background: "linear-gradient(115deg, #FF2323 15%, #1D18FF 90%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    };
    return (
      <div /* style={{ backgroundColor: "#E5E5E5" }} */>
        <Container>
          {/* <div className="ryp-banner-div">
            <Row className="position-relative">
              <div className="col-md-5 col-7 position-absolute h-100 ryp-banner-text-div">
                <Row className="position-relative align-items-center h-100 ">
                  <div className="ml-5">
                    <h5 className="text-left">Raise Your Pitch</h5>
                    <h5 className="text-left" style={{ fontWeight: "400" }}>
                      November 4, 2020
                    </h5>
                    <a
                      href="/ryp"
                      className="btnDark mt-2"
                      style={{ marginLeft: "20px" }}
                    >
                      <p style={{ color: "white", textAlign: "center" }}>
                        Learn More
                      </p>
                    </a>
                  </div>
                </Row>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-8">
                <img className="h-100 w-100" src="../assets/rypbanner2.png" />
              </div>
            </Row>
          </div> */}
        </Container>
        <div style={{ height: "100vh" }}>
          <Row className="h-100 justify-content-center align-items-center">
            <div className="text-center">
              <h1 className="conferences-page-title">
                A new ideation <br /> challenge.
              </h1>
              <div className="row justify-content-center mt-5">
                <p className="col-md-6 col-10">
                  Our ideation challenge format offers opportunities for
                  students to create revolutionary ideas to challenges
                  throughout the year. Four challenges are offered on various
                  topics ultimately leading to a final Flagship Ideation
                  Conference. Winners of the four challenge events along with
                  other participants are invited for the Flagship Ideation
                  Conference. Participation in our four challenge events offers
                  many perks to students.
                </p>
              </div>
            </div>
          </Row>
        </div>
        {/* <Container>
          <Row className="justify-content-between">
            <div className="col-12 col-md sub-event-box sub-event-box-ryp mx-md-3">
              <p
                className="sub-event-subtitle mt-5 pt-1 ml-4 p-0"
                style={{ color: "white" }}
              >
                Challenge 1
              </p>
              <p
                className="sub-event-title ml-4 p-0"
                style={{ color: "white" }}
              >
                Raise your Pitch
              </p>
              <p className="sub-event-desc ml-4 p-0" style={{ color: "white" }}>
                November 4, 2020
              </p>
              <div className="ml-4 mb-5">
                <a href="/ryp" className="eventBtn ">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-12 col-md sub-event-box mx-md-3 mt-md-0 mt-4">
              <Row className="justify-content-between align-items-center h-100">
                <div className="col">
                  <p className="sub-event-subtitle text-center p-0 m-0">
                    Challenge 2
                  </p>
                  <p className="sub-event-desc text-center">Coming Soon</p>
                </div>
              </Row>
            </div>
            <div className="col-12 col-md sub-event-box mx-md-3 mt-md-0 mt-4">
              <Row className="justify-content-between align-items-center h-100">
                <div className="col">
                  <p className="sub-event-subtitle text-center p-0 m-0">
                    Challenge 3
                  </p>
                  <p className="sub-event-desc text-center">Coming Soon</p>
                </div>
              </Row>
            </div>
            <div className="col-12 col-md sub-event-box mx-md-3 mt-md-0 mt-4">
              <Row className="justify-content-between align-items-center h-100">
                <div className="col">
                  <p className="sub-event-subtitle text-center p-0 m-0">
                    Challenge 4
                  </p>
                  <p className="sub-event-desc text-center">Coming Soon</p>
                </div>
              </Row>
            </div>
          </Row>
          <Row className="justify-content-center mt-4 ">
            <div className="flagship-event-box col-md-6">
              <Row className="justify-content-center">
                <Row className="align-items-center">
                  <div className="">
                    <h4 className="text-left flagship-event-date">2021</h4>
                  </div>
                  <div className="my-5">
                    <h4 className="text-left flagship-event-title">
                      Flagship Ideation
                      <br />
                      Conference
                    </h4>
                  </div>
                </Row>
              </Row>
            </div>
          </Row>
          <Row className="margin-top-120">
            <div className="col-md-5">
              <div className="col-md-11 perk-title h-100">
                <h3 className="text-left p-0 " style={{ fontWeight: "600" }}>
                  Challenge
                  <br /> Perks
                </h3>
              </div>
            </div>
            <div className="col-md-7 mt-md-0 mt-5">
              <Row className="mb-5">
                <div className="col-2">
                  <div className="perk-number">
                    <h5 className="text-left p-0">1</h5>
                  </div>
                </div>
                <div className="col-10">
                  <h5 className="text-left p-0">Experience</h5>
                  <p className="text-left p-0">
                    Participate in engaging experiences to show off your skills,
                    enahnce them, and network with industry professionals.
                  </p>
                </div>
              </Row>
              <Row className="mb-5">
                <div className="col-2">
                  <div className="perk-number">
                    <h5 className="text-left p-0">2</h5>
                  </div>
                </div>
                <div className="col-10">
                  <h5 className="text-left p-0">Prizes</h5>
                  <p className="text-left p-0">
                    Win exclusive prizes at challenge events.
                  </p>
                </div>
              </Row>
              <Row className="mb-5">
                <div className="col-2">
                  <div className="perk-number">
                    <h5 className="text-left p-0">3</h5>
                  </div>
                </div>
                <div className="col-10">
                  <h5 className="text-left p-0">
                    Flagship Ideation
                    <br /> Conference Perks
                  </h5>
                  <p className="text-left p-0">
                    Participation in challenge events gains you special perks
                    from Circle for our flagship ideation conference.
                  </p>
                </div>
              </Row>
              <Row className="mb-5">
                <div className="col-2">
                  <div className="perk-number">
                    <h5 className="text-left p-0">4</h5>
                  </div>
                </div>
                <div className="col-10">
                  <h5 className="text-left p-0">Special Recognition</h5>
                  <p className="text-left p-0">
                    Who doesn’t love bragging rights? Be officially recognized
                    by Circle as a challenge participant and show it off at our
                    flagship ideation conference.
                  </p>
                </div>
              </Row>
            </div>
          </Row>
          <Row className="justify-content-center mt-5">
            <a href="/ryp" className="btnDark">
              <p style={{ color: "white", textAlign: "center" }}>Learn More</p>
            </a>
          </Row>
          <Row className="justify-content-center mt-5">
            <h3>FAQs</h3>
          </Row>
          <Row className="justify-content-between mt-5">
            <div className="col-md-6">
              <h6 className="text-left mb-3" style={{ color: "black" }}>
                Can I participate in the flagship event if I am not involved
                with the challenge events?
              </h6>
              <p classname="pl-0">
                Yes! Although we encourage you to participate in the challenge
                events (they’re lots of fun!), it is totally up to you whether
                you want to do so. You can still particiapte in the flagship
                event if you choose not to participate in the four challenge
                events.
              </p>
            </div>
            <div className="col-md-6">
              <h6 className="text-left mb-3" style={{ color: "black" }}>
                Do I have to participate in all four challenge events?
              </h6>
              <p>
                We want to provide an ideation experience that fits you
                therefore you can pick and choose which challenge events you
                would like to attend.
              </p>
            </div>
          </Row>
          <Row className="justify-content-between mt-4">
            <div className="col-md-6">
              <h6 className="text-left mb-3" style={{ color: "black" }}>
                Are the events free of cost?
              </h6>
              <p classname="pl-0">
                As a brand dedicated to promoting student engagement, we try to
                keep costs as low as we can however, in order to deliver the
                best experience, events may be paid.
              </p>
            </div>
            <div className="col-md-6">
              <h6 className="text-left mb-3" style={{ color: "black" }}>
                How can I participate?
              </h6>
              <p>
                You can find registration information directly on our website or
                on our social media pages. We will release event information
                closer to the date of the event.
              </p>
            </div>
          </Row>
        </Container> */}
        <Container className="margin-top-70">
          <h3 className="text-left p-0">Past events</h3>
          <hr style={{ borderColor: "#8C8C8C" }} />
        </Container>
        <Container style={{ marginTop: "70px" }}>
          <Row className="justify-content-between align-items-center">
            <div className="col-md-6 col-12">
              <h6
                className="text-left p-0"
                style={{
                  fontWeight: "500",
                  textTransform: "uppercase",
                }}
              >
                July 18 - July 19, 2020
              </h6>
              <h3 className="text-left p-0 mt-3" style={{ fontWeight: "400" }}>
                Compass
              </h3>
              <p className="text-left p-0 mt-3">
                Students from 17 universities across North America came together
                virtually and created innovative solutions to the most pressing
                issues of the education system.
              </p>
              <CButton
                text="&#9658; Watch Opening Keynote"
                className="mt-5"
                href="https://www.youtube.com/watch?v=2UBo1weNpew&t=135s"
              />
              <CButton
                text="&#9658; Watch Closing Recap"
                className="mt-3"
                href="https://www.youtube.com/watch?v=h9JJqhkZfTI&t=2s"
              />
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <div className="float-md-right">
                <LottieAnimation
                  aniData={compassani.default}
                  height={300}
                  width={300}
                  className="float-right"
                />
              </div>
            </div>
          </Row>
        </Container>
        <Container style={{ marginTop: "50px" }}>
          <Row className="justify-content-center">
            <img
              className="col-12"
              src="../assets/compass-mind.png"
              style={styles.mind}
            />
          </Row>
        </Container>
        <Container className="mt-1">
          <h3 className="text-left p-0">Speakers</h3>
          <Row className="justify-content-between mt-md-5">
            <CSpeaker
              name="Jonathan Javier"
              src="../assets/compass/Cspeaker-jonathan.png"
              company="Wonsulting"
            />
            <CSpeaker
              name="Jerry Lee"
              src="../assets/compass/Cspeaker-jerry.png"
              company="Wonsulting"
            />
            <CSpeaker
              name="Denys Linkov"
              src="../assets/compass/Cspeaker-denys.png"
              company="RBC"
            />
            <CSpeaker
              name="Devin Golets"
              src="../assets/compass/Cspeaker-devin.png"
              company="Top Hat"
            />
          </Row>
          <Row className="justify-content-between mt-md-5">
            <CSpeaker
              name="Dr. Prasa Gopee-Ramanan"
              src="../assets/compass/Cspeaker-dr-prasa.png"
              company="University of Toronto"
            />
            <CSpeaker
              name="Gabriella Paniccia"
              src="../assets/compass/Cspeaker-gabriella.png"
              company="Big 4 Accounting Firms"
            />
            <CSpeaker
              name="Stephanie Nuesi"
              src="../assets/compass/Cspeaker-stephanie.png"
              company="Max Up"
            />
            <CSpeaker
              name="Dr. Nigmendra Narain"
              src="../assets/compass/Cspeaker-dr-nigmendra.png"
              company="Western University"
            />
          </Row>
          <Row className="justify-content-between mt-md-5">
            <CSpeaker
              name="Dr. Laura Jana"
              src="../assets/compass/Cspeaker-dr-laura-jana.png"
              company="Pediatrician"
            />
          </Row>
        </Container>
        <Container>
          <h3 className="text-left mt-5 p-0">Supporters</h3>
          <Row className="justify-content-md-around justify-content-center align-items-center pb-5">
            <div class="col-lg-3 col-11 mb-lg-0 mb-5">
              <a
                class="row justify-content-center mt-5"
                href="https://www.nextcanada.com/next-36/"
                target="_blank"
              >
                <img
                  src="../assets/compass/sponsors/next36.png"
                  class="compass-sponsor-img col-10"
                  style={{
                    height: "50%",
                  }}
                />
              </a>
            </div>
            <div class="col-lg-3 col-11 mb-lg-0 mb-5">
              <a
                class="row justify-content-center mt-5"
                href="https://www.1517fund.com"
                target="_blank"
              >
                <img
                  src="../../assets/compass/sponsors/1517.png"
                  class="compass-sponsor-img col-10"
                  style={{
                    height: "50%",
                  }}
                />
              </a>
            </div>
            <div class="col-lg-3 col-11 mb-lg-0 mb-5">
              <a
                class="row justify-content-center mt-5"
                href="https://mossify.ca"
                target="_blank"
              >
                <img
                  src="../../assets/compass/sponsors/mossify.png"
                  class="compass-sponsor-img col-10"
                  style={{
                    height: "50%",
                  }}
                />
              </a>
            </div>
          </Row>
        </Container>
        {/* <div style={{ backgroundColor: "white", height: "70vh" }}>
          <Row className="h-100 justify-content-center align-items-center text-center">
            <div>
              <h4>Never miss a Circle event.</h4>
              <Row className="justify-content-center mt-5">
                <p className="col-7">
                  Get the latest updates from Circle right to your inbox.
                </p>
              </Row>
              <CEmailForm className="mt-4" colLg="10" />
              <p style={{ fontSize: "10px" }}>We respect your privacy.</p>
            </div>
          </Row>
        </div> */}
      </div>
    );
  }
}

export default PConferences;
