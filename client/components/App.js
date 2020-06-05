import React from 'react';
import Routes from "./Routes";
import MyNavbar from './MyNavbar';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";


function App(props) {
  return (
    <div className="">
      <Navbar className="mynav" expand="lg">
        {/* <Navbar.Header> */}
        <Navbar.Brand>
          <Link className="brand-title" to="/">circle</Link>
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
      <footer className="footer">
        {/* <div className="footer-wrapper">
          <div className="title-wrap">
            <h3 className="footer-title">circle</h3>
          </div>
          <a href="#" class="fa fa-instagram footer-social" href="https://www.instagram.com/welcometocircle/"></a>
        </div> */}

        <div className="container footer-wrapper">
          <div className="row">
            <div className="col-lg-3">
              <div className="title-wrap">
                <h3 className="footer-title">circle</h3>
              </div>
            </div>
            <div className="col-lg-5">
            </div>
            <div className="col-lg-1 col-3">
              <a class="footer-social" target="_blank" href="https://www.instagram.com/welcometocircle/">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
            <div className="col-lg-1 col-3">
              <a class="footer-social" target="_blank" href="https://www.facebook.com/welcometocircle/">
                <i className="fa fa-facebook"></i>
              </a>
            </div>
            <div className="col-lg-1 col-3">
              <a class="footer-social" target="_blank" href="https://www.linkedin.com/company/connectwithcircle/about/">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

{/* <a className="brand-title" href="/">circle</a> 
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
        </div> */}