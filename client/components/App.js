import React from "react";
import Routes from "./Routes";
import MyNavbar from "./MyNavbar";
import Footer from "./Footer";

function App(props) {
  return (
    <div className="app">
      <MyNavbar/>
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
