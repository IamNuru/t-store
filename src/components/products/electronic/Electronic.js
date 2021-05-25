import React, { useContext, useEffect } from "react";
import ProductsContext from '../../context/products/ProductsContext';

import Item from "./Item";

const Electronic = () => {

  const productsContext = useContext(ProductsContext);
  const {electronics, getElectronics } = productsContext;

  useEffect(() => {
    getElectronics()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {
            electronics !== null ? (
                electronics.length > 0 ? (
                    electronics.map((product, index)=> {
                        return(<Item product={product} key={index}/>)
                    }) 
                ) : "No data"
            ):'loading...'
        }
    </div>
  );
};

export default Electronic;
