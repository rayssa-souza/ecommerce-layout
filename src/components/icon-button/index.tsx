import React, { ReactNode } from "react";
import clsx from "clsx";
import "./style.scss";

interface Props {
  icon: ReactNode;
  size?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  color?: string;
  disabled?: boolean;
  children?: ReactNode;
}

const IconButton = ({
  icon,
  size = "small",
  onClick,
  color = "black",
  disabled = false,
  children,
}: Props) => {
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
