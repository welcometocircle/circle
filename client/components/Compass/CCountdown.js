import React, { Component } from "react";
import "../../css/compass.css";
import Countdown from 'react-countdown';


class CCountdown extends Component {
  constructor(props) {
    super(props);
  }
  render() {


    const Finished = ()=>(
      <span className="compass-landing-title"></span>
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
            <span className="countdown-txt">
              {days}d - {hours}h - {minutes}m - {seconds}s
            </span>
          )
        }else{
          return (
            <span className="countdown-txt">
              {hours}h - {minutes}m - {seconds}s
            </span>
          );

        }
      }else{
        return <Finished/>;
      }
    };

    return (
      <div className=" container countdown-container">
        <div className="row justify-content-center">
          <Countdown date={"2020-07-18T08:45:00-04:00"} renderer={renderer}/>
         {/* <Countdown date={Date.now()+10000} renderer={renderer}/> */}

        </div>
      </div>
      

    );
  }
}

export default CCountdown;
