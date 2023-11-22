import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

interface Props {
  images: string[];
}

interface State {
  nav1: Slider | null;
  nav2: Slider | null;
}

export default class AsNavFor extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }
  slider1: Slider | null = null;
  slider2: Slider | null = null;

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div className="product-detail-slider">
        <Slider
          asNavFor={this.state.nav2 as Slider}
          ref={(slider) => (this.slider1 = slider)}
        >
          {this.props.images.map((image) => {
            return (
              <div className="product-detail-slider-img" key={image}>
                <img src={image} alt={image} />
              </div>
            );
          })}
        </Slider>
        <Slider
          asNavFor={this.state.nav1 as Slider}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {this.props.images.map((image) => {
            return (
              <div className="product-detail-img-slides" key={image}>
                <img src={image} alt={image} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
