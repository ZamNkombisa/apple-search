import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchForm from "./components/SearchForm.js";
import SearchResults from "./components/SearchResults.js";
import Favorites from "./components/Favorites.js";
import Header from "./components/Header.js";
import "bootstrap/dist/css/bootstrap.min.css";
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
    // Show alert notification
    alert(`Added '${item.trackName}' to favorites!`);
    // Redirect to favorites page
    window.location.href = "/favorites";
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

  // Function to clear only search results
  const clearSearchResults = () => {
    setSearchResults([]);
  };

  return (
    <Router>
      <div>
        {/* Header with clearSearchResults prop */}
        <Header clearSearchResults={clearSearchResults} />

        {/* Main content */}
        <div className="main-content">
          {/* Search form component */}
          <SearchForm setSearchResults={setSearchResults} />

          {/* Routes */}
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
