import React, { Component } from "react";

const sNB = {
  backgroundColor: "white",
  // borderRadius: 25,
  height: "100%",
  textAlign: "center",
};

const sNBnav = {
  color: "black",
  fontWeight: 300,
  textAlign: "center",
  marginBottom: 15,
};

const descStyle = {
  color: "black",
  marginBottom: 30,
};

const imgStyle = {
  borderRadius: 50,
  height: "50%",
  marginBottom: 15,
};

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={sectorStyle}>
        <img style={imgStyle} src={this.props.img} />
        <h6 style={titleStyle}>{this.props.title}</h6>
        <p style={descStyle}>{this.props.desc}</p>
      </div>
    );
  }
}

export default NavBar;
