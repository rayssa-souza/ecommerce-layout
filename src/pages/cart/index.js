import React from "react";
import Container from "../../components/container";
import BreadCrumb from "../../components/bread-crumb";
import CartProduct from "../../components/cart-product";
import GridContainer from "../../components/grid-container";
import GridItem from "../../components/grid-item";
import Button from "../../components/button";
import { useMemo } from "react";
import { EcommerceContext } from "../../contexts/ecommerce-context";
import { useContext } from "react";
import "./style.scss";

const Cart = () => {
  const { state } = useContext(EcommerceContext);
  const cartShipping = useMemo(
    () => parseFloat((Math.random() * 50).toFixed(2)),
    []
  );

  const cartSubTotal = state.cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  return (
    <div className="cart">
      <Container>
        <BreadCrumb category={{ title: "Shopping Cart", url: "/cart" }} />
        <span className="cart-span">Shopping Cart</span>
        <div className="cart-wrapper">
          <GridContainer>
            {state.cart.map((cartItem, index) => {
              return (
                <GridItem xs={"100%"} sm={"100%"} lg={"60%"} key={cartItem.id}>
                  <CartProduct
                    cartItem={cartItem}
                    isLast={index === state.cart.length - 1}
                  />
                </GridItem>
              );
            })}
          </GridContainer>
          <div className="cart-disabled-checkout">
            <span>CART TOTALS</span>
            <div className="cart-summary">
              <div className="cart-subtotal-price">
                <span>Subtotal</span>
                <div className="cart-wrapper-price">
                  <span> $</span>
                  <span>{cartSubTotal ? cartSubTotal.toFixed(2) : "0.00"}</span>
                </div>
              </div>
              <div className="cart-shipping-price">
                <span>Shipping</span>
                <div className="cart-wrapper-price">
                  <span> $</span>
                  <span> {cartSubTotal ? cartShipping : "0.00"}</span>
                </div>
              </div>
              <div className="cart-total-price">
                <span>Total</span>
                <div className="cart-wrapper-price">
                  <span> $</span>
                  <span>
                    {cartSubTotal && cartShipping
                      ? (cartShipping + cartSubTotal).toFixed(2)
                      : "0.00"}
                  </span>
                </div>
              </div>
            </div>
            <Button disabled={true} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
