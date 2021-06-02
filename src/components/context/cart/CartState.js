import { useReducer } from "react";
import CartReducer from "./CartReducer";
import CartContext from "./CartContext";

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_CART_ITEM_QTY,
  DECREASE_CART_ITEM_QTY,
  CLEAR_CART,
  SET_COUPON_VALUE,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST
} from "../types";

const CartState = (props) => {
  const initialState = {
    cart: [],
    wishList:[],
    coupons: {
      NewComer: 5,
      loyal: 55,
      promo: 45,
    },
    couponValue: 5,
    shippingCharge: 15,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

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

  //Add to wish list
  const addToWishList = (product) => {
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: Object.assign(product, { qty: 1 }),
    });

    //Add to local storage
    var swishList = [];
    if (localStorage.getItem("wishList")) {
      swishList = JSON.parse(localStorage.getItem("wishList"));
    }
    swishList.push({
      id: product.id,
      image: product.image,
      price: product.price,
      qty: product.qty,
      title: product.title,
    });
    localStorage.setItem("wishList", JSON.stringify(swishList));
  };

  //Remove item from wish list
  const removeFromWishList = (id) => {
    dispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: id,
    });

    //remove wish list item from local storage
    if (localStorage.getItem("wishList")) {
      let swishList = JSON.parse(localStorage.getItem("wishList"));
      let filteredSwishList = swishList.filter((item) => item.id !== id);
      localStorage.setItem("wishList", JSON.stringify(filteredSwishList));
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

  const setCouponValue = (coupon) =>{
    dispatch({
      type: SET_COUPON_VALUE,
      payload: coupon
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        wishList: state.wishList,
        coupons: state.coupons,
        couponValue: state.couponValue,
        shippingCharge: state.shippingCharge,
        addToCart,
        removeFromCart,
        addToWishList,
        removeFromWishList,
        increaseCartItemQty,
        decreaseCartItemQty,
        clearCart,
        setLocalstorage,
        setCouponValue
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
