import React from "react";
import "./style.scss";
import products from "../../utils/products.json";
import GridItem from "../grid-item";
import GridContainer from "../grid-container";
import { Link } from "react-router-dom";
import FavoriteProductButton from "../favorite-product-button";

const PopularProducts = ({ children }) => {
  return (
    <div className="popular-products">
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
                <Link to="/" title={productItem.title}>
                  <img alt="product-img" src={productItem.url} />
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
            </GridItem>
          );
        })}
      </GridContainer>
      {children}
    </div>
  );
};
export default PopularProducts;
