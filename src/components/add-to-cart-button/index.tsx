import React from "react";
import IconButton from "../icon-button";
import Button from "../button";
import useMediaQuery from "../../hooks/useMediaQuery";
import {
  EcommerceContext,
  EcommerceContextType,
  actionCreators,
} from "../../contexts/ecommerce-context";
import { useState } from "react";
import { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./style.scss";
import { iProductDetail } from "../../@types/product";

interface Props {
  product: iProductDetail;
  onClick?: () => void;
}

const AddToCartButton = ({ product, onClick }: Props) => {
  const { dispatch } = useContext(EcommerceContext) as EcommerceContextType;

  const { isDesktop } = useMediaQuery();
  const [count, setCount] = useState(1);

  const handleCounterPlus = () => {
    setCount(count + 1);
  };
  localStorage.clear();

  const handleCounterMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(actionCreators.addToCart({ ...product, quantity: count }));
    if (onClick) onClick();
  };

  return (
    <div className="add-to-cart-button">
      <div className="add-to-cart-button-wrapper">
        <div className="add-to-cart-button-minus">
          <IconButton
            icon={<AiOutlineMinus />}
            size={"medium"}
            onClick={handleCounterMinus}
            disabled={count === 1}
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
      {!isDesktop && (
        <Button
          text={"ADD TO BASKET"}
          size={"small"}
          onClick={handleAddToCart}
        />
      )}
      {isDesktop && (
        <Button
          text={"ADD TO BASKET"}
          size={"large"}
          onClick={handleAddToCart}
        />
      )}
    </div>
  );
};

export default AddToCartButton;
