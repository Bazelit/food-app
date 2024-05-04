import { useState, useEffect } from "react";
import styles from "./FoodDetails.module.css";
import FoodIngredients from "../FoodIngredients/FoodIngredients";

const FoodDetails = ({ foodId }) => {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "c1467bd4c8a24b75884e5c41319278db";

  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      setIsLoading(false);
      console.log(food);
    };
    fetchFood();
  }, [foodId]);

  return (
    <div className={styles.recipeCard}>
      <div className={styles.recipeInfo}>
        <h2 className={styles.recipeTitle}>{food.title}</h2>
        <img className={styles.recipeImage} src={food.image} alt={food.title} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏱{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👪 Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🥩 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐄 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>
              💲{(food.pricePerServing / 100).toFixed(2)} Per serving
            </strong>
          </span>
        </div>
      </div>
      <h2>Ingredients</h2>
      {isLoading ? <p>Loading...</p> : <FoodIngredients food={food} />}

      <h2 style={{ marginBottom: "10px" }}>Instructions</h2>
      <div className={styles.recipeInstructions}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ol>
            {food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default FoodDetails;
