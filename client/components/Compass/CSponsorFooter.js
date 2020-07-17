import React, { Component } from "react";
import "../../css/compass.css";
import CSponsor from "./CSponsor";


class CSponsorFooter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container mt-5">
            <h3 className="compass-title my-5">We ❤️ our supporters</h3>
            <div className="row justify-content-md-around justify-content-center align-items-center compass-sponsor-row">
              <CSponsor
                src="../../assets/compass/sponsors/next36.png"
                href="https://www.nextcanada.com/next-36/"
              />
              <CSponsor
                src="../../assets/compass/sponsors/1517.png"
                href="https://www.1517fund.com"
              />
              <CSponsor
                src="../../assets/compass/sponsors/mossify.png"
                href="https://mossify.ca"
              />
            </div>
          </div>
    );
  }
}

export default CSponsorFooter;
