import React, { useEffect, useContext } from "react";
import ProductsContext from "../context/products/ProductsContext";
import CartContext from "../context/cart/CartContext";

const SingleProduct = (props) => {
  const { loading, getProduct, product } = useContext(ProductsContext);
  const { cart, addToCart, removeFromCart} = useContext(CartContext);

  useEffect(() => {
    async function getSpecifiedProduct() {
      await getProduct(props.match.params.id);
    }

    getSpecifiedProduct();
  });
  return (
    <div>
      {loading !== null ? (
        product !== null ? (
          <div className="w-full bg-purple-600 md:w-2/3">
            <h2 className="w-full text-center">{product.title}</h2>
            <div className="w-full h-48 md:w-60 md:h-48">
              <img src={product.image} alt="Product Image" 
              className="w-full h-full"/>
            </div>
            <div className="block md:flex">
              <span className="">Price: {product.price}</span>
              {cart?.length > 0 &&
              cart.filter((item) => item.id === product.id).length > 0 ? (
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-2 text-md font-semibold text-pink-500 mr-2 mb-2 cursor-pointer"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove From Cart
                </span>
              ) : (
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-2 text-md font-semibold text-pink-500 mr-2 mb-2 cursor-pointer"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </span>
              )}
            </div>
            <div>
              <p className="">{product.description}</p>
            </div>
          </div>
        ) : (
          "Product Not Found"
        )
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default SingleProduct;
