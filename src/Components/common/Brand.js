import React, { useEffect, useState } from "react";
import BrandData from "../../pages/BrandData.js";
import "../../styles/Brand.css";

const BrandSkeleton = () => (
  <div className="skeleton-brand">
    <div className="bskeleton-heading"></div>
    <div className="bskeleton-items-row">
      {[...Array(5)].map((_, index) => (
        <div className="bskeleton-item" key={index}>
          <div className="bskeleton-image"></div>
          <div className="bskeleton-name"></div>
          <div className="bskeleton-time"></div>
        </div>
      ))}
    </div>
  </div>
);

const Brand = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutID = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeoutID);
  }, []);

  return (
    <div>
      {loading ? (
        <BrandSkeleton />
      ) : (
        <>
          <div className="brand-container">
            <h2>Top Brands For You</h2>
            <div className="hotels">
              {BrandData.map((imageData, index) => (
                <div className="brands" key={index}>
                  <div className="brand-image">
                    <img src={imageData.image} alt="image" />
                  </div>
                  <div className="image-name">
                    <p>{imageData.name}</p>
                    <span>{imageData.span}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Brand;
