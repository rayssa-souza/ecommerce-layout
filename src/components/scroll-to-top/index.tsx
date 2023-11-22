import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import toggleBody from "../../utils/toggleBody";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    toggleBody("visible");
  }, [pathname]);

  return null;
};
export default ScrollToTop;
