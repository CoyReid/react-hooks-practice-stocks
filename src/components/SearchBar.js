import React from "react";

function SearchBar({sortStonks, setSortStonks, filterStonks, setFilterStonks}) {
  
  function sortChange(e) {
    setSortStonks(e.target.value)
  }

  function filterChange(e) {
    setFilterStonks(e.target.value)
  }
  
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="All"
          name="sort"
          checked={sortStonks === "All"}
          onChange={sortChange}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortStonks === "Alphabetically"}
          onChange={sortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="PriceLow"
          name="sort"
          checked={sortStonks === "PriceLow"}
          onChange={sortChange}
        />
        Least Expensive
      </label>
      <label>
        <input
          type="radio"
          value="PriceHigh"
          name="sort"
          checked={sortStonks === "PriceHigh"}
          onChange={sortChange}
        />
        Most Expensive
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={filterChange} value={filterStonks}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
