import React, { useContext, useEffect, useState } from "react";
import { withRouter } from 'react-router'
import ProductsContext from './context/products/ProductsContext';
import ReactPaginate from 'react-paginate'
import Item from "./Item";

const SearchedItem = (props) => {

  const productsContext = useContext(ProductsContext);
  const {searchedItems, getProducts} = productsContext;

  /* const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage, setPerPage] = useState(9)
  const [pageCount, setPageCount] = useState(0)

  const slice = searchedItems.slice(offset, offset + perPage)
  setPageCount(Math.ceil(data.length / perPage)) */

    /* const handlePageClick = e =>{
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    } */

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {
            searchedItems !== null ? (
                searchedItems.length > 0 ? (
                    searchedItems.map((product, index)=> {
                        return(<Item product={product} key={index}/>)
                    }) 
                ) : "No data"
            ):'loading...'
        }
        {/* <ReactPaginate 
            previousLabel={"Prev"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages paginatio"}
            activeClassName={"active"}
        /> */}
    </div>
  );
};

export default withRouter(SearchedItem);
