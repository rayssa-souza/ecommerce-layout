import React from "react";
import { useContext } from "react";
import {
  EcommerceContext,
  EcommerceContextType,
} from "../../contexts/ecommerce-context";
import Container from "../../components/container";
import GridContainer from "../../components/grid-container";
import GridItem from "../../components/grid-item";
import ProductItem from "../../components/product-item";
import "./style.scss";
import BreadCrumb from "../../components/bread-crumb";
import { AiFillHeart } from "react-icons/ai";

const Favorites = () => {
  const { state } = useContext(EcommerceContext) as EcommerceContextType;

  return (
    <div className="favorites">
      <Container>
        <BreadCrumb category={{ title: "Favorites", url: "/favorites" }} />
        <span className="favorites-span">Favorites</span>
        <GridContainer>
          {state.favorites.map((productItem) => {
            return (
              <GridItem
                xs={"50%"}
                sm={"50%"}
                lg={"25%"}
                spacing={5}
                key={productItem.title}
              >
                <ProductItem product={productItem} key={productItem.title} />
              </GridItem>
            );
          })}
        </GridContainer>
        {state.favorites.length === 0 && (
          <div className="favorites-empty">
            <div className="favorites-empty-wrapper">
              <div className="favorites-empty-icon">
                <AiFillHeart />
              </div>
              <span>Pick your favorite ones!</span>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Favorites;
