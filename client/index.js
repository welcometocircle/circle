import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
// import { HashRouter as Router } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Favicon from 'react-favicon';


ReactDOM.render(
    <Router>
      <App />
    </Router>,
    
    document.getElementById('root')
  );

