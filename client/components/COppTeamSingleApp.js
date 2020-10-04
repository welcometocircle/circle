import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobileOnly,
  isMobile,
} from "react-device-detect";

class COppTeamSingleApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {

		
		const styles = {
      sBg: {
        // backgroundColor: "black",
        // borderRadius: 25,
        // height: "30vh",
        // width: "70vw",
        // textAlign: "center",
        borderRadius: 20,
        marginTop: "5vh",
        backgroundImage: "url(" + this.props.img + ")",
        backgroundSize: "100% 100%",
        display: "inline-block",
        minHeight: 300,
        // paddingBottom:"5vh"
        // marginLeft:20px
        // margin
      },
      sTeam: {
        color: "white",
        // textAlign: "left",
        paddingLeft: isMobileOnly ? "0px" : "75px",
        paddingTop: "30px",
      },
      sButton: {
        backgroundColor: "white",
        // borderStyle: 'hidden',

        // textAlign: "left",
        letterSpacing: "0.1em",
        marginLeft: isMobileOnly ? "0px" : "75px",
        paddingLeft: "-15px !important",
        paddingRight: "-15px !important",
        // marginTop: "10px",
        // marginBottom:"10px"
      },
      posTxt: {
        color: "white",
        // fontSize: 14
        // backgroundColor: "white",
        letterSpacing: "0.03em",
        marginLeft:  isMobile ? isMobileOnly? '0px': "60px":"40px",
        // marginTop: "10px",
        // borderRadius: "50px",
        // display: "inline-block",
        // paddingLeft: 20,
        // paddingRight: 20,
        // paddingTop: 5,
        // paddingBottom: 5,
        // padding:"15, 10",
      },
      sHiring: {
        color: "white",
        // textAlign: "left",
        // paddingLeft: "10%",
        letterSpacing: "0.05em",
        // paddingTop: "5%",
      },
      hr: {
        color: "white",
        marginBottom: '20px'
      },
    };
    
    var justifications = 'justify-content-md-start justify-content-center'

    return (
      <Row style={this.props.style} className="justify-content-center">
        <Col md={8} xs={10} sm={10} style={styles.sBg}>
          <Row className={justifications}>
            <h4 style={styles.sTeam}>{this.props.team}</h4>
          </Row>

          <Row className="justify-content-center">
            <hr className="col-lg-10 col-xs-8 col-sm-8" style={styles.hr} />
          </Row>

          {this.props.posList.map((pos) => (
            <Row className={justifications}>
              <h6 style={styles.posTxt} key={pos.posTitle}>
                {pos.posTitle}
              </h6>
            </Row>
          ))}

          <Row
            style={{ marginBottom: "40px", marginTop: "30px" }}
            className={justifications}
          >
            <a
              href={this.props.applyLink}
              className="btnLight pull-left"
              style={styles.sButton}
              target="_blank"
            >
              <p style={{ color: "black" }}>Apply</p>
            </a>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default COppTeamSingleApp;
