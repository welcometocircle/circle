import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CAboutCard from "./CAboutCard";

class PAbout extends Component {
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
    const styles = {
      title:{
        marginTop: '25vh',
      }
    };
    return (
      <Container>
        {/* <Row className="justify-content-center">
          <Col sm={10} md={8}>
            <h1 style={styles.title}>About us</h1>
            <p style={{ textAlign: "center" }}>
              Description of the project goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vestibulum facilisis purus ac arcu
              malesuada, nec egestas dolor sollicitudin.Description of the
              project goes here. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Vestibulum facilisis purus ac arcu malesuada, nec
              egestas dolor sollicitudin.
            </p>
          </Col>
        </Row> */}

        <Row className="justify-content-center" style={{ marginTop: "20vh" }}>
          <Col md={10} lg={8}>
            <h6>ABOUT US</h6>
            <img src={'../assets/circleGradient.png'} class="rounded mx-auto d-block" style={{width: '50%', marginTop:75}}/>

            <p style={{ textAlign: "center", marginTop: 75}}>
              Circle is a startup that is focused on promoting student
              innovation to create solutions to problems we face in society. We
              aim to do this through ideation challenges, conferences,
              accelerator opportunities, and more, while pursuing an
              interdisciplinary approach.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center" style={{ marginTop: 75, marginBottom: 30 }}>
          <Col sm={6} md={5}>
            <CAboutCard
              title="Vision"
              desc="Innovation is at the heart of Circle. Our vision is to promote creative thinking to create a meaningful impact in the world. Furthermore, we would like to inspire students and help them to become the leaders of tomorrow."
            />
          </Col>
          <Col sm={6} md={5}>
            <CAboutCard
              title="Mission"
              desc="We are on a mission to solving global problems through collaboration between science, technology, business, and social science. This multi-perspective approach will allow for innovative ideas, solutions, and more."
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PAbout;
