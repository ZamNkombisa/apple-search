import React from "react";
import { Link } from "react-router-dom";

// Header component
const Header = ({ clearSearchResults }) => {
  const handleHomeClick = () => {
    console.log("Home button clicked");
    clearSearchResults();
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          {/* Link to home page with onClick event */}
          <Link className="navbar-brand" to="/" onClick={handleHomeClick}>
            Home
          </Link>
          {/* Navigation menu */}
          <div>
            <ul>
              <li>
                {/* Link to favorites page */}
                <Link className="nav-link" to="/favorites">
                  Favorites
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
