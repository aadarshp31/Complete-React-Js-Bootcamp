import React, { useState, useContext, Fragment } from "react";
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
  const context = useContext(UserContext);

  // State for nav toggler button
  const [isOpen, setIsOpen] = useState(false);
  // Method for nav toggler button
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand tag={Link} to="/" className="text-light">
          Github API App
      </NavbarBrand>
      <NavbarText className="text-light">
        {context.user?.email ? context.user.email : ""}
      </NavbarText>
      <NavbarToggler className="bg-light" onClick={toggle} />
      <Collapse navbar isOpen={isOpen}>
        <Nav className="ml-auto" navbar>
          {context.user ? (
            <NavItem>
              <NavLink tag={Link} to="/" className="text-light">
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <Fragment>
              <NavItem>
                <NavLink tag={Link} to="/" className="text-light">
                  Signup
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/" className="text-light">
                  Signin
                </NavLink>
              </NavItem>
            </Fragment>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
