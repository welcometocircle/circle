import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import "../css/ryp.css";

class Pryp extends Component {
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
      <div>
        <div className="ryp-jumbo">
          <div style={{ height: "80vh" }}>
            <Row className="h-100 justify-content-center align-items-center">
              <div className="text-center">
                <h1 className="">Raise Your Pitch</h1>
                <div className="row justify-content-center mt-5">
                  <p className="col-md-6 col-10">
                    Join us virtually on{" "}
                    <span className="ryp-bold">November 4</span> for the first
                    voice-only pitch challenge presented by Circle.
                  </p>
                </div>
                <a href="#" style={{ marginTop: 20 }} className="btnLight">
                  <p style={{ color: "black", textAlign: "center" }}>
                    Register Now
                  </p>
                </a>
              </div>
            </Row>
          </div>
        </div>
        <div className="ryp-info">
          <Container>
            <Row className="justify-content-between margin-top-120">
              <div className="col-md-6 mt-4">
                <h5 className="text-left mb-3 ryp-info-title">
                  The challenge.
                </h5>
                <h6 className="text-left ryp-info-desc">
                  A pitch ideation for innovative solutions regarding social
                  science/science causes in today’s world.
                </h6>
              </div>
              <div className="col-md-6 mt-4">
                <h5 className="text-left mb-3 ryp-info-title">
                  The time is ticking.
                </h5>
                <h6 className="text-left ryp-info-desc">Duration: 3 hours</h6>
              </div>
            </Row>
            <Row className="justify-content-between">
              <div className="col-md-6 mt-4">
                <h5 className="text-left mb-3 ryp-info-title">Eligability</h5>
                <h6 className="text-left ryp-info-desc">
                  Must be an undergraduate student within North America
                </h6>
              </div>
              <div className="col-md-6 mt-4">
                <h5 className="text-left mb-3 ryp-info-title">Prize</h5>
                <h6 className="text-left ryp-info-desc">
                  Put your money where your mouth is. Win{" "}
                  <span className="ryp-bold">$150</span> for your team.
                </h6>
              </div>
            </Row>
            <Row className="justify-content-between mt-4">
              <div className="col-md-6">
                <h5 className="text-left mb-3 ryp-info-title">
                  Participant fee
                </h5>
                <h6 className="text-left ryp-info-desc">$5</h6>
              </div>
              <div className="col-md-6"></div>
            </Row>
            <Row className="justify-content-between margin-top-70">
              <p className="ryp-sum text-center col-md-10">
                On November 4th, Circle will be hosting Raise Your Pitch, an
                Ideation Pitch Competition, which intersects Science and Social
                Science. In teams of 3-4 students, you will be presented with a
                topic and must prepare an innovative approach for or against the
                issue. There will be 4 rounds of evaluation, in which a judge
                will challenge and evalaute your solution in a live setting to
                determine if you suceed to the next round.{" "}
              </p>
            </Row>
            <Row
              className="justify-content-center margin-top-70"
              style={{ marginBottom: "120px" }}
            >
              <a href="#" className="btnLight">
                <p style={{ color: "black", textAlign: "center" }}>
                  Register Now
                </p>
              </a>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Pryp;
