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
        <Container>
          <Row className="justify-content-between">
            <div className="col sub-event-box mx-3">
              <p className="sub-event-subtitle mt-5 pt-1 ml-4 p-0">
                Challenge 1
              </p>
              <p className="sub-event-title ml-4 p-0">Raise your Pitch</p>
              <p className="sub-event-desc ml-4 p-0">November 25, 2020</p>
              <div className="ml-4 mb-5">
                <a href="/raiseyourpitch" className="eventBtn ">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col sub-event-box mx-3">
              <Row className="justify-content-between align-items-center h-100">
                <div className="col">
                  <p className="sub-event-subtitle text-center p-0 m-0">
                    Challenge 2
                  </p>
                  <p className="sub-event-desc text-center">Coming Soon</p>
                </div>
              </Row>
            </div>
            <div className="col sub-event-box mx-3">
              <Row className="justify-content-between align-items-center h-100">
                <div className="col">
                  <p className="sub-event-subtitle text-center p-0 m-0">
                    Challenge 3
                  </p>
                  <p className="sub-event-desc text-center">Coming Soon</p>
                </div>
              </Row>
            </div>
            <div className="col sub-event-box mx-3">
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
          <Row>
            <div className="col-md-4">
              <h4 className="text-left p-0">
                Challenge
                <br /> Perks
              </h4>
            </div>
            <div className="col-md-8">
              <h5 className="text-left p-0">Experience</h5>
            </div>
          </Row>
        </Container>
        <Container>
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
