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
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { login, setLogin } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (login) {
      sessionStorage.clear();
      setLogin(false);
      navigate("/recipeApp");
    } else {
    }
  };
  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="/recipeApp">
        <BrandLogo src={cookLogo} />
      </Brand>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu onClick={() => setIsOpen(false)} isOpen={isOpen}>
        <MenuLink to="/recipeApp">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        {login ? (
          <MenuLink onClick={handleLogout} to="/recipeApp">
            Logout
          </MenuLink>
        ) : (
          <>
            <MenuLink onClick={handleLogout} to="/login">
              Login
            </MenuLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
