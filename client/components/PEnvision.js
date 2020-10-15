import React, { Component } from "react";
import Radium from "radium";
import CExperiences from "./archive/OLD_CExperiences.js";
import { Container, Row, Col } from "react-bootstrap";
import CEmailForm from "./CEmailForm.js";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobileOnly,
  isMobile,
} from "react-device-detect";

const styles = {
  button: {
    backgroundColor: "black",
    borderRadius: 20,
    height: 20,
    width: 100,
    display: "inline-block",
    hover: {
      backgroundColor: "#fae1e1",
      textDecoration: "none",
    },
    link: {
      color: "black",
      textDecoration: "none",
      textAlign: "center",
    },
    active: {
      color: "black",
      textDecoration: "none",
    },
  },
  titleStyle: {
    marginTop: 80,
    marginLeft: 20,
    fontWeight: 300,
    textAlign: "left",
  },
  linkText: {
    font: 50,
    textAlign: "center",
  },
  emailForm: {
    fontSize: 90,
    lineHeight: 30,
    color: "green",
    paddingLeft: "2vw",
    paddingRight: "2vw",
  },
  title: {
    //background:
    //  "linear-gradient(45deg, #F23C79 20%, #42F5AE 40%, #223DAF 100%)",
    //WebkitBackgroundClip: "text",
    //WebkitTextFillColor: "transparent",
    color: "black",
    zIndex: "1000",
    fontSize: "70px",
  },
  img: {
    zIndex: "-1000",
  },
  compassSection: {
    backgroundColor: "#F5F5F5",
    borderRadius: 70,
    padding: isMobileOnly ? 25 : 75,
    marginTop: 105,
  },
};

class CExperienceSection extends Component {
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth };
    document.documentElement.setAttribute("data-theme", "dark");
  }

  render() {
    var compassHeight;
    var compassTopMargin;
    var compassBottomMargin;
    if (this.state.width < 576) {
      compassHeight = "150px";
      compassBottomMargin = "20px";
    } else if (this.state.width < 1100) {
      compassHeight = "150px";
    } else {
      compassHeight = "200px";
      compassTopMargin = "30px";
    }

    return (
      <div style={{ height: "80vh", color: "white" }}>
        <Container className="h-100 ">
          <Row className="h-100 align-items-center justify-content-center">
            <div className="text-center position-relative">
              <div className="position-absolute" style={styles.img}>
                <img src="../assets/siri.png" style={styles.img} />
              </div>
              <h2 style={styles.title} className="pt-4">
                Envision
              </h2>
              <div className="row justify-content-center mt-5">
                <p className="col-md-8 col-10 mt-5">
                  Circle conferences encompass its vision by allowing students
                  from multiple sectors to get together and solve global
                  challenges. Our ideation challenges are unlike another. Each
                  conference is different from the previous one.
                </p>
              </div>
              <a href="/about" className="btnDark mt-3">
                <p style={{ color: "white", textAlign: "center" }}>Register</p>
              </a>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CExperienceSection;
