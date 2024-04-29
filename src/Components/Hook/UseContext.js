import React, { createContext, useState, useContext } from "react";

const RecipeContext = createContext();

export const RecipeContextProvider = ({ children }) => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedFilterValue, setSelectedFilterValue] = useState(null);

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  const handleApplyFilter = () => {
    if (selectedIcon) {
      setSelectedFilterValue(selectedIcon);
    }
  };

  const clearFilter = () => {
    setSelectedIcon(null);
  };
  const contextValue = {
    selectedIcon,
    handleIconClick,
    handleApplyFilter,
    setSelectedIcon,
    clearFilter,
    selectedFilterValue,
  };

  return (
    <RecipeContext.Provider value={contextValue}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => useContext(RecipeContext);
