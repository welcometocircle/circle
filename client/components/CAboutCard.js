import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class CAboutCard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {}

  render() {
    const styles = {
      cardMain: {
        backgroundColor: "#1F1F1F",
        // height: '25vh',
        // width: '50vw',
        // marginLeft: 20,
        // marginRight: 20,
        padding: 20,
        // margin: 20,
        borderRadius: 50,
        margin: 20
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
          {/* <Row className="justify-content-around">
              <h4>{this.props.title}</h4>
            </Row>
            <Row>
              <p>{this.props.desc}</p>
            </Row> */}
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
