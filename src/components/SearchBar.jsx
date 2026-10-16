
import React from "react";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="d-flex justify-content-center align-items-center mb-4">
      <div className="product-search">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>

        <input
          type="text"
          className="form-control"
          placeholder="Search perfumes by brand or name..."
          aria-label="Search perfumes"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
