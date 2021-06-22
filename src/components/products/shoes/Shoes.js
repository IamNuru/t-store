import React, { useEffect, useState } from "react";
import axios from "axios";

import Item from "./Item";
import HomePageShimmer from "../../shimmers/HomePage";
import LoadingGif from "../../LoadingGif";

const Shoes = (props) => {
  /* const {getShoes, shoes } = productsContext; */

  const [loading, setLoading] = useState(true);
  const [shoes, setShoes] = useState(null);

  useEffect(() => {
    const getHomePageCategoryProducts = async () => {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/products/homepage/shoes?limit=6`)
        .then((res) => {
          setShoes(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    };
    getHomePageCategoryProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h2
        className={`${window.location.href === "http://localhost:3000/" &&
          "hidden"} text-center shadow-md mb-2 py-4 font-semibold text-xl font-serif w-full capitalize`}
      >
        {window.location.pathname.split("/")}
      </h2>
      {!loading ? (
        shoes?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {shoes.map((product, index) => {
              return <Item product={product} key={index} />;
            })}
          </div>
        ) : (
          <div className="mt-20 w-full flex align-center justify-center">
            No Data
          </div>
        )
      ) : (
        <>
          <div className="hidden md:grid">
            <HomePageShimmer />
          </div>
          <div className="block md:hidden w-full flex align-center justify-center">
            {<LoadingGif />}
          </div>
        </>
      )}
    </div>
  );
};

export default Shoes;
