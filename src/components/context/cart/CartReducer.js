import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_CART_ITEM_QTY,
  DECREASE_CART_ITEM_QTY,
  CLEAR_CART,
} from "../types";

const CartReducer = (state, action) => {
  switch (action.type) {  
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };


    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };


    case INCREASE_CART_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };


    case DECREASE_CART_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
        ),
      };


    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return {
        ...state,
      };
  }
};

export default CartReducer;
