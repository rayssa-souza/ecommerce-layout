import {
  EcommerceContext,
  EcommerceContextType,
  actionCreators,
} from "../../contexts/ecommerce-context";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineClose,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import IconButton from "../icon-button";
import clsx from "clsx";
import "./style.scss";
import { iCartProduct } from "../../@types/product";

interface Props {
  cartItem: iCartProduct;
  isLast: boolean;
}

const CartProduct = ({ cartItem, isLast }: Props) => {
  const { state, dispatch } = useContext(
    EcommerceContext
  ) as EcommerceContextType;

  const isFavorite = state.favorites.find((item) => {
    return item.title === cartItem.title;
  });

  const handleFavoriteByCart = () => {
    if (isFavorite) {
      dispatch(actionCreators.removeFromFavorite(cartItem.title));
    } else {
      dispatch(actionCreators.addFavorite(cartItem));
    }
  };
  const handleUpdateItemQuantity = (cartItem) => {
    dispatch(actionCreators.updateCartItemQuantity(cartItem));
  };

  const handleRemoveFromCart = () => {
    dispatch(actionCreators.removeFromCart(cartItem.title));
  };

  return (
    <div
      className={clsx({
        "cart-product": true,
        "cart-product-no-border": isLast,
      })}
    >
      <div className="cart-product-image-wrapper">
        <Link to={`/p/${cartItem.id}`} title={cartItem.title}>
          <img src={cartItem.image[0]} alt={cartItem.title} />
        </Link>
        <div className="cart-product-favorite">
          <IconButton
            icon={isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
            color={isFavorite ? "red" : undefined}
            size={"medium"}
            onClick={handleFavoriteByCart}
          />
        </div>
      </div>

      <div className="cart-product-wrapper">
        <div className="cart-product-title-and-price">
          <div>
            <Link to={`/p/${cartItem.id}`} title={cartItem.title}>
              <h2>{cartItem.title}</h2>
            </Link>
            <h3>$ {cartItem.price}</h3>
          </div>
          <div className="cart-product-qtd">
            <div>
              <IconButton
                icon={<AiOutlineMinus />}
                size={"small"}
                onClick={() =>
                  handleUpdateItemQuantity({
                    ...cartItem,
                    quantity: cartItem.quantity - 1,
                  })
                }
                disabled={cartItem.quantity === 1}
              />
            </div>

            <div className="cart-product-counter">{cartItem.quantity}</div>
            <div>
              <IconButton
                icon={<AiOutlinePlus />}
                size={"small"}
                onClick={() =>
                  handleUpdateItemQuantity({
                    ...cartItem,
                    quantity: cartItem.quantity + 1,
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="cart-product-remove-icon">
          <IconButton
            icon={<AiOutlineClose />}
            size={"small"}
            onClick={handleRemoveFromCart}
          />
        </div>
      </div>
    </div>
  );
};
export default CartProduct;
