import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: ${({ align }) => (align ? align : "center")};
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  flex-wrap: ${({ wrap }) => wrap && wrap};
`;

export default Flex;
