import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cart/CartContext";
const Item = (props) => {
  const cartContext = useContext(CartContext);
  const { cart, addToCart, removeFromCart } = cartContext;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GHS",
  });

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
        <Link
          to={`/product/${product.category}/${product.id}`}
          className="h-40 w-full bg-cover text-center overflow-hidden"
          style={{ backgroundImage: `url(${product.image})` }}
          title="Image"
        ></Link>
        <div className="leading-normal z-10 absolute mt-2 ml-2">
          <div
            className="line-through oldstyle-nums font-serif
             bg-red-500
            mb-2 mt-1 px-2 py-1 text-white"
          >
            {product.id + 6}% off
          </div>
        </div>
      </div>
      <div className="block">
        <Link to={`/product/${product.category}/${product.id}`}>
          <div className="py-1 font-semibold text-md px-1">{product.title}</div>
        </Link>

        <div className="px-6 pt-2 pb-2 flex justify-between">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {formatter.format(product.price)}
          </span>
          {cart?.length > 0 &&
          cart.filter((item) => item.id === product.id).length > 0 ? (
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
    </div>
  );
};

export default Item;
