import React, { useEffect, useState } from "react";
import "./styles.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(true);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[searchQuery]) {
      setSearchResults(cache[searchQuery]);
      return;
    }
    const data = await fetch(
      `https://dummyjson.com/products/search?q=${searchQuery}`
    );
    const json = await data.json();
    setSearchResults(json?.products);
    setCache((prev) => ({ ...prev, [searchQuery]: json.products }));
  };
  useEffect(() => {
    const timer = setTimeout(fetchData, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Enter text you want to search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
      />
      {showResults && (
        <div className="search-results-container">
          {searchResults?.map((p) => (
            <div key={p.id} className="search-result">
              {p.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
