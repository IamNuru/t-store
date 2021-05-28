import React, { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
const Item = (props) => {
  const cartContext = useContext(CartContext);
  const { cart, addToCart, removeFromCart } = cartContext;

  const addProductToCart = () => {
    addToCart(product);
  };

  const removeProductFromCart = () => {
    removeFromCart(product.id);
  };

  const { product } = props;
  return (
    <div className="block p-2 rounded border-gray-300 border bg-white">
      <div className="w-full flex">
        <div
          className="h-40 w-full bg-cover text-center overflow-hidden"
          style={{ backgroundImage: `url(${product.image})` }}
          title="Image"
        ></div>
        <div className="leading-normal z-10 absolute mt-2 ml-2">
          <div
            className="min-w-24 text-gray-600 font-bold transition duration-500 hover:text-gray-900
            mb-2"
          >
            view Details
          </div>
        </div>
      </div>
      <div className="px-6 pt-2 pb-2 flex justify-between">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Ghc{product.price}
        </span>
        {cart?.length > 0 && cart.filter((item) => item.id === product.id).length > 0 ? (
          <span
            className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-pink-500 mr-2 mb-2"
            onClick={removeProductFromCart}
          >
            Remove From Cart
          </span>
        ) : (
          <span
            className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-pink-500 mr-2 mb-2"
            onClick={addProductToCart}
          >
            Add to Cart
          </span>
        )}
      </div>
    </div>
  );
};

export default Item;
