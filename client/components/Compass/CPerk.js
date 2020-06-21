import React, { Component } from "react";
import "../../css/compass.css";

class CPerk extends Component{
  render() {
    return (
      <div className="col-12 col-lg-4 col-md-4">
        <div className="row justify-content-center">
          <img
            src={this.props.img}
            className="col-9 compass-img-perk"
          />
        </div>
        <h4 className="compass-perk-title">{this.props.title}</h4>
        <p className="compass-desc">
          {this.props.desc}
        </p>
      </div>
    );
  }
}

export default CPerk;
