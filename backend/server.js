// Import required modules
const express = require("express");
const axios = require("axios");
const helmet = require("helmet");

// Create Express application
const app = express();

// Use Helmet middleware for security headers
app.use(helmet());

// Parse JSON request bodies
app.use(express.json());

// Define route to handle search requests
app.get("/search", async (req, res) => {
  try {
    // Extract search term and media type from query parameters
    const { term, media } = req.query;

    // Send GET request to iTunes Search API
    const response = await axios.get("https://itunes.apple.com/search", {
      params: {
        term,
        media,
      },
    });

    // Send response with data from iTunes API
    res.json(response.data);
  } catch (error) {
    // Log error to console
    console.error(error);
    // Send error response with status code 500
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Set the port number for the server
const PORT = process.env.PORT || 5000;

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
