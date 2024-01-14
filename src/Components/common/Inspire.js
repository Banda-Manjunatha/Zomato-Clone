import React, { useState, useEffect } from "react";
import "../../styles/Inspire.css";
import InspireImagesData from "../../pages/InspireImagesData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../common/carousel/nextArrow.js";
import PrevArrow from "../common/carousel/prevArrow.js";
import Slider from "react-slick";

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

const SkeletonLoader = () => (
  <div className="skeleton-inspire">
    <div className="skeleton-container">
      <div className="skeleton-heading"></div>
      <div className="skeleton-items-row">
        {[...Array(6)].map((_, index) => (
          <div className="skeleton-item" key={index}>
            <div className="skeleton-image"></div>
            <div className="skeleton-name"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Inspire = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set the duration for the skeleton loading effect

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <div className="inspiration-container">
        <div className="inpiration-box">
          {loading ? (
            // Display skeleton loader while loading
            <SkeletonLoader />
          ) : (
            <>
              <h2>Inspiration for your first order</h2>
              <div className="inspire-images">
                <Slider {...settings}>
                  {InspireImagesData.map((imageData, index) => (
                    <div className="items" key={index}>
                      <div className="image">
                        <img src={imageData.image} alt={imageData.name} />
                      </div>
                      <div className="image-name">
                        <p>{imageData.name}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inspire;
