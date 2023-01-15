import styled from "styled-components";
import Flex from "../../components/globalStyles/Flex.style";

export const DetailContainer = styled(Flex)`
  flex-direction: column;
  background: ${({ theme }) => theme.colors.mainColor};
  min-height: calc(100vh - 75px);
  padding: 0.5rem;
`;

export const DetailPart = styled(Flex)`
  flex-direction: row;
  margin: 1rem;
  border: 3px solid ${({ theme }) => theme.colors.hoverColor};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
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
`;

export const HeaderContainer = styled(Flex)`
  margin: 10px;
  img {
    width: 13rem;
  }
`;

export const IngContainer = styled.div`
  width: 100%;
  font-size: 1.5rem;
  margin: auto;
  color: ${({ theme }) => theme.colors.hoverColor};
`;

export const OtherPart = styled.div`
  color: ${({ theme }) => theme.colors.hoverColor};
  width: 400px;
  text-align: right;
  font-size: 1.8rem;
  margin: 2rem;
`;
