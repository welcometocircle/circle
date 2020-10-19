import React, { Component } from "react";
import { Controller, Scene } from "react-scrollmagic";
import * as aniLinesData from "../assets/animations/LinesData.json";
import LottieAnimation from "./global/LottieAnimation";
import { useTransition, useSpring, animated } from "react-spring";
import { Container, Row, Col } from "react-bootstrap";
import CSectorSection from "./CSectorSection.js";
import LandingPageAnimation from "./global/LandingPageAnimation.js";
import CSectors from "./CSectors.js";
import CExperienceSection from "./CExperienceSection.js";
import COpenCircle from "./COpenCircle.js";
import CToronto from "./CToronto.js";

class PLanding extends Component {
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth };
    document.documentElement.setAttribute("data-theme", "dark");
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    analytics.logEvent("Landing Did Mount");

    var aniDiv = document.getElementById("aniDivLanding");
    var aniDivText = document.getElementById("landingText");

    function transformAnimation(e) {
      var xPos = (e.clientX - aniDiv.offsetWidth / 2) / 30;
      var yPos = (e.clientY - aniDiv.offsetHeight / 2) / 30;
      var translate3dValue = "translate3d(" + xPos + "px," + yPos + "px,0)";
      aniDiv.style.transform = translate3dValue;
    }

    aniDivText.addEventListener("mousemove", transformAnimation, true);
    aniDiv.addEventListener("mousemove", transformAnimation, true);
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  handleResize(e) {
    console.log("resize");
    this.setState({ width: window.innerWidth });
  }

  componentWillUnmount() {}

  render() {
    var aniHeight;
    var aniWidth;
    var aniMargin;
    var txtMargin;
    var paraMargin;

    if (this.state.width < 576) {
      console.log("576");
      aniHeight = "55vh";
      aniWidth = "130vw";
      aniMargin = "-40vh";
      txtMargin = "12vh";
      paraMargin = "35vh";
    } else if (this.state.width < 1000) {
      console.log("768");
      aniHeight = "50vh";
      aniWidth = "130vw";
      aniMargin = "-40vh";
      txtMargin = "15vh";
      paraMargin = "30vh";
    } else if (this.state.width < 1100) {
      console.log("768");
      aniHeight = "50vh";
      aniWidth = "130vw";
      aniMargin = "-40vh";
      txtMargin = "10vh";
      paraMargin = "35vh";
    } else {
      console.log("large");
      aniHeight = "95vh";
      aniWidth = "130vw";
      aniMargin = "-20vh";
      txtMargin = "25vh";
      paraMargin = "55vh";
    }

    return (
      <div>
        {/* <Controller>
          <Scene duration={200} classToggle="zap" triggerElement="#trigger" indicators={true}>
            {(progress, event) => (
              <div className="test">Pin Test {event.type} {progress}</div>
            )}
          </Scene>
        </Controller> */}
        <Container>
          <div className="ryp-banner-div">
            <Row className="position-relative">
              <div className="col-md-5 col-7 position-absolute h-100 ryp-banner-text-div">
                <Row className="position-relative align-items-center h-100 ">
                  <div className="ml-5">
                    <h5 className="text-left" style={{ color: "black" }}>
                      Raise Your Pitch
                    </h5>
                    <h5
                      className="text-left"
                      style={{ fontWeight: "400", color: "black" }}
                    >
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
          </div>
          <Row
            className="justify-content-center"
            style={{ position: "relative", zIndex: 0, marginTop: "25vh" }}
          >
            <LandingPageAnimation
              height={aniHeight}
              width={aniWidth}
              id="aniDivLanding"
              style={{ position: "absolute", top: "-25vh" }}
            />
            <Col md={8}>
              <h1
                id="landingText"
                style={{ zIndex: 2, position: "relative", overflow: "hidden" }}
                className=""
              >
                Innovation is just the beginning.
              </h1>
            </Col>
            {/* <animated.h1 style={animation}>Innovation is just<br/> the beginning</animated.h1> */}
            <Col md={8}>
              <p
                style={{
                  zIndex: 2,
                  position: "relative",
                  overflowX: "hidden",
                  textAlign: "center",
                }}
              >
                Circle is a new-age innovation company dedicated to bringing
                opportunities for students and empowering them to become the
                leaders of tomorrow. With an interdisciplinary focus, we aspire
                for students of multiple sectors to come together and create for
                the future.
              </p>
            </Col>
            <Col md={8}>
              <hr style={{ marginTop: 35 }} />
            </Col>
          </Row>
        </Container>
        <Container>
          <div style={{ marginTop: 30 }}>
            <div className="justify-content-center">
              <p style={{ textAlign: "center" }}>SECTOR</p>
              <h2>All 4 One.</h2>
              <Row className="justify-content-center">
                <Col md="8">
                  <p style={{ textAlign: "center" }}>
                    Designed with core sectors in mind, Circle integrates
                    science, technology, business, and social science to bring
                    solutions to the issues we face today.
                  </p>
                </Col>
              </Row>
            </div>
            <Row className="justify-content-center" style={{ marginTop: 30 }}>
              <Col lg="6" md="6" sm="12">
                <span className="pull-right">
                  <CSectors
                    title="Business"
                    sector="Biz"
                    styleAnimation={{
                      transform: "scaleX(-1)",
                      marginLeft: -120,
                    }}
                    height="60px"
                  ></CSectors>
                </span>
              </Col>
              <Col lg="6" md="6" sm="12">
                <CSectors
                  title="Tech"
                  sector="Tech"
                  styleAnimation={{ marginLeft: -120 }}
                  height="60px"
                ></CSectors>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg="4" md="6" sm="12">
                <span className="pull-right">
                  <CSectors
                    title="Social Science"
                    sector="SSci"
                    styleAnimation={{ marginLeft: -130 }}
                    height="60px"
                  ></CSectors>
                </span>
              </Col>
              <Col lg="4" md="6" sm="12">
                <CSectors
                  title="Science"
                  sector="Sci"
                  styleAnimation={{ marginLeft: -130 }}
                  height="60px"
                ></CSectors>
              </Col>
            </Row>
          </div>
        </Container>
        {/* <CSectorSection /> */}
        <CExperienceSection />
        {/* <COpenCircle /> */}
        <CToronto />
      </div>
    );
  }
}

export default PLanding;
