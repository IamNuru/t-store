import React, { useContext } from "react";
import CartContext from "./context/cart/CartContext";
const Item = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GHS",
  });

  const cartContext = useContext(CartContext);
  const { cart, addToCart, removeFromCart } = cartContext;

  const { product } = props;

  const addProductToCart = () => {
    addToCart(product);
  };

  const removeProductFromCart = () => {
    removeFromCart(product.id);
  };
  return (
    <div className="w-full p-4">
      <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={product.image}
            alt=""
          />
        </div>
        <div className="p-4">
          <h2 className="mt-2 mb-2  font-bold">{product.title}</h2>
          <div className="mt-3 flex items-center">
            <span className="text-sm font-semibold line-through text-pink-600">
              Ghs
              {parseInt(product.price.toLocaleString()) + parseInt(product.id)}
            </span>
            &nbsp;
            <span className="font-bold text-md">
              Ghs{product.price.toLocaleString()}
            </span>
            &nbsp;
            <span className="text-sm text-pink-600">
              {formatter.format(100 - (parseInt(product.price.toLocaleString()) /(
                parseInt(product.id) +
                parseInt(product.price.toLocaleString()))*100))}
              % off
            </span>
          </div>
        </div>
        <div className="p-4 border-t border-b text-gray-700">
          {cart.filter((item) => item.id === product.id).length > 0 ? (
            <div
              onClick={removeProductFromCart}
              className="cursor-pointer bg-pink-200 text-pink-700 font-bold text-xl rounded w-full mx-2 px-4 text-center py-2"
            >
              Remove from Cart
            </div>
          ) : (
            <div
              onClick={addProductToCart}
              className="cursor-pointer bg-purple-200 text-purple-700 font-bold text-xl rounded w-full mx-2 px-4 text-center py-2"
            >
              Add to Cart
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
