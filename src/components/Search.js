import React, { useContext, useRef, useEffect } from "react";
import ProductsContext from "./context/products/ProductsContext";
import { withRouter } from 'react-router'

const Search = (props) => {
  const productsContext = useContext(ProductsContext);
  const { getProducts, searchProducts } = productsContext;

  const text = useRef("");

  useEffect(() => {
    getProducts();
  });

  const searchItem = (e) => {
    e.preventDefault();
    searchProducts(text.current.value);
    //window.location.href = "/search"
    const txt = text.current.value
    props.history.push(`/search?:txt=${txt}`)
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
