import React, { Component } from "react";
import "../../css/compass.css";

class CSpeakerCoffee extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-lg-3 col-11 mb-lg-0 mb-5 compass-speaker">
        <div className="row justify-content-center mt-5">
          <img src={this.props.src} className="compass-speaker-img col-10" />
        </div>
        <h6 className="compass-h6 mt-5">{this.props.name}</h6>
        <p className="compass-desc mt-2">{this.props.title}</p>
        <p className="compass-desc mt-0">{this.props.company}</p>
        <div className="row justify-content-center compass-speaker-btn">
          <a
            href={this.props.href}
            className="compass-link mt-3"
            target="_blank"
          >
            <p className="compass-speaker-btn-text">{this.props.btntxt}</p>
          </a>
        </div>
        <div className="row justify-content-center compass-coffee-btn">
          <a
            href={this.props.chatLink}
            className="compass-link mt-3"
            target="_blank"
          >
            <p className="compass-speaker-btn-text">{this.props.btnCoffeeTxt}</p>
          </a>
        </div>
      </div>
    );
  }
}

export default CSpeakerCoffee;
