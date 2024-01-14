import React from "react";
import logo from "../../assets/logo.avif";
import location from "../../assets/location.png";
import search from "../../assets/search.png";
import { Link } from "react-router-dom";
import "../../styles/Header.css";

export default function Header({ setSearchQuerry }) {
  const handleSearch = (e) => {
    setSearchQuerry(e.target.value);
  };

  return (
    <div>
      <header className="header">
        <nav className="header-nav">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <ul className="header-ul">
            <div className="container">
              <div className="location">
                <img src={location} alt="location" />
                <select>
                  <option value="kamalanagar">Kamalanagar, Anantapur</option>
                </select>
              </div>
              <div className="search">
                <img src={search} alt="search" />
              </div>
              <input
                type="text"
                placeholder="Search for restaurent, cuisine or a dish"
                onChange={handleSearch}
              />
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
}
