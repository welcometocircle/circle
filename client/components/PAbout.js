import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CAboutCard from "./CAboutCard";

class PAbout extends Component {
  constructor(props) {
    super(props);
    document.documentElement.setAttribute("data-theme", "dark");
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
        <Row className="justify-content-center">
          <h1 style={styles.title}>About us</h1>
        </Row>
        <p style={{ textAlign: "center" }}>
          Description of the project goes here. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vestibulum facilisis purus ac arcu
          malesuada, nec egestas dolor sollicitudin.Description of the project
          goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum facilisis purus ac arcu malesuada, nec egestas dolor
          sollicitudin.
        </p>
        <Row className="justify-content-center" style={{ marginTop: 30}}>
          <Col sm={6} md={5}>
            <CAboutCard
              title="Vision"
              desc="Description of the project goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis purus ac arcu malesuada, nec egestas dolor sollicitudin."
            />
          </Col>
          <Col sm={6} md={5}>
            <CAboutCard
              title="Mission"
              desc="Description of the project goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis purus ac arcu malesuada, nec egestas dolor sollicitudin."
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PAbout;
