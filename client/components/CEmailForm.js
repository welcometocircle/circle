import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

const styles = {
  sectorStyle: {
    backgroundColor: "#1F2022",
    borderRadius: 25,
    height: 300,
    width: 300,
  },
  titleStyle: {
    marginTop: 140,
    // marginLeft: 20,
    fontWeight: 300,
    textAlign: "left",
  },
};

class CEmailForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.colLg === undefined) {
      var colLg = "4";
    } else {
      var colLg = this.props.colLg;
    }
    return (
      <div style={this.props.style} className={this.props.className}>
        <Row className="justify-content-center">
          <Col lg={colLg}>
            <div
              class="input-group mb-3"
              style={{
                border: "solid 2px #F4F4F4",
                borderRadius: 20,
                height: 75,
                padding: 5,
                paddingRight: 15,
                paddingLeft: 15,
                backgroundColor: "#F4F4F4",
              }}
            >
              <input
                type="text"
                class="form-control emailForm"
                style={{
                  border: 0,
                  boxShadow: "none",
                  backgroundColor: "#F4F4F4",
                  margin: "auto",
                  fontSize: 20,
                }}
                placeholder="Email Address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary"
                  style={{
                    height: 45,
                    borderRadius: 10,
                    margin: "auto",
                    marginLeft: 2,
                    backgroundColor: "#373737",
                    color: "white",
                    fontSize: 20,
                  }}
                  type="button"
                >
                  Submit
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CEmailForm;
