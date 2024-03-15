import React, { useContext } from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css'
import { ShopContext } from "../Context/ShopContext";


export default function Header({ setSearchQuerry }) {
  const handleSearch = (e) => {
    setSearchQuerry(e.target.value);
  };
  const {getTotalCartItems} = useContext(ShopContext);
  console.log(getTotalCartItems())
  return (
    <div>
      <header className="header">
        <nav className="header-nav">
          <Link to="/home">
            <img src='https://res.cloudinary.com/dmn7qksnf/image/upload/v1709400348/logo_qyvu6e.avif' alt="logo" className="logo" />
          </Link>
          <ul className="header-ul">
            <div className="container">
              <div className="location">
                <img src='https://res.cloudinary.com/dmn7qksnf/image/upload/v1709401008/location_loxedn.png' alt="location" />
                <select>
                  <option value="kamalanagar">Bengaluru</option>
                </select>
              </div>
              <div className="search">
                <img src='https://res.cloudinary.com/dmn7qksnf/image/upload/v1710414825/icons8-search-50_wr0flr.png' alt="search" />
              </div>
              <input
                type="text"
                placeholder="Search for restaurent, cuisine or a dish"
                onChange={handleSearch}
              />
            </div>
          </ul>
        <Link to='/cart' ><button className="cart">Orders {getTotalCartItems()}</button></Link>
        </nav>
      </header>
    </div>
  );
}
