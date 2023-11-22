import React, { createContext, useEffect, useReducer, ReactNode } from "react";
import { iCartProduct, FavoriteProduct } from "../@types/product";

export enum actionTypes {
  ADD_FAVORITE = "ADD_FAVORITE",
  REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE",
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  UPDATE_CART_ITEM_QUANTITY = "UPDATE_CART_ITEM_QUANTITY",
}

export const actionCreators = {
  addFavorite: (payload: FavoriteProduct) => ({
    type: actionTypes.ADD_FAVORITE,
    payload,
  }),
  addToCart: (payload: iCartProduct) => ({
    type: actionTypes.ADD_TO_CART,
    payload,
  }),
  removeFromFavorite: (payload: string) => ({
    type: actionTypes.REMOVE_FROM_FAVORITE,
    payload: { title: payload },
  }),
  removeFromCart: (payload: string) => ({
    type: actionTypes.REMOVE_FROM_CART,
    payload: { title: payload },
  }),
  updateCartItemQuantity: (payload: { title: string; quantity: number }) => ({
    type: actionTypes.UPDATE_CART_ITEM_QUANTITY,
    payload: { quantity: payload.quantity, title: payload.title },
  }),
};

type StateType = {
  favorites: FavoriteProduct[];
  cart: iCartProduct[];
};
export const intitialState: StateType = {
  favorites: [],
  cart: [],
};

export default function reducer(
  state: StateType,
  { type, payload }: { type: string; payload: any }
) {
  switch (type) {
    case actionTypes.ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    case actionTypes.ADD_TO_CART:
      if (state.cart.find((item) => item.title === payload.title)) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.title === payload.title) {
              return { ...item, quantity: item.quantity + payload.quantity };
            }
            return item;
          }),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, payload],
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.title !== payload.title),
      };

    case actionTypes.REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.title !== payload.title
        ),
      };
    case actionTypes.UPDATE_CART_ITEM_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.title === payload.title) {
            return { ...item, quantity: payload.quantity };
          }
          return item;
        }),
      };

    default:
      throw Error("Invalid action type");
  }
}

export interface EcommerceContextType {
  state: StateType;
  dispatch: React.Dispatch<any>;
}

interface EcommerceContextProps {
  children: ReactNode;
}
const EcommerceContext = createContext<EcommerceContextType | null>(null);

const EcommerceProvider = ({ children }: EcommerceContextProps) => {
  const hasCache = localStorage.getItem("ecommerceContext");
  const [state, dispatch] = useReducer(
    reducer,
    hasCache ? (JSON.parse(hasCache) as StateType) : intitialState
  );
  const value = { state, dispatch };
  useEffect(() => {
    localStorage.setItem("ecommerceContext", JSON.stringify(state));
  }, [state]);

  return (
    <EcommerceContext.Provider value={value}>
      {children}
    </EcommerceContext.Provider>
  );
};

export { EcommerceContext, EcommerceProvider };
