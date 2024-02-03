import React, { useState } from "react";
import axios from "axios";

const SearchForm = ({ setSearchResults }) => {
  // State variables for search term and media type
  const [searchTerm, setSearchTerm] = useState("");
  const [mediaType, setMediaType] = useState("all");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Send GET request to iTunes Search API
      const response = await axios.get("https://itunes.apple.com/search", {
        params: {
          term: searchTerm,
          media: mediaType,
        },
      });
      // Update search results state with the response data
      setSearchResults(response.data.results);
    } catch (error) {
      console.error(error); // Log any errors to the console
    }
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      {/* Input field for search term */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search term"
      />
      {/* Dropdown menu for media type */}
      <select value={mediaType} onChange={(e) => setMediaType(e.target.value)}>
        <option value="all">All</option>
        <option value="music">Music</option>
        <option value="movie">Movie</option>
        <option value="podcast">Podcast</option>
        <option value="books">Books</option>
      </select>
      {/* Submit button */}
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
