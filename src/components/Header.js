import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import {
  FcAbout,
  FcAssistant,
  FcBinoculars,
  FcBullish,
  FcBusinessman,
  FcHome,
} from "react-icons/fc";

const Header = (props) => {
  const { style } = props;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar style={style} dark color="primary" sticky="top" expand="md">
        <NavbarBrand className="ms-5" href="/">
          {/* <img src={} alt='logo' className='float-start' /> */}
          <h1 className="mt-1">Doug's Portfolio</h1>
        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/" href="/">
                <FcHome /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about" href="/about">
                <FcAbout /> About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/projects" href="/projects">
                <FcBinoculars /> Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/resume" href="/resume">
                <FcBusinessman /> Resume
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/skills" href="/skills">
                <FcBullish /> Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact" href="/contact">
                <FcAssistant /> Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
