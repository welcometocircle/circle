import React from "react";
import Routes from "./Routes";
import NavBar from "./NavBar.js";

function App(props) {
  return (
    <div className="app">
      <NavBar/>
      <Routes />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
