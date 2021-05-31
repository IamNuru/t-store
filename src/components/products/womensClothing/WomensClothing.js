import React, { useContext, useEffect } from "react";
import ProductsContext from '../../context/products/ProductsContext';

import Item from "./Item";

const WomensClothing = () => {

  const productsContext = useContext(ProductsContext);
  const {womensClothing, getWomensClothing } = productsContext;

  useEffect(() => {
    getWomensClothing()
    // eslint-disable-next-line
  }, [])

  return (
  <div>
    <h2 className={`${window.location.href === 'http://localhost:3000/' && 'hidden'} text-center shadow-md mb-2 py-4 font-semibold text-xl font-serif w-full capitalize`}>{window.location.pathname.replace('%20',' ').split('/')}</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {
            womensClothing !== null ? (
                womensClothing.length > 0 ? (
                    womensClothing.map((product, index)=> {
                        return(<Item product={product} key={index}/>)
                    }) 
                ) : "No data"
            ):'loading...'
        }
    </div>
    </div>
  );
};

export default WomensClothing;
