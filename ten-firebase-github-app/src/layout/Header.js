import React, { useState, useContext } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
  // State for nav toggler button
  const [isOpen, setIsOpen] = useState(false);
  // Method for nav toggler button
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-light">
          Github API App
        </Link>
      </NavbarBrand>
      <NavbarToggler className="bg-light" onClick={toggle}/>
      <Collapse navbar isOpen={isOpen}>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/" className="text-light">Signup</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/" className="text-light">Signin</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/" className="text-light">Logout</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
