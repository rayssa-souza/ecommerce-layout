import React from "react";
import clsx from "clsx";
import { useState } from "react";
import "./style.scss";

const IconButton = ({
  children,
  icon,
  size = "small",
  onClick,
  color = "black",
  disabled = false,
}) => {
  return (
    <button
      className={clsx({
        "button-icon": true,
        [`${color}-color`]: true,
        [`${size}-size`]: true,
        "button-disabled": disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {children}
    </button>
  );
};

export default IconButton;
