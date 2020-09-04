import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Nav ,Container, Row, Col} from "react-bootstrap";

class Footer extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {

  }

  render() {
    var darkPages = ['/open-circle','/about']
    const lightPages = ['/opportunities']
    const bgColor = darkPages.includes(this.props.location.pathname)
          ? "#131416"
          : "white"
    const styles = {
      footBig: {
        backgroundColor: bgColor,
        // opacity: 0.5
        // backgroundOpacity: "0",
        // backdropFilter: "blur(10px)",
        // filter: "blur(5px)",
        transition: "1s ease",
        // backdropFilter: "opacity(0.4)"
      },
      footRow:{
        marginTop: "6vh",
        marginBottom: "7vh"
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
          ? "white"
          : "black",
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
        border: 'none'
      },
      sections: {
        // backgroundColor: bgColor,
        marginTop: "10px",
        // backdropFilter: "blur(10px)",
      },
      socialIcon: {
        height: 40,
        width: 40,
        marginLeft:10,
        marginRight:10,
      },
    };
    console.log(this.props.location.pathname)
    
    return (
      // <Navbar backgroundColor={navBackground ? 'white' : 'transparent'}fixed='top' style={styles.navBig} expand="md" collapseOnSelect={true}>
      <div style={styles.footBig}>
        <Container style={styles.footBig}>
          <hr style={{ marginTop: 30 }} />
          <Row
            style={styles.footRow}
            className="align-items-center justify-content-center text-align-center"
          >
            <Col md={4}>
              <div className="d-flex justify-content-md-start justify-content-center" style={styles.sections}>
              <a className="navBrand" href="/" style={styles.navBrand}>
                circle
              </a>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex justify-content-center" style={styles.sections}>
                <Nav.Link href="/open-circle" style={styles.navLinks}>
                  Open Circle
                </Nav.Link>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex justify-content-md-end justify-content-center" style={styles.sections}>
                <img src={"../assets/filler.png"} style={styles.socialIcon} />
                <img src={"../assets/filler.png"} style={styles.socialIcon} />
                <img src={"../assets/filler.png"} style={styles.socialIcon} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      /* <Container className="fixed-top" >
        <Navbar fixed="top" expand="md" collapseOnSelect={true}style={styles.navBig}>
          <Container>
            <Navbar.Brand
              className="mr-auto navBrand"
              href="/"
              style={styles.navBrand}
            >
              circle
            </Navbar.Brand>
            {/* <Navbar.Toggle.Icon/> */
      //       <Navbar.Toggle
      //         aria-controls="responsive-navbar-nav"
      //         style={styles.navToggle}
      //       />
      //       <Navbar.Collapse>
      //         <Nav className="ml-auto">
      //           <Nav.Link
      //             href="/about"
      //             className="navText"
      //             style={styles.navLinks}
      //           >
      //             About
      //           </Nav.Link>
      //           <Nav.Link href="/open-circle" style={styles.navLinks}>
      //             Open Circle
      //           </Nav.Link>
      //           <Nav.Link href="/conferences" style={styles.navLinks}>
      //             Conferences
      //           </Nav.Link>
      //           <Nav.Link href="/opportunities" style={styles.navLinks}>
      //             Opportunties
      //           </Nav.Link>
      //           <Nav.Link href="/contact" style={styles.navLinks}>
      //             Contact
      //           </Nav.Link>
      //         </Nav>
      //       </Navbar.Collapse>
      //     </Container>
      //   </Navbar>
      // </Container> */}
    );
  }
}

export default withRouter(Footer);
