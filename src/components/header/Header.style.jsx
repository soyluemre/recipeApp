import styled from "styled-components";
import Flex from "../globalStyles/Flex.style";

export const HeaderContainer = styled(Flex)`
  background: ${({ theme }) => theme.colors.mainColor};
  flex-direction: column;
`;

export const MainHeader = styled.h2`
  margin-top: 1rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 6px;
  margin: 20px;
`;

export const FoodInput = styled.input`
  height: 3rem;
  width: 15rem;
  border: 1px solid ${({ theme }) => theme.colors.navbarBgColor};
  border-radius: 6px;
  outline: none;
  text-indent: 10px;
  margin: 5px;
  font-size: 1.3rem;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.hoverColor};
    transition: all 1s;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.mainColor};
  padding: 6px;
  outline: none;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.navbarBgColor};
  margin: 5px;
  border-radius: 6px;
  width: 120px;
  cursor: pointer;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.navbarBgColor};

  &:hover {
    background: ${({ theme }) => theme.colors.navbarBgColor};
    transition: all 0.3s ease-in;
    color: ${({ theme }) => theme.colors.mainColor};
    border: 1px solid ${({ theme }) => theme.colors.hoverColor};
  }
`;

export const Select = styled.select`
  border-radius: 6px;
  margin: 5px;
  padding: 5px;
  height: 3rem;
  border: 1px solid #205375;
  font-size: 1.3rem;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.hoverColor};
    transition: all 1s;
  }
`;
