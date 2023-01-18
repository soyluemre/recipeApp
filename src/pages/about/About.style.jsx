import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex.style";

export const AboutContainer = styled(Flex)`
  height: 100vh;
  margin-top: -2rem;
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    flex-direction: column;
  }
`;

export const AboutImg = styled.img`
  width: 250px;
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    width: 100px;
    margin-top: -6rem;
  }
`;

export const AboutText = styled.p`
  max-width: 35rem;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.navbarBgColor};
  text-align: justify;
  margin: 2rem;
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    width: 80%;
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

export const AboutLogoContainer = styled(Flex)`
  justify-content: center;
  gap: 3rem;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    flex-direction: row;
    border-bottom: 1px solid ${({ theme }) => theme.colors.navbarBgColor};
    width: 80%;
    margin-left: 0;
    margin-top: 3rem;
  }
`;

export const AboutSocialMediaLink = styled.a`
  width: 50px;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    width: 30px;
  }
`;

export const AboutSocialMediaIcon = styled.img`
  width: 70px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: all 1s;
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    width: 40px;
  }
`;
