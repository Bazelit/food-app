import FoodItem from "./FoodItem/FoodItem";

const FoodList = ({ foodData, setFoodId }) => {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem setFoodId={setFoodId} key={food.id} food={food} />
      ))}
    </div>
  );
};

export default FoodList;
