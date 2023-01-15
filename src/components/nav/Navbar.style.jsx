import styled from "styled-components";
import Flex from "../globalStyles/Flex.style";
import { Link } from "react-router-dom";

export const Nav = styled(Flex)`
  padding: 0.4rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
  opacity: 0.9;
`;

export const Brand = styled(Link)`
  padding: 1rem 0;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.linkColor};
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 1.3rem;
  }
`;

export const Menu = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "350px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s;
  }
`;

export const MenuLink = styled(Link)`
  text-align: center;
  padding: 1rem 1.3rem;
  cursor: pointer;
  font-size: 1.4rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.linkColor};
  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.hoverColor};
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.linkColor};
    width: 70%;
    font-size: 1rem;
    &:hover {
      transform: scale(1);
    }
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
