import React from "react";
import "./style.scss";
import products from "../../utils/products.json";
import GridItem from "../grid-item";
import GridContainer from "../grid-container";

const PopularProducts = ({ children }) => {
  return (
    <div className="popular-products">
      <GridContainer>
        {products.popular_products.map((productItem) => {
          return (
            <GridItem
              xs={"33%"}
              sm={"33%"}
              lg={"33%"}
              spacing={5}
              key={productItem.id}
            >
              <div className="popular-products-img">
                <img
                  alt="product-img"
                  src={
                    process.env.PUBLIC_URL +
                    "/images/ordinary-imgs/" +
                    productItem.url
                  }
                />
                <div className="popular-products-text">
                  <span>{productItem.title}</span>
                  <span className="popular-price"> $ {productItem.price}</span>
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
