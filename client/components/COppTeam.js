import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";


class COppTeam extends Component {
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
        textAlign: "left",
        paddingLeft: "10%",
        paddingTop: "5%",
      },
      sButton: {
        backgroundColor: "white",
				// borderStyle: 'hidden',

        // textAlign: "left",
				letterSpacing: '0.1em',
				marginLeft: "10%",
				marginTop: "10px",
				// marginBottom:"10px"
      }
		};

    return (
      <Row style={this.props.style} className="justify-content-center">
        <Col md={8} xs={10} sm={10} style={styles.sBg}>
          <h4 style={styles.sTeam}>{this.props.team}</h4>
          <div style={{ marginBottom: "40px" }}>
            {this.props.btnList.map((btn) => (
              <Row>
                <a
                  href={btn.link}
                  style={styles.sButton}
                  key={btn.title}
                  target="_blank"
                  className="btnLight pull-left"
                >
                  <p style={{ color: "black" }}>{btn.title}</p>
                </a>
              </Row>
            ))}
          </div>
        </Col>
      </Row>
    );
  }
}

export default COppTeam;
