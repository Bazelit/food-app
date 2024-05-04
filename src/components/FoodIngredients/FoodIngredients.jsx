import styles from "./FoodIngredients.module.css";

const FoodIngredients = ({ food }) => {
  return (
    <>
      {food.extendedIngredients.map((ingredient) => (
        <div className={styles.itemContainer}>
          <div className={styles.imageContainer}>
            <img
              className={styles.itemImage}
              src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
              alt={ingredient.name}
            />
          </div>
          <div className={styles.nameContainer}>
            <p className={styles.name}>{ingredient.name}</p>
            <p className={styles.amount}>
              {ingredient.amount} {ingredient.unit}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FoodIngredients;
