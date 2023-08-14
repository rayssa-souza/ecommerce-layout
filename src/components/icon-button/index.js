import React from "react";
import "./style.scss";

const IconButton = ({ children, icon, onClick }) => {
  return (
    <button className="button-icon" onClick={onClick}>
      {icon}
      {children}
    </button>
  );
};

export default IconButton;
