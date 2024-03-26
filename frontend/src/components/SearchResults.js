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
            {/* Display the album art */}
            <img src={item.artworkUrl100} alt="Album Art" />
            <br />
            {/* Display the primary genre of the track */}
            <small>Genre: {item.primaryGenreName}</small>
            <br />
            {/* Display the duration of the track */}
            <small>Duration: {formatDuration(item.trackTimeMillis)}</small>
            <br />
            {/* Display the release date of the track */}
            <small>Release Date: {formatReleaseDate(item.releaseDate)}</small>
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

// Helper function to format track duration
function formatDuration(milliseconds) {
  const totalSeconds = milliseconds / 1000;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Helper function to format release date
function formatReleaseDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString();
}

export default SearchResults;
