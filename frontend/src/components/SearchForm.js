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
      // Send GET request to backend server
      const response = await axios.get("http://localhost:5000/search", {
        params: {
          term: searchTerm, // Search term from input field
          media: mediaType, // Media type selected from dropdown menu
        },
      });
      console.log(response.data); // Log response data to console
      setSearchResults(response.data.results); // Update search results state with the response data
    } catch (error) {
      console.error(error); // Log any errors to the console
    }
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      {/* Input field for search term */}
      <label htmlFor="searchInput">Search:</label>
      <input
        id="searchInput"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update search term state as user types
        placeholder="Search term"
      />
      {/* Dropdown menu for media type */}
      <select value={mediaType} onChange={(e) => setMediaType(e.target.value)}>
        <option value="all">All</option>
        <option value="music">Music</option>
        <option value="movie">Movie</option>
        <option value="podcast">Podcast</option>
        <option value="ebook">Books</option>
        <option value="audiobook">Audio Books</option>
      </select>
      {/* Submit button */}
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
