import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Radium from 'radium'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isMobileOnly,
  isTablet
} from "react-device-detect";

const styles = {
    openSquare: {
        backgroundColor: '#181818',
        borderRadius: 40,
        height: isMobile? 200: 300,
        width: '100%',
        marginBottom: 20,
        objectFit:'cover'
    },
    title: {
        background: 'linear-gradient(45deg, #CF10FF, #0DD3EE)',
        webkitBackgroundClip: 'text',
        webkitTextFillColor: 'transparent',
        marginTop:25
    },
    spacer: {
      marginTop: isMobileOnly? 0: 150,
    }
}


class COpenCircle extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
          <div style={{ marginTop: 75 }}>
            <Container>
              <p style={{ textAlign: "center" }}>INTRODUCING</p>
              <h2 style={styles.title}>Open Circle</h2>
              <h5 style={{ color: "white", fontWeight: 500, marginTop: 25 }}>
                An innovative project hub.
              </h5>
              <Row className="justify-content-center">
                <Col md="8" style={{ marginTop: 35 }}>
                  <p style={{ textAlign: "center" }}>
                    We believe that ideas should be curated with collaboration.
                    With Open Circle, we are bringing you an opportunity to
                    collaborate with people of different skillsets on a project
                    you are passionate about. Choose from current projects
                    available or submit your own idea to propel it forward!
                  </p>
                </Col>
              </Row>

              <Row className="justify-content-center">
                <Col lg="6" style={{ marginTop: 20 }} className="d-flex">
                  <a
                    href="/open-circle"
                    className="btnLight"
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                  >
                    <p style={{ color: "#1B1B1B", textAlign: "center" }}>
                      EXPLORE OPEN CIRCLE
                    </p>
                  </a>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row style={{marginTop: isMobileOnly? 50:-25, marginBottom: 150}}>
                <Col md="4">
                  <img src="../assets/teamEvent.png" style={styles.openSquare}/>
                  <img src="../assets/teamDev.png" style={styles.openSquare}/>
                </Col>
                <Col md="4" style={styles.spacer}>
                  <img src="../assets/teamDev.png" style={styles.openSquare}/>
                  <img src="../assets/teamDesign.png" style={styles.openSquare}/>
                </Col>
                <Col md="4">
                  <img src="../assets/teamDesign.png" style={styles.openSquare}/>
                  <img src="../assets/teamEvent.png" style={styles.openSquare}/>
                </Col>
              </Row>
            </Container>
          </div>
        );
    }
}

export default Radium(COpenCircle);