import React, { ReactNode } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

interface Props {
  children: ReactNode;
  xs: string;
  sm: string;
  lg: string;
  spacing: number;
}
const GridItem = ({ children, xs, sm, lg, spacing = 0 }: Props) => {
  const { isMobile, isTablet, isDesktop } = useMediaQuery();

  const getWidth = () => {
    if (isMobile) return xs;
    if (isTablet) return sm;
    if (isDesktop) return lg;

    return null;
  };

  if (getWidth() === null) {
    return null;
  }

  return (
    <div
      className="grid-item"
      style={{
        width: `calc(${getWidth()} - ${spacing * 2}px)`,
        margin: spacing,
      }}
    >
      {children}
    </div>
  );
};
export default GridItem;
