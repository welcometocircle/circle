import React, { Component } from "react";
import "../../css/compass.css";

class CSponsor extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //    var tg = "";
    //    if (this.props.newTab == true) {
    //      console.log(true)
    //     // this.setState({target: "_blank"})
    //      tg = "_blank"

    return (
      <div className="col-lg-3 col-11 mb-lg-0 mb-5 compass-sponsor">
        <div className="row justify-content-center mt-5">
          <img src={this.props.src} className="compass-sponsor-img col-8" />
        </div>
        <h5 className="compass-h5 mt-5">{this.props.name}</h5>
        <p className="compass-desc mt-2">{this.props.title}</p>
        <div className="row justify-content-center">
          <a
            href={this.props.href}
            className="compass-link mt-3"
            target="_blank"
          >
            <p className="compass-sponsor-btn-text">{this.props.btntxt}</p>
          </a>
        </div>
      </div>
    );
  }
}

export default CSponsor;
