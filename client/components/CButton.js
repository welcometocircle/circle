import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

class CButton extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const styles = {
      buttonStyle: {
        fontSize: "18px",
        fontWeight: "300",
        textAlign: "center",
        textDecoration: "none",

        border: "none",

        padding: "7px 20px",
        display: "block",
        margin: "4px 2px",
        cursor: "pointer",
        borderRadius: "10px",
        backgroundColor: "rgba(191, 148, 118, 1)",
        color: "#fff",
      },
      buttonLinkStyle: {
        textDecoration: "none",
      },
    };
    return (
      <div className={this.props.className}>
        <a
          href={this.props.href}
          target="_blank"
          style={styles.buttonLinkStyle}
        >
          <button style={styles.buttonStyle}>{this.props.text}</button>
        </a>
      </div>
    );
  }
}

export default CButton;
