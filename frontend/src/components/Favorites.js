import React from "react";

const Favorites = ({ favorites, removeFromFavorites }) => {
  return (
    <div>
      {/* Heading for favorites section */}
      <h2>Favorites</h2>
      <ul>
        {/* Map through favorites array and render each favorite item */}
        {favorites.map((item) => (
          <li key={item.trackId}>
            {/* Display the name of the favorite item */}
            {item.trackName}
            {/* Button to remove the favorite item */}
            <button onClick={() => removeFromFavorites(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
