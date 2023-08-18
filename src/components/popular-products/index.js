import React from "react";
import "./style.scss";
import products from "../../utils/products.json";
import GridItem from "../grid-item";
import GridContainer from "../grid-container";
import { Link } from "react-router-dom";

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
                  <span>
                    <Link to="/" title={productItem.title}>
                      {productItem.title}
                    </Link>
                  </span>
                  <span className="popular-price">
                    {`$ ${productItem.price}`}
                  </span>
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
