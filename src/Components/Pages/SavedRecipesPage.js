import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
function SavedRecipesPage() {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("yourRecipes")) || [];
    setSavedRecipes(storedRecipes);
  }, []);

  const handleRemoveRecipe = (index) => {
    const updatedRecipes = savedRecipes.filter((_, i) => i !== index);
    setSavedRecipes(updatedRecipes);
    localStorage.setItem("yourRecipes", JSON.stringify(updatedRecipes));
  };

  return (
    <div className="saved-recipes-container">
      <br></br>
      <h4>Your Saved Recipes</h4>
      <br></br>
      <div className="recipes-list">
        {savedRecipes.length > 0 ? (
          savedRecipes.map((recipe, index) => (
            <div className="card" style={{ width: "23rem", height: "28rem" }}>
              <LazyLoadImage
                src={recipe.image}
                width={370}
                height={300}
                alt="Image Alt"
                effect="blur"
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.label}</h5>
                <p className="card-text"> {recipe.cuisineType} cuisine</p>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveRecipe(index)}
                >
                  <b> Remove</b>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No saved recipes</p>
        )}
      </div>
    </div>
  );
}

export default SavedRecipesPage;
