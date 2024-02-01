import React, { useState } from "react";
import styles from "./SearchBox.module.css";

// SearchBox component with input field and search button
const SearchBox = ({ onSearch }) => {
  // State to track the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Handler function to update the search term as the user types
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handler function to trigger the search when the button is clicked
  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    // Container for the search box with input field and button
    <div className={styles.searchBox}>
      {/* Input field for entering the search term */}
      <input
        type="text"
        placeholder="Search"
        className={styles.searchInput}
        value={searchTerm}
        onChange={handleInputChange}
      />
      {/* Button to trigger the search */}
      <button className={styles.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

// Exporting the SearchBox component as the default export
export default SearchBox;
