import React, { useState } from "react";

// Favorites component receives props: favorites array and removeFromFavorites function
const Favorites = ({ favorites, removeFromFavorites }) => {
  // Define local state using useState hook to track whether favorites are shown or hidden
  const [showFavorites, setShowFavorites] = useState(false);

  return (
    // Use details and summary HTML elements to create a collapsible section for favorites
    <details>
      <summary onClick={() => setShowFavorites(!showFavorites)}>
        Favorites
      </summary>
      {/* Render favorites list if showFavorites is true */}
      {showFavorites && (
        <ul>
          {/* Map through favorites array to render each item */}
          {favorites.map((item) => (
            <li key={item.trackId}>
              <br />
              {/* Display the album art */}
              <img src={item.artworkUrl100} alt="Album Art" />
              <br />
              {/* Display trackName of each favorite */}
              <strong>{item.trackName}</strong> By {item.artistName}
              {/* Display the primary genre of the track */}
              <small>Genre: {item.primaryGenreName}</small>
              <br />
              {/* Display the duration of the track */}
              <small>Duration: {formatDuration(item.trackTimeMillis)}</small>
              <br />
              {/* Display the release date of the track */}
              <small>Release Date: {formatReleaseDate(item.releaseDate)}</small>
              <br />
              {/* Button to remove item from favorites */}
              <button onClick={() => removeFromFavorites(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </details>
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

export default Favorites;
