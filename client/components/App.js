import React from "react";
import Routes from "./Routes";
import NavBar from "./NavBar.js";
import Footer from "./Footer";
import Radium from 'radium';

function App(props) {
  return (
    <div className="app">
      <NavBar/>
      <Routes />
      <Footer />
    </div>
  );
}

// const StyleRoot = Radium.StyleRoot;
// App = Radium(App);

export default App;
