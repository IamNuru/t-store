import React, { useContext, useEffect } from "react";
import Product from "./Product";
import ProductsContext from "../../context/products/ProductsContext";

const ListProducts = () => {
  // destructure values from context
  const { products, getProducts } = useContext(ProductsContext);

  useEffect(() => {
    getProducts()
    
    // eslint-disable-next-line
  }, [])
  
  return (
    <div>
      <table className="w-full text-sm lg:text-base" cellSpacing="0">
        <thead>
          <tr className="h-12 uppercase">
            <th className="hidden md:table-cell"></th>
            <th className="text-left">Title</th>
            <th className="text-center pl-5 lg:pl-0">
              Price
            </th>
            <th className="hidden md:table-cell text-center pl-5 lg:pl-0">
            deduction
            </th>
            <th className="text-center">qty</th>
            <th className="text-right"></th>
          </tr>
        </thead>
        <tbody>
          {products?.length > 0 &&
            products.map((product, index) => {
              return <Product product={product} key={index} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ListProducts;
