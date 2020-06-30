import React, { Component } from "react";
import "../../css/compass.css";

class CSponsor extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-lg-3 col-11 mb-lg-0 mb-5">
        <a
          className="row justify-content-center mt-5"
          href={this.props.href}
          target="_blank"
        >
          <img src={this.props.src} className="compass-sponsor-img col-10" />
        </a>
      </div>
    );
  }
}

export default CSponsor;
