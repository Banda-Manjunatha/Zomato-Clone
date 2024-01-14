import React, { useEffect, useState } from "react";
import star from "../../assets/star.png";
import RestaurentData from "../../pages/RestaurentData.js";
import safety from "../../assets/safety.webp";
import "../../styles/FoodCard.css";
import Inspire from "./Inspire.js";
import Brand from "./Brand.js";

const CardsSkeleton = () => (
  <div className="skeleton-cards">
    <div className="skeleton-cardHeading"></div>
    <div className="skeleton-cards-row">
      {[...Array(30)].map((_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton-cardImage"></div>
          <div className="skeleton-cardName"></div>
          <div className="skeleton-cardName2"></div>
          <hr className="skeleton-hr" />
          <div className="skeleton-safety"></div>
          <div className="skeleton-safety"></div>
        </div>
      ))}
    </div>
  </div>
);
const FoodCards = ({ searchQuerry }) => {
  const [loading, setLoading] = useState(true);
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(RestaurentData);
  const [showInspireBrand, setShowInspireBrand] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timeoutID = setTimeout(() => {
      setFilteredRestaurants(
        RestaurentData.filter(
          (data) =>
            data.name.toLowerCase().includes(searchQuerry.toLowerCase()) ||
            data.special.toLowerCase().includes(searchQuerry.toLowerCase())
        )
      );
      setShowInspireBrand(
        filteredRestaurants.length === RestaurentData.length ||
          searchQuerry.length === 0
      );
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutID);
  }, [searchQuerry, RestaurentData, filteredRestaurants.length]);

  return (
    <div>
      {showInspireBrand && (
        <>
          <Inspire />
          <Brand />
        </>
      )}
      <div className="restaurents-container">
        {loading ? (
          <CardsSkeleton />
        ) : (
          <>
            <h2>Best Food for you in your locality</h2>
            <div className="card-container">
              {filteredRestaurants.length > 0 ? (
                filteredRestaurants.map((data, index) => (
                  <div className="card-box" key={index}>
                    <div className="card-inbox">
                      <div className="card-image">
                        <img src={data.Image} alt="image" />
                      </div>
                      <div className="card-name">
                        <p>{data.name}</p>
                        <div className="rating">
                          <span className="rating">{data.rating}</span>
                          <img src={star} alt="star" />
                        </div>
                      </div>
                      <div className="special">
                        <p className="special-name">{data.special}</p>
                        <p>{data.prize}</p>
                      </div>
                      <div className="card-time">
                        <p>{data.time}</p>
                      </div>
                      <hr />
                      <div className="safety">
                        <img src={safety} alt="safety" />
                        <p>
                          Follows all Max Safety measures to ensure your food is
                          safe
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-results">
                  No restaurants found matching your search.
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FoodCards;
