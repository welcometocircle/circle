import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

class CSpeaker extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const styles = {};
    return (
      <div className="col-md-3 col-12 mt-4 mt-md-0" style={this.props.style}>
        <div className="row justify-content-center">
          <img className="col-10" src={this.props.src} />
        </div>
        <h5
          className="mt-4 mb-0"
          style={{ fontSize: "18px", padding: "0", lineHeight: "inherit" }}
        >
          {this.props.name}
        </h5>
        <p
          style={{
            fontSize: "14px",
            padding: "0",
            margin: "0",
            textAlign: "Center",
            lineHeight: "inherit",
          }}
        >
          {this.props.company}
        </p>
      </div>
    );
  }
}

export default CSpeaker;
