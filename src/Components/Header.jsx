// Header.js

import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router if you're using it
import "../css/header.css";

const Header = () => {
  return (
    <header className="app-header">
      <h1>Comic Generator</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
