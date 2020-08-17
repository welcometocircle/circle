import React, { Component } from "react";
import * as aniLinesData from '../assets/animations/LinesData.json';
import LottieAnimation from "./global/LottieAnimation";

class PLanding extends Component {
  constructor(props) {
    super(props)
    document.documentElement.setAttribute("data-theme", "dark");
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    analytics.logEvent("Landing Did Mount");
  }
  render() {

    return (
      <div>
        <h1>Circle v2 -- Hype things aaa</h1>
        <h2> h2 Circle v2 -- Hype things aaa</h2>
        <h3> h3 Circle v2 -- Hype things aaa</h3>
        <h4>h4 Circle v2 -- Hype things aaa</h4>
        <h5 style={{ color: "#969696" }}>h5 Circle v2 -- Hype things aaa</h5>
        <h6>h6 SECTORS</h6>
        <hr />
        <p>Test aaa asjdofajlfk alsdf alksdf </p>
        <LottieAnimation aniData={aniLinesData}/>
      </div>
    );
  }
}

export default PLanding;
