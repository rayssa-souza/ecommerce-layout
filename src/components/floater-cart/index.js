import React from "react";
import { useContext } from "react";
import { EcommerceContext } from "../../contexts/ecommerce-context";
import Button from "../button";
import CartProduct from "../cart-product";
import "./style.scss";
import { Link } from "react-router-dom";

const FloatingCart = () => {
  const { state } = useContext(EcommerceContext);

  return (
    <div className="floating-cart">
      <span>SHOPPING CART</span>

      <div className="floating-cart-product">
        {state.cart.map((item, index) => {
          return (
            <CartProduct
              cartItem={item}
              isLast={index === state.cart.length - 1}
              key={item.title}
            />
          );
        })}
      </div>
      <div className="floating-cart-total-and-button">
        <div className="floating-cart-total">
          <span>TOTAL</span>
          <div>
            <span>$</span>
            <span>
              {state.cart.reduce(
                (accumulator, currentValue) =>
                  accumulator + currentValue.price * currentValue.quantity,
                0
              )}
            </span>
          </div>
        </div>
        <Link to={"/cart"} title={"proceed to checkout"}>
          <Button text={"PROCEED TO CHECKOUT"} />
        </Link>
      </div>
    </div>
  );
};
export default FloatingCart;
