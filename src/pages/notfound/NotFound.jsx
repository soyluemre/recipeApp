import React from "react";
import { NotFoundDiv, NotFoundImg, NotFoundText } from "./NotFound.style";
import notFoundImage from "../../assets/404.png";

const NotFound = () => {
  return (
    <NotFoundDiv>
      <NotFoundText>Page Not Found</NotFoundText>
      <NotFoundImg src={notFoundImage} alt="..." />
    </NotFoundDiv>
  );
};

export default NotFound;
