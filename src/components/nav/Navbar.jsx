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
import { Select } from "../header/Header.style";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { login, setLogin, user } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (login) {
      sessionStorage.clear();
      setLogin(false);
      navigate("https://soyluemre.github.io/recipeApp/");
    } else {
    }
  };
  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="https://soyluemre.github.io/recipeApp/">
        <BrandLogo src={cookLogo} alt="" />
      </Brand>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu onClick={() => setIsOpen(false)} isOpen={isOpen}>
        <MenuLink to="https://soyluemre.github.io/recipeApp/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        {/* <MenuLink to="register">Register</MenuLink> */}
        {login ? (
          <>
            <MenuLink onClick={handleLogout} to="/">
              Logout
            </MenuLink>

            {/* <MenuLink to="">Welcome {user?.name && user?.surname}</MenuLink> */}
          </>
        ) : (
          <>
            <MenuLink onClick={handleLogout} to="login">
              Login
            </MenuLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
