import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

class PContact extends Component {
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
    const styles = {};
    return (
    <Container>
      <Row className="justify-content-center">
        <h1>Contact Us</h1>
      </Row>
    </Container>
    )
  }
}

export default PContact;
