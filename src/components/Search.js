import React, { useContext, useRef, useEffect } from "react";
import ProductsContext from "./context/products/ProductsContext";
import { withRouter } from 'react-router'

const Search = (props) => {
  const productsContext = useContext(ProductsContext);
  const { getProducts, searchProducts } = productsContext;

  const text = useRef("");

  // Load the products
  useEffect(() => {
    getProducts();
  });

  // search for products that match the text ref
  const searchItem = (e) => {
    e.preventDefault();
    const txt = text.current.value
    searchProducts(txt);
    props.history.push(`/search/${txt}`)
  };


  return (
    <form onSubmit={searchItem}>
      <input
        ref={text}
        type="text"
        placeholder="Search"
        className="pl-4 mt-4 mb-8 py-2 w-full ml-1 mr-2 rounded-full border-1"
      />
    </form>
  );
};

export default withRouter(Search);
