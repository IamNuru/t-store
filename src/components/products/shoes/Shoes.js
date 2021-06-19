import React, { useEffect, useState } from "react";
import axios from "axios";

import Item from "./Item";
import LoadingGif from "../../LoadingGif";

const Shoes = (props) => {
  /* const {getShoes, shoes } = productsContext; */

  const [shoes, setShoes] = useState(null);

  useEffect(() => {
    const getHomePageCategoryProducts = async () => {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/products/homepage/shoes?limit=6`)
        .then((res) => {
          setShoes(res.data);
        })
        .catch((err) => {});
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
      {shoes !== null ? (
        shoes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {shoes.map((product, index) => {
              return <Item product={product} key={index} />;
            })}
          </div>
        ) : (
          "No data"
        )
      ) : (
        <div className="w-full flex align-center justify-center">
          {<LoadingGif />}
        </div>
      )}
    </div>
  );
};

export default Shoes;
