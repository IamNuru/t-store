import React, { useContext, useRef } from "react";
import ProductsContext from "./context/products/ProductsContext";
import { withRouter } from 'react-router'

const Search = (props) => {
  const productsContext = useContext(ProductsContext);
  const { searchProducts } = productsContext;

  const text = useRef("");

  
  // search for products that match the text ref
  const searchItem = (e) => {
    e.preventDefault();
    const txt = text.current.value
    if (txt === '') {
      alert (' Please enter something')
      return false;
    }
    searchProducts(txt);
    props.history.push(`/search?text=${txt}`)
  };


  return (
    <form onSubmit={searchItem}>
      <input
        required
        ref={text}
        type="text"
        placeholder="Search"
        className="pl-2 py-1.5 md:mt-4 md:mb-8 w-full mr-2 rounded-full border border-gray-300 focus:border-purple-300 outline-none"
      />
    </form>
  );
};

export default withRouter(Search);
