import React, { Component } from "react";
import * as aniLinesData from '../assets/animations/LinesData.json';
import LottieAnimation from "./global/LottieAnimation";

class PLanding extends Component {
  constructor(props) {
    super(props)
    this.state = { width: window.innerWidth};
    document.documentElement.setAttribute("data-theme", "dark");
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    analytics.logEvent("Landing Did Mount");

    var aniDiv = document.getElementById('aniDivLanding');
    var aniDivText = document.getElementById('landingText')
    var isMouseOver = false 
    var x;
    var y

    function transformAnimation (e) {
      var xPos = (e.clientX - aniDiv.offsetWidth/2)/40
      var yPos = (e.clientY - aniDiv.offsetHeight/2)/40
      var translate3dValue = "translate3d("+xPos+'px,'+yPos+'px,0)';
      aniDiv.style.transform = translate3dValue;
    }

    aniDivText.addEventListener("mousemove", transformAnimation, true);
    aniDiv.addEventListener("mousemove", transformAnimation, true);
    window.addEventListener("resize",this.handleResize.bind(this));
  }


  handleResize (e) {
    console.log('resize')
    this.setState({width:window.innerWidth})
  };

  componentWillUnmount(){
  }


  render() {

    var aniHeight;
    var aniWidth;
    var aniMargin;
    var txtMargin;

    if (this.state.width<576){
      console.log("576")
      aniHeight = "130vh"
      aniWidth =  "130vw"
      aniMargin =  "-40vh"
      txtMargin = "22vh"
    } else if (this.state.width<1100){
      console.log('768')
      aniHeight = "130vh";
      aniWidth = "130vw";
      aniMargin = "-40vh";
      txtMargin = "20vh"
    } else{
      console.log('large')
      aniHeight = "130vh"
      aniWidth = "130vw"
      aniMargin = "-20vh"
      txtMargin = "30vh"
    }

    return (
      <div className="container">
        <div className="row justify-content-center" style={{position:"relative", zIndex:0}}>
            <h1 id="landingText" style={{zIndex: 2,position:"absolute",marginTop: txtMargin,overflowX: 'hidden'}} className=''>Innovation is just<br/> the beginning.</h1>
            <LottieAnimation aniData={aniLinesData} id="aniDivLanding" height={aniHeight} width={aniWidth} style={{zIndex: 1,position: "relative",marginTop:aniMargin}}/>
        </div>
      </div>
    );
  }
}

export default PLanding;
