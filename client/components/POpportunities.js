import React, { Component } from "react";
import * as aniLinesData from '../assets/animations/LinesData.json';
import LottieAnimation from "./global/LottieAnimation";
import { useSpring, animated } from 'react-spring';
import {Container,Row, Col} from 'react-bootstrap';
import COppTeamSingleApp from "./COppTeamSingleApp.js";


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
          <Col md={10} lg={8}>
            <h6>CURRENT OPPORTUNITIES</h6>
            <h1>Joining the dream team.</h1>
            {/* <h2>Joining the dream team.</h2>
          <h3>Joining the dream team.</h3>
          <h4>Joining the dream team.</h4>
          <h5>Joining the dream team.</h5> */}

            <p style={{ textAlign: "center" }}>
              Ideas come alive with collaboration.
              <br />
              We hire members on a rolling basis throughout the year within
              three divisions: Circle Events, Circle Design, and Circle
              Developer.
            </p>
          </Col>
        </Row>
        <COppTeamSingleApp
          team="Design"
          img="../assets/teamDesign.png"
          posList={[{ posTitle: "DIGITAL DESIGN LEAD" }]}
          applyLink="https://joincircle.typeform.com/to/WfEVy0GA"
        />
        <COppTeamSingleApp
          team="Events"
          img="../assets/teamEvent.png"
          posList={[
            { posTitle: "EVENT LEAD" },
            { posTitle: "SPONSORSHIP LEAD" },
          ]}
          applyLink="https://joincircle.typeform.com/to/VmX9Pb3D"
        />
        <COppTeamSingleApp
          team="Developer"
          img="../assets/teamDev.png"
          posList={[
            { posTitle: "FRONT END DEVELOPER" },
            { posTitle: "BACK END DEVELOPER" },
          ]}
          applyLink="https://joincircle.typeform.com/to/THzIn5KJ"
        />
      </Container>
    );
  }
}

export default POpportunities;
