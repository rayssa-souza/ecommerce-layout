import React from "react";
import "./style.scss";
import products from "../../utils/products.json";
import GridItem from "../grid-item";
import GridContainer from "../grid-container";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import FavoriteProductButton from "../favorite-product-button";
import SliderCarousel from "../slider-carrousel";

const PopularProducts = ({ children }) => {
  const { isDesktop } = useMediaQuery();
  return (
    <div className="popular-products">
      {isDesktop ? (
        <GridContainer>
          {products.popular_products.map((productItem, index) => {
            return (
              <GridItem
                xs={"33.33%"}
                sm={"33.33%"}
                lg={index === 2 ? "50%" : "25%"}
                spacing={5}
                key={productItem.id}
              >
                <div className="popular-products-img">
                  <Link to={productItem.url} title={productItem.title}>
                    <img alt="product-img" src={productItem.image} />
                  </Link>
                  <div className="popular-products-text">
                    <div className="popular-title-wrapper">
                      <h2>
                        <Link to={productItem.url} title={productItem.title}>
                          {productItem.title}
                        </Link>
                      </h2>
                      <FavoriteProductButton />
                    </div>
                    <h3 className="popular-price">{`$ ${productItem.price}`}</h3>
                  </div>
                </div>
              </GridItem>
            );
          })}
        </GridContainer>
      ) : (
        <SliderCarousel
          settings={{
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
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
          l
        >
          {products.popular_products.map((productItem, index) => {
            return (
              <div className="popular-products-img" key={productItem.id}>
                <Link to="/" title={productItem.title}>
                  <img alt="product-img" src={productItem.image} />
                </Link>
                <div className="popular-products-text">
                  <div className="popular-title-wrapper">
                    <h2>
                      <Link to="/" title={productItem.title}>
                        {productItem.title}
                      </Link>
                    </h2>
                    <FavoriteProductButton />
                  </div>
                  <h3 className="popular-price">{`$ ${productItem.price}`}</h3>
                </div>
              </div>
            );
          })}
        </SliderCarousel>
      )}
      {children}
    </div>
  );
};
export default PopularProducts;
