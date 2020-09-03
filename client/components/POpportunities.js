import React, { Component } from "react";
import * as aniLinesData from '../assets/animations/LinesData.json';
import LottieAnimation from "./global/LottieAnimation";
import { useSpring, animated } from 'react-spring';
import {Container,Row} from 'react-bootstrap';
import COppTeam from './COppTeam.js';


class POpportunities extends Component {
  constructor(props) {
    super(props);
    document.documentElement.setAttribute("data-theme", "light");
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    // analytics.logEvent("Landing Did Mount");
  }

  componentWillUnmount() {}

  render() {
    return (
      <Container>
        <Row className="justify-content-center" style={{ marginTop: "20vh" }}>
          <h6>CURRENT OPPORTUNITIES</h6>
          <h1>Joining the dream team.</h1>
          {/* <h2>Joining the dream team.</h2>
          <h3>Joining the dream team.</h3>
          <h4>Joining the dream team.</h4>
          <h5>Joining the dream team.</h5> */}

          <p style={{ textAlign: "center" }}>
            Ideas come alive with collaboration.
            <br />
            We hire members on a rolling basis throughout the year within three
            divisions: Circle Events, Circle Design, and Circle Developer.
          </p>
        </Row>

        <Row className="justify-content-center">
          <COppTeam
            team="Developer"
            img="../assets/teamDev.png"
            btnList={[
              { title: "FRONT END DEVELOPER", link: "https://google.com" },
              { title: "BACK END DEVELOPER", link: "/" },
            ]}
          />
        </Row>
        <Row className="justify-content-center">
          <COppTeam
            team="Design"
            img="../assets/teamDesign.png"
            btnList={[
              { title: "DIGITAL DESIGN LEAD", link: "/" },
              // { title: "BACK END DEVELOPER", link: "/" },
            ]}
          />
        </Row>
        <Row className="justify-content-center">
          <COppTeam
            team="Events"
            img="../assets/teamEvent.png"
            btnList={[
              { title: "EVENT LEAD", link: "/" },
              { title: "SPONSORSHIP LEAD", link: "/" },
            ]}
          />
        </Row>
      </Container>
    );
  }
}

export default POpportunities;
