import React from "react";
import {
  LoginContainer,
  FormContainer,
  StyledImg,
  StyledInput,
  StyledButton,
  StyledForm,
  StyledText,
} from "./Login.style";
import cookLogo from "../../assets/cookLogo.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser, setLogin } = useContext(LoginContext);

  const handleSubmit = (e) => {
    const getItem = sessionStorage.getItem("user");
    if (getItem) {
      navigate("/");
      e.preventDefault();
      setLogin(true);
    } else {
      e.preventDefault();
      alert("Make sure the information is correct");
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
    console.log(e.target.value);
  };
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={cookLogo} />
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            onChange={handleChange}
            value={user?.email || ""}
            placeholder="E-Mail"
            type="email"
            id="email"
          />
          <StyledInput
            onChange={handleChange}
            value={user?.password || ""}
            placeholder="Password"
            type="password"
            id="password"
          />
          <StyledText to="/register">
            Not a member? Click to register
          </StyledText>
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
