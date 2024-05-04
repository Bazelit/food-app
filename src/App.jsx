import Container from "./components/Container/Container";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import FoodList from "./components/FoodList";
import InnerContainer from "./components/InnerContainer/InnerContainer";
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";

import { useState } from "react";

const App = () => {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("715415");

  return (
    <>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </>
  );
};

export default App;
