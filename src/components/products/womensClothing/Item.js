import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cart/CartContext";

const Item = (props) => {
  const cartContext = useContext(CartContext);
  const { cart, addToCart, removeFromCart, addToWishList, removeFromWishList } = cartContext;

  const { product } = props;
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
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <Link to={`/product/${product.category}/${product.id}`}>
        <img
          className="w-full min-h-48 max-h-48"
          src={product.image}
          alt={product.title}
        />
      </Link>
      <div className="px-6 py-2">
        <Link to={`/product/${product.category}/${product.id}`}>
          <div className="font-bold text-md mb-2 hover:text-red-600 transition duration-500">{product.title}</div>
        </Link>
      </div>
      <div className="px-6 pt-2 pb-2">
        {
          cart?.length > 0 &&
          cart.filter((item) => item.id === product.id).length > 0 ? (
        <span  className="rounded-full px-1 py-1 text-sm font-semibold mr-2 mb-2"
          onClick={() => addToWishList(product)}>
          &#128155;
        </span>
        )
        :
        (
          <span  className="p-2 bg-purple-300 rounded-full px-1 py-1 text-sm font-semibold mr-2 mb-2"
          onClick={() => removeFromWishList(product)}>
          &#128155;
        </span>
        )
        }
        
        <span className="whitespace-nowrap inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {formatter.format(product.price)}
        </span>
        {cart?.length > 0 &&
        cart.filter((item) => item.id === product.id).length > 0 ? (
          <span
            className="whitespace-nowrap inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-pink-500 mr-2 mb-2 cursor-pointer"
            onClick={removeProductFromCart}
          >
            Remove From Cart
          </span>
        ) : (
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-pink-500 mr-2 mb-2 cursor-pointer"
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
