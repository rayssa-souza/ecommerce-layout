import React from "react";
import { useContext } from "react";
import Container from "../../components/container";
import BreadCrumb from "../../components/bread-crumb";
import {
  EcommerceContext,
  actionCreators,
} from "../../contexts/ecommerce-context";
import "./style.scss";

const Cart = () => {
  const { state, dispatch } = useContext(EcommerceContext);

  return (
    <div className="cart">
      <Container>
        <BreadCrumb category={{ title: "Cart", url: "/cart" }} />
        <span className="cart-span">Cart</span>
      </Container>
    </div>
  );
};

export default Cart;
