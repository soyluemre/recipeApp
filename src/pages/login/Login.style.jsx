import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex.style";
import { Link } from "react-router-dom";

export const LoginContainer = styled(Flex)`
  height: 100vh;
  background-image: url("https://img.rawpixel.com/private/static/images/website/2022-05/px1369813-image-kwvxxp91.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=b0bb6d55ae739cf84787c39dfe80d0ba");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    height: 100vh;
  }
`;

export const FormContainer = styled(Flex)`
  width: 40rem;
  height: 40rem;
  max-width: 50rem;
  background: rgba(198, 198, 198, 0.5);
  border-radius: 40%;
  padding: 0.5rem;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 20rem;
    height: 20rem;
    max-width: 25rem;
    margin-top: -7rem;
    background: rgba(150, 179, 226, 0.5);
  }
`;

export const StyledInput = styled.input`
  height: 3rem;
  font-size: 1.4rem;
  width: 28rem;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: ${({ theme }) => theme.colors.hoverColor};
  margin: 1rem;
  text-indent: 1rem;
  &:focus {
    background: ${({ theme }) => theme.colors.navbarBgColor};
    border: 1px solid red;
    transition: all 1s;
    border: none;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    height: 1.5rem;
    font-size: 0.8rem;
    width: 13rem;
    margin: 1rem;
    text-indent: 1rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  font-size: 1.4rem;
  background: ${({ theme }) => theme.colors.navbarBgColor};
  border-radius: 5px;
  color: white;
  margin: 1rem;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background: rgba(11, 11, 11, 0.6);
    transition: box-shadow 0.7s;
    transition: all 0.7s;
    color: ${({ theme }) => theme.colors.hoverColor};
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 0.9rem;
    padding: 0.1rem;
    cursor: pointer;
  }
`;

export const StyledImg = styled.img`
  width: 100px;
  margin: 0.5rem;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 50px;
    margin: 1rem;
  }
`;

export const StyledText = styled(Link)`
  color: #c7e1f1;
  font-size: 1.2rem;
  text-align: center;
  &:hover {
    color: #96d7ff;
    letter-spacing: 2px;
    transition: all 1s;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 0.7rem;
  }
`;
