import React, { createContext, useContext, useReducer } from "react";

import CartReducer from "./cartReducer";

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, { cart: [] });

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  return (
    <cartContext.Provider
      value={{ cart: state.cart, addToCart, removeFromCart }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;

export function useCart() {
  return useContext(cartContext);
}
