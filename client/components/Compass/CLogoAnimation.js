import React, { Component} from "react";
import "../../css/compass.css";
import Lottie from "react-lottie";
import * as aniCompassData from "../../assets/animations/compass-rotating-logo/compass-logo-layered.json";

class CLogoAnimation extends Component{
  render() {
    const aniCompass = {
      animationData: aniCompassData.default,
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

export default CLogoAnimation;
