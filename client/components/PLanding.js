import React, { Component } from "react";

class PLanding extends Component {
  constructor(props) {
    super(props)
    document.documentElement.setAttribute("data-theme", "home");
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    analytics.logEvent("Landing Did Mount");
  }
  render() {

    return (
      <div>
        <h1>Circle v2 -- Hype things</h1>
      </div>
    );
  }
}

export default PLanding;
