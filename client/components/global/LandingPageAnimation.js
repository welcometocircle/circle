import React, { Component } from "react";
import aniLines from '../../assets/animations/LinesData.json'
import LottieAnimation from "./LottieAnimation";

class CSectorAnimation extends Component {

    componentDidMount() {
        // window.scrollTo(0, 0);
        // analytics.logEvent("Landing Did Mount");

        // var aniDiv = document.getElementById('aniDivLanding');
        // var aniDivText = document.getElementById('landingText')

        // function transformAnimation(e) {
        //   var xPos = (e.clientX - aniDiv.offsetWidth / 2) / 30
        //   var yPos = (e.clientY - aniDiv.offsetHeight / 2) / 30
        //   var translate3dValue = "translate3d(" + xPos + 'px,' + yPos + 'px,0)';
        //   aniDiv.style.transform = translate3dValue;
        // }

        // aniDivText.addEventListener("mousemove", transformAnimation, true);
        // aniDiv.addEventListener("mousemove", transformAnimation, true);
        // window.addEventListener("resize", this.handleResize.bind(this));
    }

    render() {
        return (
            <div className="" id="aniDivLanding" style={this.props.style} id={this.props.id}>
                <LottieAnimation
                    style={this.props.styleAnimation}
                    aniData={aniLines}
                    height={this.props.height === undefined ? 100 : this.props.height}
                    width={this.props.width === undefined ? 100 : this.props.width}
                    renderer='svg'
                />
            </div>
        );
    }
}

export default CSectorAnimation;
