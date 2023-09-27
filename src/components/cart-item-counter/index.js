import React from "react";
import { useContext } from "react";
import { EcommerceContext } from "../../contexts/ecommerce-context";
import "./style.scss";

const CartIconCounter = () => {
  const { state } = useContext(EcommerceContext);

  const cartItensQty = state.cart.length;

  return (
    <div className="cart-icon-counter">
      {cartItensQty > 0 && (
        <div className="cart-icon-counter-circle">
          <div>{cartItensQty}</div>
        </div>
      )}
    </div>
  );
};
export default CartIconCounter;
