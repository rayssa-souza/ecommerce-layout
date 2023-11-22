import React from "react";
import clsx from "clsx";
import "./style.scss";

interface Props {
  text: string;
  size?: string;
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
}
const Button = ({
  text = "Enter your text",
  size,
  color = "black",
  onClick,
  disabled = false,
}: Props) => {
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
    </button>
  );
};

export default Button;
