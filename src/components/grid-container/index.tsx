import React, { ReactNode } from "react";
import "./style.scss";

interface Props {
  children: ReactNode;
}

const GridContainer = ({ children }: Props) => {
  return <div className="grid-container">{children}</div>;
};
export default GridContainer;
