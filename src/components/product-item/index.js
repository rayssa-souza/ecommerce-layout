import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {
  EcommerceContext,
  actionCreators,
} from "../../contexts/ecommerce-context";
import "./style.scss";
import useMediaQuery from "../../hooks/useMediaQuery";
import IconButton from "../icon-button";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const ProductItem = ({ product }) => {
  const { state, dispatch } = useContext(EcommerceContext);
  const { isDesktop } = useMediaQuery();
  const isFavorite = state.favorites.find((item) => {
    return item.title === product.title;
  });

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(actionCreators.removeFromFavorite(product.title));
    } else {
      dispatch(actionCreators.addFavorite(product));
    }
  };
  console.log(state);

  return (
    <div className="product-item-img">
      <Link to={product.url} title={product.title}>
        <img alt="product-img" src={product.image} />
      </Link>
      <div className="product-item-text">
        {isDesktop && (
          <div className="product-item-wrapper">
            <h2>
              <Link to={product.url} title={product.title}>
                {product.title}
              </Link>
            </h2>
            <div className="product-item-favorite">
              <IconButton
                icon={isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
                color={isFavorite ? "red" : undefined}
                size={"medium"}
                onClick={handleFavorite}
              />
            </div>
          </div>
        )}
        {!isDesktop && (
          <>
            <h2>
              <Link to={product.url} title={product.title}>
                {product.title}
              </Link>
            </h2>

            <div className="product-item-icon">
              <div className="product-item-favorite">
                <IconButton
                  icon={isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
                  color={isFavorite ? "red" : undefined}
                  size={"medium"}
                  onClick={handleFavorite}
                />
              </div>
            </div>
          </>
        )}
        <h3 className="product-item-price">{`$ ${product.price}`}</h3>
      </div>
    </div>
  );
};

export default ProductItem;
