import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import Favorites from "./components/Favorites";
import "./App.css";

const App = () => {
  // State variables to store search results and favorites
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // useEffect hook to load favorites from localStorage on component mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Function to add an item to favorites
  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
    // Update localStorage
    localStorage.setItem("favorites", JSON.stringify([...favorites, item]));
  };

  // Function to remove an item from favorites
  const removeFromFavorites = (itemToRemove) => {
    const updatedFavorites = favorites.filter(
      (item) => item.trackId !== itemToRemove.trackId
    );
    setFavorites(updatedFavorites);
    // Update localStorage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      {/* Main heading */}
      <h1>iTunes Search App</h1>
      {/* Search form component */}
      <SearchForm setSearchResults={setSearchResults} />
      {/* Search results component */}
      <SearchResults results={searchResults} addToFavorites={addToFavorites} />
      {/* Favorites component */}
      <Favorites
        favorites={favorites}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
    </div>
  );
};

export default App;
