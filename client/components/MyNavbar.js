import React, { Component } from 'react';
//import '../css/NavBar.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class MyNavbar extends Component {
  render() {
    return (
      <Navbar className="mynav" expand="lg">
        {/* <Navbar.Header> */}
        <Navbar.Brand className="mr-auto">
          <Link className="brand-title" to="/">
            circle
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        {/* </Navbar.Header> */}
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <LinkContainer to="/opportunities">
              <NavItem className="mynav-txt">Opportunities</NavItem>
            </LinkContainer>
            <LinkContainer to="/faqs">
              <NavItem className="mynav-txt">FAQs</NavItem>
            </LinkContainer>
            <LinkContainer to="/compass">
              <NavItem className="mynav-txt mynav-text-compass">
                Compass Conference
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default MyNavbar;