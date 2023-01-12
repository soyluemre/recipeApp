import styled from "styled-components";
import Flex from "../globalStyles/Flex.style";
import { Link } from "react-router-dom";

export const Nav = styled(Flex)`
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
`;

export const Brand = styled(Link)`
  padding: 1rem 0;
  color: "#ce5b35d5d";
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
`;

export const Menu = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "400px" : "0")};
    overflow: hidden;
    transition: max-height 0.4s;
  }
`;

export const MenuLink = styled(Link)`
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.linkColor};
  transition: all 0.3s ease-in;
  &:hover {
    color: ${({ theme }) => theme.colors.mainColor};
    font-weight: bold;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    border-bottom: 1px solid white;
    width: 80%;
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.mainColor};

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    display: block;
  }
`;
