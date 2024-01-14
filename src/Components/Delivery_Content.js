import React from "react";
import Inspire from "./common/Inspire";
import FoodCards from "../Components/common/FoodCards.js";
import Brands from "./common/Brand.js";

const Delivery_Content = ({ searchQuerry }) => {
  return (
    <div>
      <div className="delivery-section">
        <FoodCards searchQuerry={searchQuerry} />
      </div>
    </div>
  );
};

export default Delivery_Content;
