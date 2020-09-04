import React, { Component} from "react";
import aniDataSci from '../../assets/animations/sectorIcons/sci.json';
import aniDataSSci from "../../assets/animations/sectorIcons/ssci.json";
import aniDataBiz from "../../assets/animations/sectorIcons/biz.json";
import aniDataTech from "../../assets/animations/sectorIcons/tech.json";
import LottieAnimation from "./LottieAnimation";

class CSectorAnimation extends Component{
  render() {
    let sec = this.props.sector
    let secData;
    if (sec == "Biz") {
      secData = aniDataBiz
    }
    if (sec == "Tech") {
      secData = aniDataTech;
    }
    if (sec == "SSci") {
      secData = aniDataSSci;
    }
    if (sec == "Sci") {
      secData = aniDataSci;
    }
    return (
      <div className="" style={this.props.style} id={this.props.id}>
        <LottieAnimation
          style={this.props.styleAnimation}
          aniData={secData}
          height={this.props.height=== undefined? 100 : this.props.height}
          width={this.props.width=== undefined? 100 : this.props.width}
          renderer='svg'
        />
      </div>
    );
  }
}

export default CSectorAnimation;
