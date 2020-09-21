import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav ,Container, Row, Col} from "react-bootstrap";
import {FaFacebook, FaInstagram, FaLinkedin,} from 'react-icons/fa';

class Footer extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {

  }

  render() {
    var darkPages = ['/open-circle','/about']
    const lightPages = ['/opportunities']
    const bgColor = darkPages.includes(this.props.location.pathname)
          ? "#131416"
          : "white"
    const styles = {
      footBig: {
        backgroundColor: bgColor,
        // opacity: 0.5
        // backgroundOpacity: "0",
        // backdropFilter: "blur(10px)",
        // filter: "blur(5px)",
        transition: "1s ease",
        // backdropFilter: "opacity(0.4)"
      },
      footRow: {
        marginTop: "6vh",
        marginBottom: "7vh",
      },
      navBrand: {
        color: darkPages.includes(this.props.location.pathname)
          ? "white"
          : "black",
        // color: "white",
        fontSize: 30,
        fontWeight: 700,
      },
      navLinks: {
        // color: "white",
        color: darkPages.includes(this.props.location.pathname)
          ? "white"
          : "black",
        fontSize: 15,
        // marginLeft: "10px",
        // marginRight: "10px",
        whiteSpace: "nowrap"
      },
      footDivider: {
        // backgroundImage:
        marginTop: 30,
        borderColor: darkPages.includes(this.props.location.pathname)
          ? "#333333"
          : "#e3e5e7",
      },
      sections: {
        // backgroundColor: bgColor,
        marginTop: "10px",
        // backdropFilter: "blur(10px)",
      },
      socialIcon: {
        height: 40,
        width: 40,
        marginLeft: 10,
        marginRight: 10,
        color:'black'
      },
    };
    console.log(this.props.location.pathname)
    
    return (
      // <Navbar backgroundColor={navBackground ? 'white' : 'transparent'}fixed='top' style={styles.navBig} expand="md" collapseOnSelect={true}>
      <div style={styles.footBig}>
        <Container style={styles.footBig}>
          <hr style={styles.footDivider} />
          <Row
            style={styles.footRow}
            className="align-items-center justify-content-center text-align-center"
          >
            <Col lg={4}>
              <div
                className="d-flex justify-content-lg-start justify-content-center"
                style={styles.sections}
              >
                <a className="navBrand" href="/" style={styles.navBrand}>
                  circle
                </a>
              </div>
            </Col>
            <Col lg={4}>
              <div
                className="d-flex justify-content-center"
                style={styles.sections}
              >
                <Nav.Link
                  href="/about"
                  className="navText"
                  style={styles.navLinks}
                >
                  About
                </Nav.Link>
                <Nav.Link href="/conferences" style={styles.navLinks}>
                  Conferences
                </Nav.Link>
                <Nav.Link href="/open-circle" style={styles.navLinks}>
                  Open Circle
                </Nav.Link>
                <Nav.Link href="/opportunities" style={styles.navLinks}>
                  Opportunties
                </Nav.Link>
                <Nav.Link href="/contact" style={styles.navLinks}>
                  Contact
                </Nav.Link>
              </div>
            </Col>
            <Col lg={4}>
              <div
                className="d-flex justify-content-lg-end justify-content-center"
                style={styles.sections}
              >
                <a href="https://facebook.com" target="_blank">
                  <FaFacebook style={styles.socialIcon} />
                </a>
                <a href="https://instagram.com" target="_blank">
                  <FaInstagram style={styles.socialIcon} />
                </a>
                <a href="https://linkedin.com" target="_blank">
                  <FaLinkedin style={styles.socialIcon} />
                </a>
                {/* <img src={"../assets/filler.png"} style={styles.socialIcon} /> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Footer);
