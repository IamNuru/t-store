import React, { useContext, useEffect } from "react";
import ProductsContext from "../context/products/ProductsContext";
import Item from "./Item";
import PageNotFound from "../PageNotFound";
import LoadingGif from "../../components/LoadingGif";

const CategoryProducts = (props) => {
  const productsContext = useContext(ProductsContext);
  const {
    getCategoryProducts,
    products,
    errors,
    clearMessages,
  } = productsContext;

  useEffect(() => {
    clearMessages();
    getCategoryProducts(props.match.params.cat);

    // eslint-disable-next-line
  }, [props.match.params.cat]);

  return (
    <>
      {errors === null || errors === "" ? (
        <div>
          <h2
            className={`${window.location.href === "http://localhost:3000/" &&
              "hidden"} text-center shadow-md mb-2 py-4 font-semibold text-xl font-serif w-full capitalize`}
          >
            {props.match.params.cat}
          </h2>
          {products !== null ? (
            products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {products.map((product, index) => {
                  return <Item product={product} key={index} />;
                })}
              </div>
            ) : (
              <div className="mt-20 w-full flex align-center justify-center">
                No data
              </div>
            )
          ) : (
            <div className="mt-20 w-full flex align-center justify-center">
              <LoadingGif />
            </div>
          )}
        </div>
      ) : (
        <PageNotFound />
      )}
    </>
  );
};

export default CategoryProducts;
