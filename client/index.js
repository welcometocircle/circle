import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './css/Main.css';
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
    <Router>
      <App/>
    </Router>,
    document.getElementById('root')
  );




// ReactDOM.render(<StyleRoot><Router><App /></Router></StyleRoot>, document.querySelector("#app"));

