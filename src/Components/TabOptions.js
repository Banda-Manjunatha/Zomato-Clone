import React from "react";
import "../styles/TabOptions.css";
import "../Components/Delivery_Content.js";
import Delivery_Content from "./Delivery_Content";

const TabOptions = ({ searchQuerry }) => {
  return (
    <div>
      <section className="taboptions">
        <div className="tab-item active-tab">
          <div
            className="tabimage-container "
            style={{ background: "#FCEEC0" }}
          >
            <img
              src={
                "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
              }
              className="tab-image "
            />
          </div>
          <p className="tab-name ">Delivery</p>
        </div>
      </section>
      <Delivery_Content searchQuerry={searchQuerry} />
    </div>
  );
};

export default TabOptions;
