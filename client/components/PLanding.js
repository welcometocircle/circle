import React, { Component } from "react";
import * as aniLinesData from '../assets/animations/LinesData.json';
import LottieAnimation from "./global/LottieAnimation";
import CSectors from "./CSectors.js"
import CExperienceSection from './CExperienceSection.js'
import { useSpring, animated } from 'react-spring';
import { Container, Row, Col } from 'react-bootstrap';



class PLanding extends Component {
  constructor(props) {
    super(props)
    this.state = { width: window.innerWidth };
    document.documentElement.setAttribute("data-theme", "dark");
  }


  componentDidMount() {
    window.scrollTo(0, 0);
    analytics.logEvent("Landing Did Mount");

    var aniDiv = document.getElementById('aniDivLanding');
    var aniDivText = document.getElementById('landingText')

    function transformAnimation(e) {
      var xPos = (e.clientX - aniDiv.offsetWidth / 2) / 30
      var yPos = (e.clientY - aniDiv.offsetHeight / 2) / 30
      var translate3dValue = "translate3d(" + xPos + 'px,' + yPos + 'px,0)';
      aniDiv.style.transform = translate3dValue;
    }

    aniDivText.addEventListener("mousemove", transformAnimation, true);
    aniDiv.addEventListener("mousemove", transformAnimation, true);
    window.addEventListener("resize", this.handleResize.bind(this));
  }


  handleResize(e) {
    console.log('resize')
    this.setState({ width: window.innerWidth })
  };

  componentWillUnmount() {
  }


  render() {

    var aniHeight;
    var aniWidth;
    var aniMargin;
    var txtMargin;
    var paraMargin;

    if (this.state.width < 576) {
      console.log("576")
      aniHeight = "110vh"
      aniWidth = "130vw"
      aniMargin = "-40vh"
      txtMargin = "22vh"
      paraMargin = "62vh"
    } else if (this.state.width < 1100) {
      console.log('768')
      aniHeight = "110vh";
      aniWidth = "130vw";
      aniMargin = "-40vh";
      txtMargin = "20vh"
      paraMargin = "60vh"
    } else {
      console.log('large')
      aniHeight = "110vh"
      aniWidth = "130vw"
      aniMargin = "-20vh"
      txtMargin = "20vh"
      paraMargin = "60vh"
    }



    return (
      <div>
        <div>
          <Container>
            <Row className="justify-content-center" style={{ position: "relative", zIndex: 0 }}>
              <h1 id="landingText" style={{ zIndex: 2, position: "absolute", marginTop: txtMargin, overflow: 'hidden' }} className=''>Innovation is just<br /> the beginning.</h1>
              {/* <animated.h1 style={animation}>Innovation is just<br/> the beginning</animated.h1> */}

              <LottieAnimation aniData={aniLinesData} id="aniDivLanding" height={aniHeight} width={aniWidth} style={{ zIndex: 1, position: "relative", marginTop: aniMargin }} />
              <p style={{ zIndex: 2, position: "absolute", marginTop: paraMargin, overflowX: 'hidden', textAlign: "center" }} >Circle is a new-age innovation company dedicated to bringing opportunities for students and empowering them to become the leaders of tomorrow. With an interdisicplinary focus, we aspire for students of multiple sectors to come together and create for the future.</p>


            </Row>
            <hr />
          </Container>


          <div style={{ marginTop: 30 }}>
            <div className="justify-content-center">
              <p style={{ textAlign: 'center' }}>SECTOR</p>
              <h1>All 4 One.</h1>
              <p style={{ textAlign: 'center' }}>Designed with core sectors in mind, Circle integrates science, technology, business, and social science to bring solutions to the issues we face today.</p>
            </div>
            <Row className="justify-content-center" style={{ marginTop: 30 }}>
              <Col lg="3">
                <CSectors img="https://hellocircle.ca/assets/business.png" title="Business"></CSectors>
              </Col>
              <Col lg="3">
                <CSectors img="https://hellocircle.ca/assets/tech.png" title="Technology"></CSectors>
              </Col>
            </Row>
            <Row className="justify-content-center" style={{ marginTop: 30 }}>
              <Col lg="3"> 
                <CSectors img="https://hellocircle.ca/assets/socialsci.png" title="Social Science"></CSectors>
              </Col>
              <Col lg="3">
                <CSectors img="https://hellocircle.ca/assets/science.png" title="Science"></CSectors>
              </Col>
            </Row>
          </div>
        </div>
        <CExperienceSection/>
      </div>

    );
  }
}

export default PLanding;
