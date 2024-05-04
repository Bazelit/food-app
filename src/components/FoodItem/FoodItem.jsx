import styles from "./FoodItem.module.css";

const FoodItem = ({ food, setFoodId }) => {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt={food.title} />
      <div className={styles.itemContent}>
        <h2 className={styles.foodTitle}>{food.title}</h2>
        <button onClick={() => setFoodId(food.id)}>View Recipe</button>
      </div>
    </div>
  );
};

export default FoodItem;
