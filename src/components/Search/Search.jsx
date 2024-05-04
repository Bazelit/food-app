import styles from "./Search.module.css";
import { useState, useEffect } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "c1467bd4c8a24b75884e5c41319278db";

const Search = ({ foodData, setFoodData }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
    };
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
      />
    </div>
  );
};

export default Search;
