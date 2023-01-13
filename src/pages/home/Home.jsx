import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/header/Header";

const Home = () => {
  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  const [recipes, setRecipes] = useState([]);
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    const { data } = await axios(url);
    setRecipes(data.hits);
  };

  console.log(recipes);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header
        mealType={mealType}
        setSelectedMeal={setSelectedMeal}
        setQuery={setQuery}
        getData={getData}
      />
    </div>
  );
};

export default Home;
