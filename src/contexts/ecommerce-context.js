import React, { createContext, useEffect, useReducer, useState } from "react";

export const actionTypes = {
  ADD_FAVORITE: "ADD_FAVORITE",
  REMOVE_FROM_FAVORITE: "REMOVE_FROM_FAVORITE",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
};

export const actionCreators = {
  addFavorite: (payload) => ({ type: actionTypes.ADD_FAVORITE, payload }),
  addToCart: (payload) => ({ type: actionTypes.ADD_TO_CART, payload }),
  removeFromFavorite: (payload) => ({
    type: actionTypes.REMOVE_FROM_FAVORITE,
    payload: { title: payload },
  }),
  removeFromCart: (payload) => ({
    type: actionTypes.REMOVE_FROM_CART,
    payload: { title: payload },
  }),
};

export const intitialState = {
  favorites: [],
  cart: [],
};

export default function reducer(state = intitialState, { type, payload }) {
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

    default:
      throw Error("Invalid action type");
  }
}
const EcommerceContext = createContext({});

const EcommerceProvider = ({ children }) => {
  const hasKey = localStorage.getItem("ecommerceContext");
  const [state, dispatch] = useReducer(
    reducer,
    hasKey ? JSON.parse(hasKey) : intitialState
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
