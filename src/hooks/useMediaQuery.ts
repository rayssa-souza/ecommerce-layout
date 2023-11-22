import { useState, useEffect } from "react";

const useMediaQuery = () => {
  const [state, setState] = useState({
    windowWidth: window.innerWidth,
    isMobile: false,
    isDesktop: false,
    isTablet: false,
  });

  useEffect(() => {
    const resizeHandler = () => {
      const currentWindowWidth = window.innerWidth;
      setState({
        windowWidth: currentWindowWidth,
        isMobile: currentWindowWidth < 767,
        isDesktop: currentWindowWidth > 1360,
        isTablet: currentWindowWidth > 767 && currentWindowWidth < 1360,
      });
    };
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return state;
};
export default useMediaQuery;
