import React, { Component } from 'react';
//import '../css/NavBar.css'
import { Navbar, NavItem, Nav } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

class MyNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg mynav">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mynav" aria-controls="mynav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" id="mynav">
          <a className="brand-title" href="/">circle</a>
          <ul className="navbar-nav ml-auto mynav-items">
            <li className="nav-item ">
              <a className="nav-link mynav-txt" href="#">Opportunities</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mynav-txt" href="#">FAQs</a>
            </li>
          </ul>
        </div>

      </nav>
    )
  }
}

export default MyNavbar;
