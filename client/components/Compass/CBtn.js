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
        <div className="d-flex justify-content-center compass-btn" style={this.props.style}>
          <a href={this.props.href} className="compass-btn-text" target={tg} style={this.props.styleTxt}>
            {this.props.icon} {this.props.txt}
          </a>
      </div>
    );
  }
}

export default CBtn;
