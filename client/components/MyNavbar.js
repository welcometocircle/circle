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
          <Navbar.Brand>
            <Link className="brand-title" to="/">circle</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
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