import React from "react";
import Container from "../../components/container";
import BreadCrumb from "../../components/bread-crumb";
import CartProduct from "../../components/cart-product";
import "./style.scss";

const Cart = () => {
  return (
    <div className="cart">
      <Container>
        <BreadCrumb category={{ title: "Shopping Cart", url: "/cart" }} />
        <span className="cart-span">Shopping Cart</span>
        <CartProduct />
      </Container>
    </div>
  );
};

export default Cart;
