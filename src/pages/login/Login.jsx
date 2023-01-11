import React from "react";
import {
  LoginContainer,
  FromContainer,
  StyledImg,
  StyledInput,
  StyledButton,
  StyledForm,
} from "./Login.style";
import meal from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const userInfo = {
    email: "emre@mail.com",
    password: "12345",
  };

  const handleSubmit = (e) => {
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    navigate(-1);
    e.preventDefault();
  };
  return (
    <LoginContainer>
      <FromContainer>
        <StyledImg src={meal} />
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput placeholder="E-Mail" type="email" />
          <StyledInput placeholder="Password" type="password" />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FromContainer>
    </LoginContainer>
  );
};

export default Login;
