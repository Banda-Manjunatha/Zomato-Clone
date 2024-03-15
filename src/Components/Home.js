import React, { useContext, useState } from "react";
import "../styles/Home.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { signOut } from "firebase/auth";
import { database } from "./Firebase";
import { ShopContext } from "../Context/ShopContext";
import FoodCards from "./FoodCards";

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const signoutClick = () => {
    signOut(database).then((value) => {
      console.log(value);
      navigate("/");
    });
  };
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <>
      <div className="home-section">
        <div className="hero-section">
          <div className="nav-section">
            <div className="navbar">
              <ul>
                <li className="app">
                    <div className="appdiv">
                      <img
                        src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709401173/mobile_opfmsq.png"
                        alt=""
                      />
                      <p>Get the App</p>
                    </div>
                </li>

                <li>Investor Relations</li>
                <li onClick={signoutClick} className="signout">
                  Sign Out
                </li>  
               <Link to='/cart'> <li className="orders">Orders {getTotalCartItems()}</li>  </Link>
              </ul>
            </div>
          </div>
          <div className="heading-section">
            <div className="logo">
              <img src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709400440/sticker_jtc7qk.avif" alt=""/>
            </div>
            <div className="caption">
              <p>Discover the best food & drinks in Bengaluru</p>
            </div>
            <div className="search-container">
              <img
                src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709401008/location_loxedn.png"  alt=""
              />
              <select className="search-select">
                <option value="town">Bengaluru</option>
              </select>
              <input
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
      </div>
      <FoodCards searchQuery={searchQuery}/>
      <Footer />
    </>
  );
};

export default Home;
