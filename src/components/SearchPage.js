import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router";
import ProductsContext from "./context/products/ProductsContext";
import ReactPaginate from "react-paginate";
import Item from "./Item";
const SearchedItem = (props) => {
  const productsContext = useContext(ProductsContext);
  const { searchProducts, getProducts, searchedItems } = productsContext;
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(3);
  useEffect(() => {
    async function fetchData() {
      await getProducts();
      await searchProducts(props.match.params.txt);
    }
    fetchData();
    // eslint-disable-next-line
  }, [offset]);
  const slice =
    searchedItems !== null && searchedItems.slice(offset, offset + perPage);
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage * perPage);
  };
  return (
    <div className="block">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {searchedItems
          ? slice.map((product, index) => (
              <Item product={product} key={index} />
            ))
          : "No data"}
      </div>
      {searchedItems !== null && searchedItems.length > 0 && (
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(
            searchedItems !== null && searchedItems.length / perPage
          )}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={
            "pagination w-full bg-purple-500 flex justify-center"
          }
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          pageClassName={"px-2"}
        />
      )}
    </div>
  );
};

export default withRouter(SearchedItem);
