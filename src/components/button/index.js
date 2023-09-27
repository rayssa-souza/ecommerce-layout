import React from "react";
import clsx from "clsx";
import "./style.scss";

const Button = ({
  children,
  text = "Enter your text",
  size,
  color = "black",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={clsx({
        "button-default": true,
        [`button-${color}-color`]: true,
        [`button-size-${size}`]: true,
        "button-disabled": disabled,
      })}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      <span className="button-span">{text}</span>

      {children}
    </button>
  );
};

export default Button;
