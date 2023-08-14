import React from "react";
import "./style.scss";

const Button = ({ children, text, size = "medium", icon }) => {
  return (
    <button className={`${size}`}>
      {icon && <div className="button-icon">{icon}</div>}
      {text && <span className="button-span">{text}</span>}
      {children}
    </button>
  );
};

export default Button;
