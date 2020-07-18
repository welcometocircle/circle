import React, { Component } from "react";
import "../../css/compass.css";

class CSpeakerMin extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-lg-3 col-11 mb-lg-0 mb-5 compass-speaker" style={this.props.style}>
        <div className="row justify-content-center mt-5">
          <img src={this.props.src} className="compass-speaker-img col-10" />
        </div>
        <h6 className="compass-h6 mt-5">{this.props.name}</h6>
        <p className="compass-desc-small mt-2">{this.props.title}</p>
        <p className="compass-desc-small mt-0" style={{marginBottom:"20px"}}>{this.props.company}</p>

      </div>
    );
  }
}

export default CSpeakerMin;
