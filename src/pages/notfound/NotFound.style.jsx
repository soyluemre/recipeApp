import styled from "styled-components";

export const NotFoundDiv = styled.div`
  display: grid;
  margin: 1.5rem;
`;

export const NotFoundImg = styled.img`
  width: 70%;
  margin: 5rem auto;
  max-width: 40rem;
`;

export const NotFoundText = styled.h1`
  font-size: 2.5rem;
  width: 80%;
  margin: auto;
  color: ${({ theme }) => theme.colors.navbarBgColor};
  text-align: center;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 1.4rem;
  }
`;
