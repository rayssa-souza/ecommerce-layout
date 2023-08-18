import React from "react";
import "./style.scss";

const IconButton = ({ children, icon, onClick, color = "black" }) => {
  const getColor = () => {
    if (color === "red") {
      return "button-color-red";
    }

    if (color === "gray") {
      return "button-color-gray";
    }

    return "button-color-black";
  };
  return (
    <button className={`button-icon ${getColor()}`} onClick={onClick}>
      {icon}
      {children}
    </button>
  );
};

export default IconButton;
