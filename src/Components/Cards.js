import React, { useState, useEffect } from "react";
import LoderImg from "./Images/loader-img.gif";
import { useDebounce } from "./Utility/Debounce";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

function Cards({ searchValue }) {
  const [recipes, setRecipes] = useState([]);
  const [searchrecipes, setSearchRecipes] = useState([]);
  const [next, setNext] = useState([]);
  const [loading, setLoading] = useState(true);
  const debouncedValue = useDebounce(searchValue, 1500);

  useEffect(() => {
    if (debouncedValue !== "") {
      fetchSearchValueRecipes(debouncedValue);
    } else {
      fetchRecipes();
    }
  }, [debouncedValue]);

  async function fetchSearchValueRecipes(value) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&app_key=c402f450702c419116b8f5f1c30c8d9f%20%09&app_id=b8c0c07a&q=${encodeURIComponent(
          value
        )}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data) {
        setSearchRecipes(data.hits);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setLoading(false);
    }
  }

  async function fetchRecipes() {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.edamam.com/api/recipes/v2?type=public&beta=true&app_id=b8c0c07a&app_key=c402f450702c419116b8f5f1c30c8d9f%20%09&ingr=5-80&diet=balanced&health=celery-free&health=crustacean-free&health=dairy-free&cuisineType=Indian&mealType=Breakfast&mealType=Dinner&mealType=Lunch&dishType=Salad&dishType=Sandwiches&dishType=Side%20dish&dishType=Soup&dishType=Starter&dishType=Sweets&imageSize=REGULAR"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setNext(data);
      if (data) {
        setRecipes(data.hits);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setLoading(false);
    }
  }

  const loadMore = async () => {
    setLoading(true);
    const response = await fetch(next._links.next.href);
    const data = await response.json();
    setRecipes([...recipes, ...data.hits]);
    setLoading(false);
  };

  return (
    <div className="cards-container">
      {loading && <p>Loading...</p>}
      {!loading && debouncedValue === "" && recipes.length === 0 && (
        <p>No recipes found.</p>
      )}
      {!loading &&
        debouncedValue === "" &&
        recipes.length > 0 &&
        recipes.map((recipe, index) => (
          <Link key={index} to={`/recipe/${btoa(recipe._links.self.href)}`}>
            <div className="card" style={{ width: "22rem" }}>
              <LazyLoadImage
                src={recipe.recipe.image}
                width={350}
                height={300}
                PlaceholderSrc={LoderImg}
                alt="Image Alt"
                effect="blur"
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.recipe.label}</h5>
                <p className="card-text">{recipe.recipe.cuisineType}cuisine</p>
              </div>
            </div>
          </Link>
        ))}
      {!loading &&
        debouncedValue !== "" &&
        searchrecipes.length === 0 && (
        <p>No recipes found for "{debouncedValue}".</p>
      )}
      {!loading &&
        debouncedValue !== "" &&
        searchrecipes.length > 0 &&
        searchrecipes.map((recipe, index) => (
          <Link key={index} to={`/recipe/${btoa(recipe._links.self.href)}`}>
            <div className="card" style={{ width: "22rem" }}>
              <LazyLoadImage
                src={recipe.recipe.image}
                width={350}
                height={300}
                PlaceholderSrc={LoderImg}
                alt="Image Alt"
                effect="blur"
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.recipe.label}</h5>
                <p className="card-text">{recipe.recipe.cuisineType}cuisine</p>
              </div>
            </div>
          </Link>
        ))}
      {!loading &&
        (debouncedValue === "" || (searchrecipes.length > 0 && debouncedValue !== "")) && (
        <button onClick={loadMore}>Load More</button>
      )}
    </div>
  );
}

export default Cards;

