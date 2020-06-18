import React from "react";
import Routes from "./Routes";
import MyNavbar from "./MyNavbar";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Footer from "./Footer";

function App(props) {
  return (
    <div className="app">
      <Navbar className="mynav" expand="lg">
        {/* <Navbar.Header> */}
        <Navbar.Brand>
          <Link className="brand-title" to="/">
            circle
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
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
                Compass
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
