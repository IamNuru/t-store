import React, { useEffect, useContext, useState } from "react";
import ProductsContext from "../context/products/ProductsContext";
import CartContext from "../context/cart/CartContext";
import Item from "./womensClothing/Item"

const SingleProduct = (props) => {
  const {setProductToNull, loading, getProduct, getProducts, product, getRelatedProducts, relatedProducts } = useContext(ProductsContext);
  const {  cart, addToCart, removeFromCart} = useContext(CartContext);
  useEffect(() => {
    getProduct(props.match.params.id);
    getRelatedProducts(props.match.params.cat);
    return() =>{
      setProductToNull()
    }
    // eslint-disable-next-line
  },[]);
  return (
    <div className="block md:flex">
      {loading !== null ? (
        product !== null ? (
          <div className="w-full p-4 md:min-w-96">
            <h2 className="w-full text-center font-semibold text-xl">{product.title}</h2>
            <div className="mb-2 min-h-96 block">
              <img src={product.image} alt={product.title}
              className="w-full h-full p-2"/>
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
      <div className="w-full p-4 md:w-96 shadow rounded-md block">
        <h2 className="font-semibold">Products you might like</h2>
        {
            relatedProducts !== null ? (
                relatedProducts.length > 0 ? (
                    relatedProducts.map( (item, index) => {
                        return(<Item product={item} key={index} />)
                    })
                ) 
                :
                ('No related products')
            ) 
            : 
            ('Loading')
                    }
      </div>
    </div>
  );
};

export default SingleProduct;
