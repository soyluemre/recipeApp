import React from "react";
import {
  LoginContainer,
  FormContainer,
  StyledImg,
  StyledInput,
  StyledButton,
  StyledForm,
} from "./Register.style";
import meal from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

const Register = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(LoginContext);

  const handleSubmit = (e) => {
    sessionStorage.setItem("user", JSON.stringify(user));
    if (user.name && user.surname && user.email && user.password) {
      setUser(user);
      navigate("/login");
      e.preventDefault();
    } else {
      e.preventDefault();
      alert("Make sure the information is correct");
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal} />
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            onChange={handleChange}
            value={user?.name || ""}
            placeholder="Name"
            type="text"
            id="name"
          />
          <StyledInput
            onChange={handleChange}
            value={user?.surname || ""}
            placeholder="Surname"
            type="text"
            id="surname"
          />
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

          <StyledButton type="submit">Register</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Register;
