import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav ,Container} from "react-bootstrap";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
  isMobileOnly,
  isTablet,
} from "react-device-detect";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {

  }

  render() {
    const darkPages = ['/','/open-circle','/about']
    const lightPages = ['/opportunities','contact']
    const bgColor = darkPages.includes(this.props.location.pathname)
          ? "rgba(19, 20, 22, 0.96)"
          : "rgba(255, 255, 255, 0.96)"
    const styles = {
      navBig: {
        backgroundColor: bgColor,
        // opacity: 0.5
        // backgroundOpacity: "0",
        // backdropFilter: "blur(10px)",
        // filter: "blur(5px)",
        transition: "1s ease",

        // backdropFilter: "opacity(0.4)"
      },
      navBrand: {
        color: darkPages.includes(this.props.location.pathname)
          ? "white"
          : "black",
        // color: "white",
        fontSize: 30,
        fontWeight: 700,
      },
      navLinks: {
        // color: "white",
        color: darkPages.includes(this.props.location.pathname)
          ? "#7D7D7D"
          : "#777B82",
        fontSize: 15,
        marginLeft: "10px",
        marginRight: "10px",
      },
      navToggle: {
        // backgroundImage:
        backgroundImage: darkPages.includes(this.props.location.pathname)
          ? "url(../assets/navToggleLight.svg)"
          : "url(../assets/navToggleDark.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        marginRight: 20,
        border: "none",
      },
      navCollaspe: {
        // backgroundColor: bgColor,
        marginTop: "-1px",
        // backdropFilter: "blur(10px)",
      },
      logo: {
        height: 22,
        marginTop: 10,
      },
    };
    console.log(this.props.location.pathname)
    var logo;
    if (darkPages.includes(this.props.location.pathname)){
      logo ="../assets/logoWhite.png"
    }else{
      logo = "../assets/logoBlack.png";
    }
    return (
      // <Navbar backgroundColor={navBackground ? 'white' : 'transparent'}fixed='top' style={styles.navBig} expand="md" collapseOnSelect={true}>
      // <Container className="">
        <Navbar
          fixed={isMobileOnly? "top":""}
          // className="fixed-top"
          expand="md"
          collapseOnSelect={true}
          style={styles.navBig}
        >
          <Container>
            <Navbar.Brand
              className="mr-auto navBrand"
              href="/"
              style={styles.navBrand}
            >
              <img
                src={logo}
                style={styles.logo}
                className="align-items-center"
              />
            </Navbar.Brand>
            {/* <Navbar.Toggle.Icon/> */}
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              style={styles.navToggle}
            />
            <Navbar.Collapse>
              <Nav className="ml-auto">
                <Nav.Link
                  href="/about"
                  className="navText"
                  style={styles.navLinks}
                >
                  About
                </Nav.Link>
                {/* <Nav.Link href="/open-circle" style={styles.navLinks}>
                  Open Circle
                </Nav.Link> */}
                <Nav.Link href="/conferences" style={styles.navLinks}>
                  Conferences
                </Nav.Link>
                <Nav.Link href="/opportunities" style={styles.navLinks}>
                  Opportunties
                </Nav.Link>
                {/* <Nav.Link href="/contact" style={styles.navLinks}>
                  Contact
                </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      // </Container>
    );
  }
}

export default withRouter(NavBar);
