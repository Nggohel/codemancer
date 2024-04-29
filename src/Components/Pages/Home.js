import React, { useState } from "react";
import Search from "../Search";
import Cards from "../Cards";

function Home() {
  const [searchValue, setSearchValue] = useState("");
  

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <Search onSearchChange={handleSearchChange} />
      <Cards searchValue={searchValue} />
    </div>
  );
}

export default Home;
