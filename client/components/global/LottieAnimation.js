import React, { Component} from "react";
import Lottie from "react-lottie";

class LottieAnimation extends Component{
  render() {
    const aniCompass = {
      animationData: {this.props.animationData}.default,
      loop: true,
      autoplay: true,
      renderer: "canvas",
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
        // progressiveLoad:true,
        // clearCanvas:true,
      },
    };
    return (
    <div className="row justify-content-center">
              <Lottie
                isClickToPauseDisabled
                options={aniCompass}
                height={200}
                width={200}
              />
    </div>
    );
  }
}

export default LottieAnimation;
