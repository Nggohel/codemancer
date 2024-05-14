import React, { createContext, useState, useContext } from "react";

const RecipeContext = createContext();

export const RecipeContextProvider = ({ children }) => {
  
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedFilterValue, setSelectedFilterValue] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [next, setNext] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  const handleApplyFilter = () => {
    if (selectedIcon) {
      setSelectedFilterValue(selectedIcon);
    }
  };

  const handleClearFilter = () => {
    setSelectedIcon(null);
    setSelectedFilterValue(null);
  };

  const contextValue = {
    selectedIcon,
    handleIconClick,
    handleApplyFilter,
    setSelectedIcon,
    handleClearFilter,
    selectedFilterValue,
    recipes,
    setRecipes,
    next,
    setNext,
    loading,
    setLoading,
  };

  return (
    <RecipeContext.Provider value={contextValue}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => useContext(RecipeContext);
