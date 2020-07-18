import React, { Component } from "react";
import "../../css/compass.css";
import '../../css/Main.css';
import Countdown from 'react-countdown';


class CCountdown extends Component {
  constructor(props) {
    super(props);
  }
  render() {


    const Finished = ()=>(
      <span className={this.props.styleFinished}>{this.props.finishedTxt}</span>
    );

    const renderer = ({total, days,hours, minutes, seconds})=>{
      // console.log(total);
      // console.log(days);
      // console.log(hours);
      // console.log(minutes);
      // console.log(seconds);
      if (total){
        if (days>0){
          return (
            <span className={this.props.styleDays}>
              {days}d - {hours}h - {minutes}m - {seconds}s
            </span>
          )
        }else{
          return (
            <span className={this.props.styleNoDays}>
              {hours}h - {minutes}m - {seconds}s
            </span>
          );

        }
      }else{
        return <Finished/>;
      }
    };

    var divClass = "container "
    if (this.props.divClassBol==true){
      divClass = divClass+this.props.divClass
    }else{
      divClass = divClass+"countdown-container"
    }
    console.log(divClass)
    return (
      <div className={divClass} style={this.props.style}>
        <div className="row justify-content-center">
          <Countdown date={this.props.date} renderer={renderer}/>
         {/* <Countdown date={Date.now()+10000} renderer={renderer}/> */}

        </div>
      </div>
      

    );
  }
}

export default CCountdown;
