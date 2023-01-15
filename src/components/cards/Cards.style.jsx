import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex.style";

export const MainContainer = styled(Flex)`
  flex-direction: row;
`;
export const Card = styled(Flex)`
  flex-direction: column;
  height: 23rem;
  width: 23rem;
  background: ${({ theme }) => theme.colors.navbarBgColor};
  padding: 0.5rem;
  border-radius: 20px;
  margin: 0.7rem;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.5);
  &:hover {
    box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.8);
    transition: all 0.3s ease-in;
  }
`;

export const Image = styled.img`
  height: 14rem;
  width: 15rem;
  border-radius: 20px;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const Button = styled.button`
  background: inherit;
  padding: 5px;
  outline: none;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 6px;
  width: 80%;
  cursor: pointer;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.mainColor};

  &:hover {
    transform: scale(1.04);
    letter-spacing: 1px;
    transition: all 0.3s ease-in;
    border: 2px solid ${({ theme }) => theme.colors.hoverColor};
    color: ${({ theme }) => theme.colors.hoverColor};
  }
`;

export const Header = styled.h1`
  font-size: 1.3rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.hoverColor};
`;
