import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import CButton from "./CButton";
import CSpeaker from "./CSpeaker";
import CEmailForm from "./CEmailForm";

class PConferences extends Component {
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
      <div style={{ backgroundColor: "#E5E5E5" }}>
        <div style={{ height: "100vh" }}>
          <Row className="h-100 justify-content-center align-items-center">
            <div className="text-center">
              <h1>
                A new ideation <br /> challenge.
              </h1>
              <div className="row justify-content-center mt-5">
                <p className="col-md-5 col-10">
                  Circle conferences encompass its vision by allowing students
                  from multiple sectors to get together and solve global
                  challenges. Our ideation challenges are unlike another. Each
                  conference is different from the previous one.
                </p>
              </div>
            </div>
          </Row>
        </div>
        <Container>
          <h3 className="text-left p-0">Past events</h3>
          <hr style={{ borderColor: "#8C8C8C" }} />
        </Container>
        <Container style={{ marginTop: "70px" }}>
          <Row className="justify-content-between align-items-center">
            <div className="col-md-6 col-12">
              <h6
                className="text-left p-0"
                style={{ fontWeight: "500", textTransform: "uppercase" }}
              >
                July 18 - July 19, 2020
              </h6>
              <h3 className="text-left p-0 mt-3" style={{ fontWeight: "400" }}>
                Compass
              </h3>
              <p className="text-left p-0 mt-3">
                Students from 17 universities across North America came together
                virtually and created innovative solutions to the most pressing
                issues of the education system.
              </p>
              <CButton text="&#9658; Watch Opening Keynote" className="mt-5" />
              <CButton text="&#9658; Watch Closing Recap" className="mt-3" />
            </div>
            <div className="col"></div>
          </Row>
        </Container>
        <Container style={{ marginTop: "50px" }}>
          <Row className="justify-content-center">
            <img className="col-12" src="../assets/compass-mind.png" />
          </Row>
        </Container>
        <Container className="mt-1">
          <h3 className="text-left p-0">Speakers</h3>
          <Row className="justify-content-between mt-md-5">
            <CSpeaker
              name="Jonathan Javier"
              src="../assets/Compass/Cspeaker-jonathan.png"
              company="Wonsulting"
            />
            <CSpeaker
              name="Jerry Lee"
              src="../assets/Compass/Cspeaker-jerry.png"
              company="Wonsulting"
            />
            <CSpeaker
              name="Denys Linkov"
              src="../assets/Compass/Cspeaker-denys.png"
              company="RBC"
            />
            <CSpeaker
              name="Devin Golets"
              src="../assets/Compass/Cspeaker-devin.png"
              company="Top Hat"
            />
          </Row>
          <Row className="justify-content-between mt-md-5">
            <CSpeaker
              name="Dr. Prasa Gopee-Ramanan"
              src="../assets/Compass/Cspeaker-dr-prasa.png"
              company="University of Toronto"
            />
            <CSpeaker
              name="Gabriella Paniccia"
              src="../assets/Compass/Cspeaker-gabriella.png"
              company="Big 4 Accounting Firms"
            />
            <CSpeaker
              name="Stephanie Nuesi"
              src="../assets/Compass/Cspeaker-stephanie.png"
              company="Max Up"
            />
            <CSpeaker
              name="Dr. Nigmendra Narain"
              src="../assets/Compass/Cspeaker-dr-nigmendra.png"
              company="Western University"
            />
          </Row>
          <Row className="justify-content-between mt-md-5">
            <CSpeaker
              name="Dr. Laura Jana"
              src="../assets/Compass/Cspeaker-dr-laura-jana.png"
              company="Pediatrician"
            />
          </Row>
        </Container>
        <Container>
          <h3 className="text-left mt-5 p-0">Supporters</h3>
          <Row className="justify-content-md-around justify-content-center align-items-center pb-5">
            <div class="col-lg-3 col-11 mb-lg-0 mb-5">
              <a
                class="row justify-content-center mt-5"
                href="https://www.nextcanada.com/next-36/"
                target="_blank"
              >
                <img
                  src="../assets/compass/sponsors/next36.png"
                  class="compass-sponsor-img col-10"
                />
              </a>
            </div>
            <div class="col-lg-3 col-11 mb-lg-0 mb-5">
              <a
                class="row justify-content-center mt-5"
                href="https://www.1517fund.com"
                target="_blank"
              >
                <img
                  src="../../assets/compass/sponsors/1517.png"
                  class="compass-sponsor-img col-10"
                />
              </a>
            </div>
            <div class="col-lg-3 col-11 mb-lg-0 mb-5">
              <a
                class="row justify-content-center mt-5"
                href="https://mossify.ca"
                target="_blank"
              >
                <img
                  src="../../assets/compass/sponsors/mossify.png"
                  class="compass-sponsor-img col-10"
                />
              </a>
            </div>
          </Row>
        </Container>
        <div style={{ backgroundColor: "white", height: "70vh" }}>
          <Row className="h-100 justify-content-center align-items-center text-center">
            <div>
              <h4>Never miss a Circle event.</h4>
              <Row className="justify-content-center mt-5">
                <p className="col-7">
                  Get the latest updates from Circle right to your inbox.
                </p>
              </Row>
              <CEmailForm className="mt-4" colLg="10" />
              <p style={{ fontSize: "10px" }}>We respect your privacy.</p>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}

export default PConferences;
