import React, { useEffect, useState } from "react";
import "../styles/AtpRestaurent.css";
import Header from "./common/Header.js";
import Footer from "./common/Footer.js";
import filter from "../assets/filter.png";
import TabOptions from "./TabOptions.js";
import { Link } from "react-router-dom";

const AtpRestaurent = () => {
  const [searchQuerry, setSearchQuerry] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="atp-page">
        <Header setSearchQuerry={setSearchQuerry} />
        <div className="adress-container">
          <div className="adress">
            <Link to="/home">
              <span> Home </span>
            </Link>
            <div>/</div>
            <span> India </span>
            <div>/</div>
            <Link to="/home">
              <span> Annatapur </span>
            </Link>
            <div>/</div>
            <p>Anantapur Locality Restaurents </p>
          </div>
        </div>

        <div className="filters-container">
          <div className="filter-inbox">
            <div className="filters filter-box">
              <img src={filter} alt="filter image" />
              <p>Filters</p>
            </div>
            <div className="ratings filter-box">
              <p>Rating: 4.0+</p>
            </div>
            <div className="veg filter-box">
              <p>Pure Veg</p>
            </div>
            <div className="cuisines filter-box">
              <p>Cuisines</p>
            </div>
          </div>
        </div>
        <TabOptions searchQuerry={searchQuerry} />

        <div className="explore-container">
          <div className="explore-text">
            <h4>Explore options near me</h4>
            <p>Popular cuisines snear me</p>
            <p>Popular restaurent types near me</p>
            <p>Cities We Deliver To</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AtpRestaurent;
