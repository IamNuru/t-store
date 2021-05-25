import { useReducer } from "react";
import CartReducer from "./CartReducer";
import CartContext from "./CartContext";

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_CART_ITEM_QTY,
  DECREASE_CART_ITEM_QTY,
  CLEAR_CART,
} from "../types";

const CartState = (props) => {
  const initialState = {
    cart: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  //actions
  //Add to cart
  const addToCart = (product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: Object.assign(product, {qty : 2}),
    });
  };

  //Remove from cart
  const removeFromCart = (id) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id,
    });
  };

  //Increase cart item quantity
  const increaseCartItemQty = (id) => {
    dispatch({
      type: INCREASE_CART_ITEM_QTY,
      payload: id,
    });
  };

  //decrease cart item quantity
  const decreaseCartItemQty = (id) => {
    dispatch({
      type: DECREASE_CART_ITEM_QTY,
      payload: id,
    });
  };

  //change 

  //clear cart
  const clearCart = () => {
    dispatch({
      type: CLEAR_CART,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeFromCart,
        increaseCartItemQty,
        decreaseCartItemQty,
        clearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
