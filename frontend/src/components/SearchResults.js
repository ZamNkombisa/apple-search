import React from "react";

const SearchResults = ({ results, addToFavorites }) => {
  return (
    <div>
      {/* Heading for search results section */}
      <h2>Search Results</h2>
      <ul>
        {/* Map through results array and render each search result item */}
        {results.map((item) => (
          <li key={item.trackId}>
            {/* Display the name of the track */}
            <strong>{item.trackName}</strong> by {item.artistName}
            <br />
            {/* Display the primary genre of the track */}
            <small>Genre: {item.primaryGenreName}</small>
            <br />
            {/* Button to add the track to favorites */}
            <button onClick={() => addToFavorites(item)}>
              Add to Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
