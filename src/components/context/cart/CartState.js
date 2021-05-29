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
    couponValue: 5,
    shippingCharge: 15,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  //format the currency value
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GHS",
  });

  if (localStorage.getItem("cart")) {
    initialState.cart = initialState.cart.concat(
      JSON.parse(localStorage.getItem("cart"))
    );
  }
  //actions
  const setLocalstorage = () =>{
    if (localStorage.getItem("cart")) {
      initialState.cart = initialState.cart.concat(
        JSON.parse(localStorage.getItem("cart"))
      );
    }
  }
  //Add to cart
  const addToCart = (product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: Object.assign(product, { qty: 1 }),
    });

    //Add to local storage
    var scart = [];
    if (localStorage.getItem("cart")) {
      scart = JSON.parse(localStorage.getItem("cart"));
    }
    scart.push({
      id: product.id,
      image: product.image,
      price: product.price,
      qty: product.qty,
      title: product.title,
    });
    localStorage.setItem("cart", JSON.stringify(scart));
  };

  //Remove from cart
  const removeFromCart = (id) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id,
    });

    //remove from local storage
    if (localStorage.getItem("cart")) {
      let scart = JSON.parse(localStorage.getItem("cart"));
      let filteredScart = scart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(filteredScart));
    }
  };

  //Increase cart item quantity
  const increaseCartItemQty = (id) => {
    dispatch({
      type: INCREASE_CART_ITEM_QTY,
      payload: id,
    });

    // handle local storage
    if (localStorage.getItem("cart")) {
      let scart = JSON.parse(localStorage.getItem("cart"));
      let fileredScart = scart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(fileredScart));
    }
  };

  //decrease cart item quantity
  const decreaseCartItemQty = (id) => {
    dispatch({
      type: DECREASE_CART_ITEM_QTY,
      payload: id,
    });

    // handle local storage
    if (localStorage.getItem("cart")) {
      let scart = JSON.parse(localStorage.getItem("cart"));
      let fileredScart = scart.map((item) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(fileredScart));
    }
  };

  //change

  //clear cart
  const clearCart = () => {
    dispatch({
      type: CLEAR_CART,
    });

    // handle local storage
    if (localStorage.getItem("cart")) {
      localStorage.removeItem("cart");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        couponValue: state.couponValue,
        shippingCharge: state.shippingCharge,
        addToCart,
        removeFromCart,
        increaseCartItemQty,
        decreaseCartItemQty,
        clearCart,
        setLocalstorage
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
