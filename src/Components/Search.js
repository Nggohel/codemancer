import React, { useState } from "react";
import Container from "./Conatainer";

function Search({ onSearchChange }) {
  const [searchValue, setSearchValue] = useState("");
  const [showContainer, setShowContainer] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleShowContainer = () => {
    setShowContainer(true);
  };

  const handleCloseContainer = () => {
    setShowContainer(false);
  };
  const handleApplyFilter = (selectedIcon) => {
    setSelectedFilter(selectedIcon);
    setShowContainer(false);
    onSearchChange(searchValue);
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearchChange(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchChange(searchValue);
  };
  console.log("filterdata", selectedFilter);
  return (
    <div>
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="What do you want to eat?"
          aria-label="Search"
          value={searchValue}
          onChange={handleInputChange}
        />
        <button className="btn" type="button" onClick={handleShowContainer}>
          Show Filter
        </button>
      </form>
      {showContainer && (
        <div>
          <Container
            className="filter-conatainer"
            onClose={handleCloseContainer}
          ></Container>
        </div>
      )}
    </div>
  );
}

export default Search;
