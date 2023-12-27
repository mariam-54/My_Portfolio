import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Toggle from "../Toggle/Toggle";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
import "./Header.css";
const Header = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Navbar
      expand="lg"
      style={{
        background: darkMode ? "black" : "",
      }}
    >
      <Container>
        <Navbar.Brand href="#">
          <span className="nav-l-logo">Mar</span>
          <span className="nav-r-logo">yam</span>
        </Navbar.Brand>
        <Toggle />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="mx-auto">
            <Link
              spy={true}
              to="Home"
              smooth={true}
              className="nav-link"
              activeClass="active"
              style={{
                color: darkMode ? "white" : "",
              }}
            >
              Home
            </Link>
            <Link
              spy={true}
              to="Services"
              smooth={true}
              className="nav-link"
              style={{
                color: darkMode ? "white" : "",
              }}
            >
              Services
            </Link>
            <Link
              spy={true}
              to="Portfolio"
              smooth={true}
              className="nav-link"
              style={{
                color: darkMode ? "white" : "",
              }}
            >
              Portfolio
            </Link>
            <Link
              spy={true}
              to="Certificate"
              smooth={true}
              className="nav-link"
              style={{
                color: darkMode ? "white" : "",
              }}
            >
              Certificates
            </Link>
          </Nav>
          <Nav>
            <Link spy={true} to="Contact" smooth={true}>
              <button className="nav-button">Contact Me</button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
