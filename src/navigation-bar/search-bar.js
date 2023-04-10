import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Handle search logic here
    console.log(`Searching for "${query}"`);
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <div className="search-container">
        <input
          type="text"
          placeholder="Titles, people, genres"
          value={query}
          onChange={handleQueryChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
