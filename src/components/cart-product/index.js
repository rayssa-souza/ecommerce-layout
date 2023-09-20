import React from "react";
import {
  EcommerceContext,
  actionCreators,
} from "../../contexts/ecommerce-context";
import { Link } from "react-router-dom";
import { useContext } from "react";
import GridContainer from "../../components/grid-container";
import GridItem from "../../components/grid-item";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import IconButton from "../icon-button";

import "./style.scss";

const CartProduct = () => {
  const { state, dispatch } = useContext(EcommerceContext);

  return (
    <div className="cart-product">
      <GridContainer>
        {state.cart.map((item) => {
          return (
            <GridItem xs={"100%"} sm={"100%"} lg={"60%"} key={item.id}>
              <div className="cart-product-info">
                <Link
                  className="cart-product-image-link"
                  to={`/p/${item.id}`}
                  title={item.title}
                >
                  <img src={item.image[0]} alt={item.title} />
                </Link>
                <div className="cart-product-wrapper">
                  <div className="cart-product-title-and-price">
                    <div>
                      <Link to={`/p/${item.id}`} title={item.title}>
                        <h2>{item.title}</h2>
                      </Link>
                      <h3>$ {item.price}</h3>
                    </div>
                    <div className="cart-product-qtd">
                      <div>
                        <IconButton icon={<AiOutlinePlus />} size={"small"} />
                      </div>
                      <div className="cart-product-counter">1</div>
                      <div>
                        <IconButton icon={<AiOutlineMinus />} size={"small"} />
                      </div>
                    </div>
                  </div>
                  <div className="cart-product-remove-icon">
                    <IconButton icon={<AiOutlineClose />} size={"small"} />
                  </div>
                </div>
              </div>
            </GridItem>
          );
        })}
      </GridContainer>
    </div>
  );
};
export default CartProduct;
