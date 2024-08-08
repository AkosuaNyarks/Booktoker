import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import booklogo from "../assests/booklogo.jpg";
import "../styles/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={booklogo} alt="Site Logo" className="logo-image"/>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/discoverbooks" className="nav-links" onClick={closeMobileMenu}>
              Discover Books
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/review" className="nav-links" onClick={closeMobileMenu}>
              Review
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
