import { useContext } from "react";
import {
  EcommerceContext,
  EcommerceContextType,
} from "../../contexts/ecommerce-context";
import Button from "../button";
import IconButton from "../icon-button";
import { AiOutlineClose } from "react-icons/ai";
import CartProduct from "../cart-product";
import "./style.scss";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import GridContainer from "../grid-container";
import GridItem from "../grid-item";

interface Props {
  onClose: () => void;
}

const FloatingCart = ({ onClose }: Props) => {
  const { state } = useContext(EcommerceContext) as EcommerceContextType;

  return (
    <div className="floating-cart">
      <div className="floating-cart-wrapper">
        <GridContainer>
          <GridItem xs={"70%"} sm={"70%"} lg={"70%"} spacing={0}>
            <div className="floating-cart-overlay" onClick={onClose}></div>
          </GridItem>
          <GridItem xs={"30%"} sm={"30%"} lg={"30%"} spacing={0}>
            <div className="floating-cart-content">
              <div className="floating-cart-topper">
                <span>SHOPPING CART</span>
                <IconButton
                  icon={<AiOutlineClose />}
                  size={"medium"}
                  onClick={onClose}
                />
              </div>
              <div className="floating-cart-product">
                {state.cart.length === 0 && (
                  <div className="floating-cart-empty">
                    <div className="floating-cart-empty-icon-span">
                      <FaCartArrowDown />
                    </div>
                    <span>Your cart is empty!</span>
                  </div>
                )}
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
                      {state.cart
                        .reduce(
                          (accumulator, currentValue) =>
                            accumulator +
                            currentValue.price * currentValue.quantity,
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </div>
                </div>
                <Link to={"/cart"} title={"proceed to checkout"}>
                  <Button
                    text={"PROCEED TO CHECKOUT"}
                    disabled={state.cart.length === 0}
                  />
                </Link>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};
export default FloatingCart;
