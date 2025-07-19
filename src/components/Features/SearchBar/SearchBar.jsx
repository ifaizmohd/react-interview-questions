import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  //   Alternate approach for caching.
  //   const [cache, setCache] = useState({});
  const cache = useRef({});

  const fetchData = async () => {
    if (cache.current[searchQuery] === searchQuery) {
      setSearchResults(cache[searchQuery]);
      return;
    }
    const data = await fetch(
      `https://dummyjson.com/products/search?q=${searchQuery}`
    );
    const json = await data.json();
    setSearchResults(json?.products);
    cache.current[searchQuery] = json?.products;
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
