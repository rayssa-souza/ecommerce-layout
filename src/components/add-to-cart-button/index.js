import React from "react";
import IconButton from "../icon-button";
import Button from "../button";
import useMediaQuery from "../../hooks/useMediaQuery";
import {
  EcommerceContext,
  actionCreators,
} from "../../contexts/ecommerce-context";
import { useState } from "react";
import { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./style.scss";

const AddToCartButton = ({ product }) => {
  const { dispatch } = useContext(EcommerceContext);

  const { isDesktop } = useMediaQuery();
  const [count, setCount] = useState(1);

  const handleCounterPlus = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  localStorage.clear();

  const handleCounterMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(actionCreators.addToCart({ ...product, quantity: count }));
  };

  return (
    <div className="add-to-cart-button">
      <div className="add-to-cart-button-wrapper">
        <div className="add-to-cart-button-minus">
          <IconButton
            icon={<AiOutlineMinus />}
            size={"medium"}
            onClick={handleCounterMinus}
          />
        </div>
        <div className="add-to-cart-button-counter">{count}</div>
        <div className="add-to-cart-button-plus">
          <IconButton
            icon={<AiOutlinePlus />}
            size={"medium"}
            onClick={handleCounterPlus}
          />
        </div>
      </div>
      {isDesktop && (
        <Button
          text={"ADD TO BASKET"}
          size={"large"}
          onClick={handleAddToCart}
        />
      )}
      {!isDesktop && (
        <Button text={"ADD TO BASKET"} onClick={handleAddToCart} />
      )}
    </div>
  );
};

export default AddToCartButton;
