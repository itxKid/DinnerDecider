import { useState } from "react";
import foods from "./data/food.js";

//always random
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function FoodPicker() {
//gets all food data
const allFoods = Object.values(foods);

const [remainingFoods, setRemainingFoods] = useState(() =>
    shuffle(allFoods)
);

const [winnerHistory, setWinnerHistory] = useState([]);

//final winner
if (remainingFoods.length === 1) {
    return (
        <div>
            <h1>Winner!</h1>
            <img src={remainingFoods[0].image} width="250" />
            <h2>{remainingFoods[0].name}</h2>
        </div>
    );
}

const foodOne = remainingFoods[0];
const foodTwo = remainingFoods[1];

function handleClick(winner) {
    const loser = winner.id === foodOne.id ? foodTwo : foodOne;

    setWinnerHistory((prev) => [...prev, winner]);

    setRemainingFoods((prev) =>
      prev.filter((food) => food.id !== loser.id)
    );
}

  return (
    <div className = "image-container">
      <img 
        class = "image1"
        src={foodOne.image}
        onClick={() => handleClick(foodOne)}
      />

      <img
        class = "image2"
        src={foodTwo.image}
        onClick={() => handleClick(foodTwo)}
      />
    </div>
  );
}

export default FoodPicker;