import React from "react";
import "./style.scss";
import GridContainer from "../grid-container";
import GridItem from "../grid-item";
import products from "../../utils/products.json";
import FavoriteProductButton from "../favorite-product-button";
import { Link } from "react-router-dom";

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
                <Link to="/" title={productItem.title}>
                  <img alt="product-img" src={productItem.url} />
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
            </GridItem>
          );
        })}
      </GridContainer>
      {children}
    </div>
  );
};
export default BestSellersProducts;
