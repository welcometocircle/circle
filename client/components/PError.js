import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

class PError extends Component {
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
      title: {
        paddingTop: "25vh",
      },
      btnHome: {
        backgroundColor: "black",
        borderRadius: 50,
        borderStyle: "hidden",

        color: "black",

        // fontSize: "2vw",
        textAlign: "left",
        // padding:"10px 20px",
        fontWeight: 500,
        letterSpacing: "0.1em",
        // marginLeft: "10%",
        marginTop: "10px",
        paddingLeft: 20,
        paddingRight:20,
        paddingTop: "13px",
        textDecoration: "none",
      },
      code: {
        color: "#bfbfbf",
      },
    };
    return (
      <Container>
        <div className="justify-content-center">
          <Row style={styles.title} className="justify-content-center">
            <h3>
              Whoops! <br /> Looks like your exploring unchartered territory!
            </h3>
          </Row>
          <hr />
          <h6 style={styles.code}>Error: 404</h6>
          <Row className="justify-content-center">
            <a href="/" style={styles.btnHome}>
              <p style={{ color: "white" }}>Go Home</p>
            </a>
          </Row>
        </div>
      </Container>
    );
  }
}

export default PError;
