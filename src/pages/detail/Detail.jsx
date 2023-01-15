import React from "react";
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImageContainer,
  IngContainer,
  OtherPart,
} from "./Detail.style";
import { useLocation } from "react-router-dom";
import diet from "../../assets/diet.svg";

const Detail = () => {
  const { state } = useLocation();
  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{state.label}</h1>
        <img src={diet} alt="dietImg" />
      </HeaderContainer>
      <DetailPart>
        <OtherPart>
          <h3>Nutrients</h3>

          <p>
            {state.totalNutrients.CA.label} :{" "}
            {Math.round(state.totalNutrients.CA.quantity)}
            {state.totalNutrients.CA.unit}
          </p>
          <p>
            {state.totalNutrients.CHOCDF.label} :{" "}
            {Math.round(state.totalNutrients.CHOCDF.quantity)}
            {state.totalNutrients.CHOCDF.unit}
          </p>
          <p>
            {state.totalNutrients.CHOLE.label} :{" "}
            {Math.round(state.totalNutrients.CHOLE.quantity)}
            {state.totalNutrients.CHOLE.unit}
          </p>
          <p>
            {state.totalNutrients.ENERC_KCAL.label} :{" "}
            {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
            {state.totalNutrients.ENERC_KCAL.unit}
          </p>
          <p>{state.totalWeight}</p>
          <p>Calories: {Math.round(state.calories)}</p>
          {state.digest.slice(0, 4).map((item, index) => (
            <p key={index}>
              {item.label} : {Math.round(item.total)}
            </p>
          ))}
        </OtherPart>
        <ImageContainer>
          <img src={state.image} alt="FoodImage" />
        </ImageContainer>

        <IngContainer>
          {state.ingredientLines.map((ingredient, index) => (
            <div>
              <p>
                {index + 1}) {ingredient}
              </p>
            </div>
          ))}
        </IngContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Detail;
