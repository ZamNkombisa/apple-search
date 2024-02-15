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
              {/* Display trackName of each favorite */}
              {item.trackName}
              {/* Button to remove item from favorites */}
              <button onClick={() => removeFromFavorites(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </details>
  );
};

export default Favorites;
