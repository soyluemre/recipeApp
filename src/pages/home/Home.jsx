import axios from "axios";
import React from "react";
import { useState } from "react";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import { HeaderText, HomeImg, ImgDiv, ThinkingImg } from "./Home.style";
import homeSvg from "../../assets/chef.png";
import thinkFace from "../../assets/thinkingFace.png";

const Home = () => {
  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState(null);
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Fill The Form");
    }
  };

  return (
    <div>
      <Header
        mealType={mealType}
        setSelectedMeal={setSelectedMeal}
        setQuery={setQuery}
        getData={getData}
      />
      {!recipes && (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
      {recipes?.length === 0 && (
        <>
          <HeaderText>The Food Can Not Be Found</HeaderText>
          <ImgDiv>
            <ThinkingImg src={thinkFace} />
          </ImgDiv>
        </>
      )}

      {recipes?.length > 0 && <Cards recipes={recipes} />}
    </div>
  );
};

export default Home;
