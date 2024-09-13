// In App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchForm from "./components/SearchForm.js";
import SearchResults from "./components/SearchResults.js";
import Favorites from "./components/Favorites.js";
import Header from "./components/Header.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
    localStorage.setItem("favorites", JSON.stringify([...favorites, item]));
    alert(`Added '${item.trackName}' to favorites!`);
  };

  const removeFromFavorites = (itemToRemove) => {
    const updatedFavorites = favorites.filter(
      (item) => item.trackId !== itemToRemove.trackId
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const clearSearchResults = () => {
    setSearchResults([]);
  };

  return (
    <Router>
      <div>
        <Header clearSearchResults={clearSearchResults} />
        <div className="main-content">
          <SearchForm setSearchResults={setSearchResults} />
          <Routes>
            <Route
              path="/"
              element={
                <SearchResults
                  results={searchResults}
                  addToFavorites={addToFavorites}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <Favorites
                  favorites={favorites}
                  addToFavorites={addToFavorites}
                  removeFromFavorites={removeFromFavorites}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
