import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex.style";

export const LoginContainer = styled(Flex)`
  height: 100vh;
  background-image: url("https://img.rawpixel.com/private/static/images/website/2022-05/px1369813-image-kwvxxp91.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=b0bb6d55ae739cf84787c39dfe80d0ba");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    height: 90vh;
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
    width: 23rem;
    height: 25rem;
    max-width: 25rem;
    background: rgba(198, 198, 198, 0.5);
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
    font-size: 1.2rem;
    width: 15rem;
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
    transition: all 0.7s;
    color: ${({ theme }) => theme.colors.hoverColor};
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    padding: 0rem;
  }
`;

export const StyledImg = styled.img`
  width: 200px;
  margin: 0.5rem;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 100px;
  }
`;
