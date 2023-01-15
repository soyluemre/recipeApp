import React, { useState } from "react";
import {
  Nav,
  Brand,
  Menu,
  MenuLink,
  Hamburger,
  BrandLogo,
} from "./Navbar.style";
import { GiHamburgerMenu } from "react-icons/gi";
import cookLogo from "../../assets/cookLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="/">
        <BrandLogo src={cookLogo} alt="" />
      </Brand>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu onClick={() => setIsOpen(false)} isOpen={isOpen}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink onClick={() => sessionStorage.clear()} to="logout">
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
