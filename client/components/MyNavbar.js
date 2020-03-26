import React, { Component } from 'react';
//import '../css/NavBar.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from "react-router-dom";


class MyNavbar extends Component {
  render() {
    return (
      <Navbar fluid className="navbar navbar-expand-sm mynav navbar-light">
        <Navbar.Header>
          {/* <a className="brand-title" href="/">circle</a> */}
          <Navbar.Brand>
            <Link className="brand-title" to="/">circle</Link>
          </Navbar.Brand>
          {/* <button className="navbar-toggler mynav-toggler" type="button" data-toggle="collapse" data-target="#mynav" aria-controls="mynav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><i
            class="fas fa-bars fa-1x"></i></span>
        </button> */}
          <Navbar.Toggle />
        </Navbar.Header>
        {/* <div className="navbar-collapse collapse " id="mynav">

          <ul className="navbar-nav ml-auto mynav-items">
            <li className="nav-item ">
              <a className="nav-link mynav-txt" href="#">Opportunities</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mynav-txt" href="#">FAQs</a>
            </li>
          </ul>
        </div> */}
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem href="/signup">Opportunities</NavItem>
            <NavItem href="/login">FAQs</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default MyNavbar;


{/* <nav className="navbar navbar-expand-lg mynav navbar-light">
<a className="brand-title" href="/">circle</a>
<button className="navbar-toggler mynav-toggler" type="button" data-toggle="collapse" data-target="#mynav" aria-controls="mynav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"><i
    class="fas fa-bars fa-1x"></i></span>
</button>

<div className="navbar-collapse collapse " id="mynav">

  <ul className="navbar-nav ml-auto mynav-items">
    <li className="nav-item ">
      <a className="nav-link mynav-txt" href="#">Opportunities</a>
    </li>
    <li className="nav-item">
      <a className="nav-link mynav-txt" href="#">FAQs</a>
    </li>
  </ul>
</div>

</nav> */}