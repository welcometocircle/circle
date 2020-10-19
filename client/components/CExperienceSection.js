import React, { Component } from "react";
import Radium from "radium";
import CExperiences from "./archive/OLD_CExperiences.js";
import { Container, Row, Col } from "react-bootstrap";
import CEmailForm from "./CEmailForm.js";
import "../css/conferences.css";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobileOnly,
  isMobile,
} from "react-device-detect";

const styles = {
  button: {
    backgroundColor: "black",
    borderRadius: 20,
    height: 20,
    width: 100,
    display: "inline-block",
    hover: {
      backgroundColor: "#fae1e1",
      textDecoration: "none",
    },
    link: {
      color: "black",
      textDecoration: "none",
      textAlign: "center",
    },
    active: {
      color: "black",
      textDecoration: "none",
    },
  },
  titleStyle: {
    marginTop: 80,
    marginLeft: 20,
    fontWeight: 300,
    textAlign: "left",
  },
  linkText: {
    font: 50,
    textAlign: "center",
  },
  emailForm: {
    fontSize: 90,
    lineHeight: 30,
    color: "green",
    paddingLeft: "2vw",
    paddingRight: "2vw",
  },
  title: {
    background:
      "linear-gradient(98.06deg, #A4C8FF 1.01%, #D781FF 44.66%, rgba(255, 109, 77, 0.82) 91.52%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    // color:'black'
  },
  compassSection: {
    backgroundColor: "#F5F5F5",
    borderRadius: 70,
    padding: isMobileOnly ? 25 : 75,
    marginTop: 105,
  },
};

class CExperienceSection extends Component {
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth };
  }

  render() {
    var compassHeight;
    var compassTopMargin;
    var compassBottomMargin;
    if (this.state.width < 576) {
      compassHeight = "150px";
      compassBottomMargin = "20px";
    } else if (this.state.width < 1100) {
      compassHeight = "150px";
    } else {
      compassHeight = "200px";
      compassTopMargin = "30px";
    }

    return (
      <div style={{ backgroundColor: "white", marginTop: 100 }}>
        <Container>
          <Row style={{ marginTop: 150 }} className="justify-content-center">
            <Col lg="10">
              <h2 style={styles.title}>
                Experiences, projects, ideas like never before.
              </h2>
            </Col>
          </Row>
          <Row
            className="justify-content-center text-center"
            style={{ marginTop: 75 }}
          >
            <Col lg={8}>
              <p style={{ color: "#747474" }}>
                We believe in an interdisciplinary future where problems are
                solved via multiple perspectives. Ideation challenges,
                conferences, accelerators, innovation hubs, are just some of the
                great things we are working on. We hope to promote innovative
                solutions and turn ideas into reality to make a meaningful
                impact in the world.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center" style={{ marginTop: 75 }}>
            <a
              href="/about"
              style={{ marginLeft: "4%", marginTop: 20 }}
              className="btnDark"
            >
              <p style={{ color: "white", textAlign: "center" }}>About Us</p>
            </a>
          </Row>
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
                    Conference. Participation in our four challenge events
                    offers many perks to students.
                  </p>
                </div>
              </div>
            </Row>
          </div>
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
                November 25, 2020
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
                <h3
                  className="text-left p-0 "
                  style={{ fontWeight: "600", color: "black" }}
                >
                  Challenge
                  <br /> Perks
                </h3>
              </div>
            </div>
            <div className="col-md-7 mt-md-0 mt-5">
              <Row className="mb-5">
                <div className="col-2">
                  <div className="perk-number">
                    <h5 className="text-left p-0" style={{ color: "black" }}>
                      1
                    </h5>
                  </div>
                </div>
                <div className="col-10">
                  <h5 className="text-left p-0" style={{ color: "black" }}>
                    Experience
                  </h5>
                  <p className="text-left p-0">
                    Participate in engaging experiences to show off your skills,
                    enahnce them, and network with industry professionals.
                  </p>
                </div>
              </Row>
              <Row className="mb-5">
                <div className="col-2">
                  <div className="perk-number">
                    <h5 className="text-left p-0" style={{ color: "black" }}>
                      2
                    </h5>
                  </div>
                </div>
                <div className="col-10">
                  <h5 className="text-left p-0" style={{ color: "black" }}>
                    Prizes
                  </h5>
                  <p className="text-left p-0">
                    Win exclusive prizes at challenge events.
                  </p>
                </div>
              </Row>
              <Row className="mb-5">
                <div className="col-2">
                  <div className="perk-number">
                    <h5 className="text-left p-0" style={{ color: "black" }}>
                      3
                    </h5>
                  </div>
                </div>
                <div className="col-10">
                  <h5 className="text-left p-0" style={{ color: "black" }}>
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
                    <h5 className="text-left p-0" style={{ color: "black" }}>
                      4
                    </h5>
                  </div>
                </div>
                <div className="col-10">
                  <h5 className="text-left p-0" style={{ color: "black" }}>
                    Special Recognition
                  </h5>
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
          <Row
            className="justify-content-center align-items-center"
            style={styles.compassSection}
          >
            <Col md="4" sm="12">
              <img
                src="../assets/compass.png"
                style={{
                  height: compassHeight,
                  margin: "auto",
                  marginTop: compassTopMargin,
                  marginBottom: compassBottomMargin,
                  display: "block",
                }}
              />
            </Col>
            <Col md="8" className="text-md-left text-center">
              <p style={{ color: "#969696", letterSpacing: "0.05em" }}>
                JULY 18 - JULY 19, 2020
              </p>
              <h3
                style={{
                  color: "black",
                  textAlign: isMobileOnly ? "center" : "left",
                  marginTop: 35,
                }}
              >
                Compass
              </h3>
              <p style={{ color: "#969696", marginTop: 35 }}>
                Students from 17 universities across North America came together
                virtually and created innovative solutions to the most pressing
                issues of the education system.
              </p>
              <a
                href="/conferences"
                style={{ marginLeft: "4%", marginTop: 20 }}
                className="btnDark"
              >
                <p style={{ color: "white", textAlign: "center" }}>
                  Learn More
                </p>
              </a>
            </Col>
          </Row>
          {/* 
          <h5 style={{ color: "black", marginTop: 100, marginBottom: 20 }}>
            Never miss a Circle event
          </h5>
          <p style={{ textAlign: "center", marginBottom: 20 }}>
            Get the latest updates from Circle
            <br /> right to your inbox.
          </p> */}
          {/* <CEmailForm /> */}
          {/* <p
            style={{ textAlign: "center", fontSize: "10px", marginBottom: 75 }}
          >
            We respect your privacy.
          </p> */}
        </Container>
      </div>
    );
  }
}

export default CExperienceSection;
