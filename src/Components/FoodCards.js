import React, { useContext, useEffect, useState } from "react";
//import RestaurentData from "../pages/RestaurentData.js";
import "../styles/FoodCard.css";
import { ShopContext } from "../Context/ShopContext.jsx";
import { Link } from "react-router-dom";

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

const FoodCards = ({searchQuery}) => {
  const [loading, setLoading] = useState(true);
  const { allProduct } = useContext(ShopContext);
  const [filteredResult, setFilteredResult] = useState([]);
  
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      // Initially, set the filtered restaurants to the entire dataset
      setFilteredResult(allProduct);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeoutID);
  }, [allProduct]);

  useEffect(() => {
    if (!loading) {
      // Filter restaurants based on the search query
      const filtered = allProduct.filter(
        (restaurant) =>
          restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          restaurant.special.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredResult(filtered);
      console.log(filtered);
    }
  }, [searchQuery, loading]);

  return (
    <div>
      <div className="restaurents-container">
        {loading ? (
          <CardsSkeleton />
        ) : (
          <div>
            <h2>Best Food for you in your locality</h2>
            <div className="card-container">

              {filteredResult.length>0 ? (
              filteredResult.map((data, index) => (
                <div className="card-box" key={index}>
                                  <Link to={`/product/${data._id}`}>

                  <div className="card-inbox">
                    <div className="card-image">
                        <img src={data.Image} alt="" className="foodImg"/>
                    </div>
                    <div className="card-name">
                      <p>{data.name}</p>
                      <div className="rating">
                        <span className="rating">{data.rating}</span>
                        <img
                          src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709401614/star_ehk049.png"
                          alt="star"
                        />
                      </div>
                    </div>
                    <div className="special">
                      <p className="special-name">{data.special}</p>
                      <p>₹{data.new_price}</p>
                    </div>
                    <div className="card-time">
                      <p>{data.time}</p>
                    </div>
                    <hr />
                    <div className="safety">
                      <img
                        src="https://res.cloudinary.com/dmn7qksnf/image/upload/v1709400688/safety_pjq57b.webp"
                        alt="safety"
                      />
                      <p>
                        Follows all Max Safety measures to ensure your food
                        is safe
                      </p>
                    </div>
                  </div>
                  </Link>
                </div>
              ))):(
                <p className="no-results">
                No restaurants found matching your search.
              </p>
              )
            }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default FoodCards;
