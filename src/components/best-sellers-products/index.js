import React from "react";
import "./style.scss";

import products from "../../utils/products.json";
import FavoriteProductButton from "../favorite-product-button";
import Sliders from "../slider-carrousel";
import { Link } from "react-router-dom";
import SliderCarousel from "../slider-carrousel";

const BestSellersProducts = ({ children }) => {
  return (
    <div className="best-sellers-products">
      <SliderCarousel
        settings={{
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          pauseOnHover: true,

          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: false,
                swipeToSlide: true,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: false,
                swipeToSlide: true,
              },
            },
          ],
        }}
      >
        {products.best_sellers.map((productItem) => {
          return (
            <div className="best-sellers-products-img" key={productItem.id}>
              <Link to="/" title={productItem.title}>
                <img alt="product-img" src={productItem.image} />
              </Link>
              <div className="best-sellers-products-text">
                <div className="best-sellers-title-wrapper">
                  <h2>
                    <Link to="/" title={productItem.title}>
                      {productItem.title}
                    </Link>
                  </h2>
                  <FavoriteProductButton />
                </div>

                <h3 className="best-sellers-price">$ {productItem.price}</h3>
              </div>
            </div>
          );
        })}
      </SliderCarousel>

      {children}
    </div>
  );
};
export default BestSellersProducts;
