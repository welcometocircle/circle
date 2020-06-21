import React, { Component} from "react";
import "../../css/compass.css";

class CYoutubeVid extends Component{
  render() {
    return (
	  	<div className="row justify-content-center compass-video">
            <iframe
              width="720"
              height="405"
              src= {this.props.ytURL}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            />
      </div>
    );
  }
}

export default CYoutubeVid;
