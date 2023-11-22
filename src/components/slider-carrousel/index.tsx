import React, { ReactNode } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

interface Props {
  children: ReactNode;
  settings: Settings;
}
const SliderCarousel = ({ children, settings }: Props) => {
  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default SliderCarousel;
