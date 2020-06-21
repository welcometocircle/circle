import React, { Component } from "react";
import "../../css/compass.css";

class CBtn extends Component{
  constructor(props){
    super(props);
  }
  render() {
    var tg = "";
    if (this.props.newTab == true) {
      console.log(true)
      // this.setState({target: "_blank"})
      tg = "_blank"
    }
    
    return (
        <div className="d-flex justify-content-center compass-btn">
          <a href={this.props.href} className="compass-link" target={tg}>
            <p className="compass-btn-text">{this.props.txt}</p>
          </a>
      </div>
    );
  }
}

export default CBtn;
