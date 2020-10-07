import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isMobileOnly,
  isTablet,
} from "react-device-detect";

class CAboutCard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {}

  render() {
    var gradient = this.props.title=='Vision'? "linear-gradient(180deg, rgba(255, 255, 255, 0.74) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(130.68deg, #C9E5FF -1.33%, #FDB0FF 47.28%, #FFBD81 107.34%)"
                    : "linear-gradient(180deg, rgba(255, 255, 255, 0.74) 0%, rgba(255, 255, 255, 0) 100%),linear-gradient(213.12deg, #C9E5FF -21.03%, #FDB0FF 35.48%, #FFBD81 105.29%)"
    const styles = {
      cardMain: {
        background: gradient,
        // backgroundColor: "#070707",
        // height: isMobile? isMobileOnly? 325 : 375: 425,
        // width: '50vw',
        // marginLeft: 20,
        // marginRight: 20,
        padding: 20,
        // margin: 20,
        borderRadius: 50,
        margin: 20,
      },
      cardTitle: {
        marginBottom: 30,
        padding: 20,
      },
      cardDesc: {
        padding: 20,
      },
    };
    return (
      <div style={{}}>
        <div style={styles.cardMain}>
            <Row>
              <h4 style={styles.cardTitle} className="pull-left">{this.props.title}</h4>
            </Row>
            <Row>
              <p style={styles.cardDesc}>{this.props.desc}</p>
            </Row>
        </div>
      </div>
    );
  }
}

export default CAboutCard;
