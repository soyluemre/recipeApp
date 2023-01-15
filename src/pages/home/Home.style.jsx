import styled from "styled-components";

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem;
`;

export const HomeImg = styled.img`
  width: 80%;
  max-width: 750px;
`;

export const ThinkingImg = styled.img`
  width: 50%;
  max-width: 450px;
`;

export const HeaderText = styled.h1`
  font-size: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.navbarBgColor};
  width: 80%;
  margin: auto;
  color: ${({ theme }) => theme.colors.navbarBgColor};
  text-align: center;
`;
