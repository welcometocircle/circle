import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem ,Container} from "react-bootstrap";


const styles = {
  navBig: {
    // backgroundColor: "rgba(0, 0, 0, 0.3)",
    // opacity: 0.5
    // backgroundOpacity: "0",
    // backdropFilter: "blur(10px)",
    // filter: "blur(5px)"
    transition: "1s ease"

    // backdropFilter: "opacity(0.4)"
  },
  navBrand: {
    color: "white",
    fontSize: 30,
    fontWeight: 700,
  },
  navLinks: {
    color: "white",
    fontSize: 15,
    marginLeft:"10px",
    marginRight:"10px"
  },
};


class NavBar extends Component {
  constructor(props) {
    super(props);
    // const [navBackground, setNavBackground] = useState(false)
    // const navRef = useRef()
    // navRef.current = navBackground
  }

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const show = window.scrollY > 670
  //     if (navRef.current !== show) {
  //       setNavBackground(show)
  //     }
  //   }
  //   document.addEventListener('scroll', handleScroll)
  //   return () => {
  //     document.removeEventListener('scroll', handleScroll)
  //   }
  // })


  componentDidMount(){

  }

  render() {
    return (
      // <Navbar backgroundColor={navBackground ? 'white' : 'transparent'}fixed='top' style={styles.navBig} expand="md" collapseOnSelect={true}>
      <Navbar fixed='top' style={styles.navBig} expand="md" collapseOnSelect={true}>
      <Container className="fixed-top">

          <Navbar.Brand className="mr-auto" href="/" style={styles.navBrand}>
            circle
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ml-auto">
              <Nav.Link href="/about" style={styles.navLinks}>
                About
              </Nav.Link>
              <Nav.Link href="/open-circle" style={styles.navLinks}>
                Open Circle
              </Nav.Link>
              <Nav.Link href="/conferences" style={styles.navLinks}>
                Conferences
              </Nav.Link>
              <Nav.Link href="/opportunities" style={styles.navLinks}>
                Opportunties
              </Nav.Link>
              <Nav.Link href="/contact" style={styles.navLinks}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
        </Navbar>
    );
  }
}

export default NavBar;
