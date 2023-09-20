import React from "react";
import clsx from "clsx";
import "./style.scss";

const Button = ({
  children,
  text = "Enter your text",
  size = "small",
  color = "black",
  onClick,
}) => {
  return (
    <button
      className={clsx({
        "button-default": true,
        [`button-${color}-color`]: true,
        [`button-${size}`]: true,
      })}
      onClick={onClick}
    >
      <span className="button-span">{text}</span>
      {children}
    </button>
  );
};

export default Button;
