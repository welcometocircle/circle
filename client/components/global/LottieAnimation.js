import React, { Component} from "react";
import Lottie from "react-lottie";

class LottieAnimation extends Component{
  render() {
    // const aniCompass = {
    //   animationData: {this.props.aniData}.default,
    //   loop: true,
    //   autoplay: true,
    //   renderer: "canvas",
    //   rendererSettings: {
    //     preserveAspectRatio: "xMidYMid meet",
    //     // progressiveLoad:true,
    //     // clearCanvas:true,
    //   },
    // };



    if (this.props.loop === undefined) {
      var loop = true;
    } else {
      var loop = this.props.loop;
    }

    if (this.props.autoplay === undefined) {
      var autoplay = true;
    } else {
      var autoplay = this.props.autoplay;
    }

    if (this.props.isClickToPauseDisabled === undefined) {
      var isClickToPauseDisabled = true;
    } else {
      var isClickToPauseDisabled = this.props.isClickToPauseDisabled;
    }

    if (this.props.renderer === undefined) {
      var renderer = "canvas";
    } else {
      var renderer = this.props.renderer;
    }

    if (this.props.preserveAspectRatio === undefined) {
      var preserveAspectRatio = "xMidYMid meet";
    } else {
      var preserveAspectRatio = this.props.preserveAspectRatio;
    }

    if (this.props.renderer != "canvas" && this.props.renderer) {
      renderer = this.props.renderer
    }
    if (this.props.preserveAspectRatio != "xMidYMid meet") {

    }
    
    
    console.log(loop);
    return (
      <div className="" style={this.props.style} id={this.props.id}>
        <Lottie
          isClickToPauseDisabled={isClickToPauseDisabled}
          options={{
            animationData: this.props.aniData.default,
            loop: loop,
            autoplay: autoplay ,
            renderer: renderer,
            rendererSettings: {
              preserveAspectRatio: preserveAspectRatio,
            },
          }}
          height={this.props.height}
          width={this.props.width}
        />
      </div>
    );
  }
}

export default LottieAnimation;
