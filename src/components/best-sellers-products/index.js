import React from "react";
import "./style.scss";
import GridContainer from "../grid-container";
import GridItem from "../grid-item";
import products from "../../utils/products.json";

const BestSellersProducts = ({ children }) => {
  return (
    <div className="best-sellers-products">
      <GridContainer>
        {products.best_sellers.map((productItem) => {
          return (
            <GridItem
              xs={"50%"}
              sm={"33%"}
              lg={"16.66%"}
              spacing={5}
              key={productItem.id}
            >
              <div className="best-sellers-products-img">
                <img
                  alt="product-img"
                  src={
                    process.env.PUBLIC_URL +
                    "/images/ordinary-imgs/" +
                    productItem.url
                  }
                />
                <div className="best-sellers-products-text">
                  <span>{productItem.title}</span>
                  <span className="best-sellers-price">
                    $ {productItem.price}
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
export default BestSellersProducts;
