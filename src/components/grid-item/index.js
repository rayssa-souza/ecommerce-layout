import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

const GridItem = ({ children, xs, sm, lg, spacing = 0 }) => {
  const { isMobile, isTablet, isDesktop } = useMediaQuery();

  const getWidth = () => {
    if (isMobile) return xs;
    if (isTablet) return sm;
    if (isDesktop) return lg;

    return "100%";
  };

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
