import React from "react";

const nextArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        background: "gray",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        border: "1px solid",
        boxShadow: "1px 2px 3px rgba(0, 0, 0, 0.2)",
      }}
      onClick={onClick}
    >
      {" "}
    </div>
  );
};

export default nextArrow;
