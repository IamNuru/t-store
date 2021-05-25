import React, { useContext, useEffect } from "react";
import ProductsContext from '../../context/products/ProductsContext';

import Item from "./Item";

const MensClothing = () => {

  const productsContext = useContext(ProductsContext);
  const {mensClothing, getMensClothing} = productsContext;

  useEffect(() => {
    getMensClothing()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {
            mensClothing !== null ? (
                mensClothing.length > 0 ? (
                    mensClothing.map((product, index)=> {
                        return(<Item product={product} key={index}/>)
                    }) 
                ) : "No data"
            ):'loading...'
        }
    </div>
  );
};

export default MensClothing;
