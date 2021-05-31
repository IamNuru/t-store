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
    <div>
      <h2 className={`${window.location.href === 'http://localhost:3000/' && 'hidden'} text-center shadow-md mb-2 py-4 font-semibold text-xl font-serif w-full capitalize`}>{window.location.pathname.replace('%20',' ').split('/')}</h2>
        
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
    </div>
  );
};

export default MensClothing;
