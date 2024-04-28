import React, { useState } from "react";

function SearchForm({ handleSearch }) {
  const [searchInput, setSearchInput] = useState(""); // to store search input value

  const handleChange = (event) => {
    setSearchInput(event.target.value); // Update search input value in state
    handleSearch(event); // Calls handleSearch function to perform search
  };

  return (
    <div>
      <input
        id="search"
        type="text"
        placeholder="Search Your Recent Transactions"
        value={searchInput} 
        onChange={handleChange}
      />
      <button>Search</button>
    </div>
  );
}

export default SearchForm;
