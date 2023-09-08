import React from "react";
import clsx from "clsx";
import "./style.scss";

const IconButton = ({
  children,
  icon,
  size = "default",
  onClick,
  color = "black",
}) => {
  return (
    <button
      className={clsx({
        "button-icon": true,
        [`${color}-color`]: true,
        [`${size}-size`]: true,
      })}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};

export default IconButton;
