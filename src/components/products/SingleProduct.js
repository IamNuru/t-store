import React, { useEffect, useContext } from "react";
import ProductsContext from "../context/products/ProductsContext";
import CartContext from "../context/cart/CartContext";
import Item from "./womensClothing/Item"

const SingleProduct = (props) => {
  const { loading, getProduct, product, getRelatedProducts, relatedProducts } = useContext(ProductsContext);
  const { cart, addToCart, removeFromCart} = useContext(CartContext);

  useEffect(() => {
    async function getSpecifiedProduct() {
      await getProduct(props.match.params.id);
      await getRelatedProducts(product)
    }
    getSpecifiedProduct();
    
  });
  return (
    <div className="block md:flex">
      {loading !== null ? (
        product !== null ? (
          <div className="w-full p-4 md:min-w-96">
            <h2 className="w-full text-center">{product.title}</h2>
            <div className="mb-2 h-full block">
              <img src={product.image} alt="Product Image" 
              className="w-full min-h-60 max-h-60 p-2"/>
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
      <div className=" w-full p-4 min-w-48 shadow rounded-md block md:min-w-52">
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
