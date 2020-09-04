import React, { Component } from "react";
import { Container, Row,Col } from "react-bootstrap";
import CProjectCard from "./CProjectCard";

class POpenCircle extends Component {
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
      header: {
        marginTop: "25vh",
        textAlign: "center",
      },
      headTxt: {
        marginRight: "10vw",
        marginLeft: "10vw",
        marginTop: 30,
      },
      BGRight: {
        position: "absolute",
        float: "right",
      },
      BG: {
        // backgroundImage: 'url("../assets/openBGRight.png")',
        backgroungPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "",

        // position: 'absolute',
      },
      HIW: {
        backgroundColor: "#1F1F1F",
        padding: 30,
        borderRadius: 40,
        marginTop:100,
        textAlign: 'left',
      },
      HIWTitle: {

      },
      AP: {
        marginTop:100
      },
    };
    return (
      <div style={styles.BG}>
        <Container style={styles.header}>
          <h6>PROJECT HUB</h6>
          <h1>Open Circle</h1>
          <p style={styles.headTxt}>
            This is your chance to collaborate with other like-minded
            individuals on projects that interest you. You bring the skills, we
            coordinate the process. Select from current available projects or
            submit an idea of your own.
          </p>
          {/* <Row className="justify-content-center" style={styles.header}> */}
          {/* </Row> */}
          <div style={styles.HIW}>
            <Row>
              <h5 style={styles.HIWTitle}>How it Works</h5>
            </Row>
            <Row>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum facilisis purus ac arcu malesuada, nec egestas dolor
                sollicitudin.Description of the project goes here. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Vestibulum
                facilisis purus ac arcu malesuada, nec egestas dolor
                sollicitudin.
              </p>
            </Row>
          </div>

          <div style={styles.AP} >
            <Row>
              <h4 className="pull-left">Available Projects</h4>
            </Row>
            {/* <Row> */}
              {/* <Col sm={6}> */}
              <CProjectCard
                headImg = '../assets/teamDesign.png'
                title="Project Title"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum facilisis purus ac arcu malesuada, nec egestas dolor
                sollicitudin.Description of the project goes here. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Vestibulum
                facilisis purus ac arcu malesuada, nec egestas dolor
                sollicitudin."
                sectors={["Busi", "Tech", "SSci", "Sci"]}
                elegibility={[
                  "Eligibility 1",
                  "Eligibility 2",
                  "Eligibility 3",
                  "Eligibility 4",
                ]}
              />
              {/* </Col> */}
              {/* <Col sm={6} > */}
              <CProjectCard
                headImg = '../assets/teamEvent.png'
                title="Project Title2"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum facilisis purus ac arcu malesuada, nec egestas dolor
                sollicitudin.Description of the project goes here. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Vestibulum
                facilisis purus ac arcu malesuada, nec egestas dolor
                sollicitudin."
                sectors={["Busi", "Tech", "SSci", "Sci"]}
                elegibility={[
                  "Eligibility 1",
                  "Eligibility 2",
                  "Eligibility 3",
                  "Eligibility 4",
                ]}
              />
              {/* </Col> */}
            {/* </Row> */}
          </div>
        </Container>
      </div>
    );
  }
}

export default POpenCircle;
