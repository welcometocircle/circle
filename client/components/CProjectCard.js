import React, { Component } from "react";
import { Container, Row, Col, Card, Collapse } from "react-bootstrap";

class CProjectCard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {}

  render() {
    const styles = {
      card: {
        backgroundColor: "#1F2022",
        padding: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 40,
        overflow: "hidden",
      },
      headImg: {
        borderRadius: 30,
      },
      header: {},
      title: {
        textAlign: "left",
      },
      btnMore: {
        background: "none",
        border: "none",
        // backgroundColor: "#C9C9C9",
        // borderRadius: 50,
        // textAlign: 'right'
      },
      btnImgMore: {
        width: "50%",
        height: "50%",
      },
    };
    return (
      <div style={this.props.style}>
        <Col sm={6}>
        <Card style={styles.card}>
          <Card.Img src={this.props.headImg} style={styles.headImg} />
          <Card.Title>
            <Row>
              <h5 style={styles.title}>{this.props.title}</h5>
              <button style={styles.btnMore}>
                {/* <h5>+</h5> */}
                <img
                  style={styles.btnImgMore}
                  src="../assets/openCardsMore.png"
                  className="float-right"
                  data-target="#"
                />
              </button>
            </Row>
          </Card.Title>
          <Collapse>
            <Card.Body>
              <p>{this.props.desc}</p>
            </Card.Body>
          </Collapse>
        </Card>
        </Col>
      </div>
    );
  }
}

export default CProjectCard;
