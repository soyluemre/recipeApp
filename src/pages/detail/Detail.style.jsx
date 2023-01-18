import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex.style";

export const DetailContainer = styled(Flex)`
  flex-direction: column;
  background: ${({ theme }) => theme.colors.mainColor};
  min-height: calc(100vh - 75px);
  padding: 0.5rem;
  width: 90%;
  margin: auto;
`;

export const DetailPart = styled(Flex)`
  flex-direction: row;
  margin: 1rem;
  width: 70%;
  margin: auto;
  border: 3px solid ${({ theme }) => theme.colors.hoverColor};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.hoverColor};
  padding: 5px;
  border-radius: 20px;
  margin: 2rem;
  img {
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    img {
      width: 180px;
    }
  }
`;

export const HeaderContainer = styled(Flex)`
  margin-top: 4rem;
  img {
    width: 10rem;
  }
  h1 {
    font-size: 2rem;
    margin-left: 2rem;
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    img {
      width: 6rem;
    }
    h1 {
      font-size: 1.3rem;
      margin-top: 1rem;
    }
  }
`;

export const IngContainer = styled.div`
  width: 70%;
  margin: auto;
  font-size: 1.3rem;
  margin: 1rem;
  overflow: -moz-hidden-unscrollable;
  color: ${({ theme }) => theme.colors.mainColor};
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 1rem;
  }
`;

export const OtherPart = styled.div`
  color: ${({ theme }) => theme.colors.hoverColor};
  width: 400px;
  text-align: right;
  font-size: 1.4rem;
  margin: 1rem;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 1rem;
    text-align: center;
    width: 350px;
  }
`;
