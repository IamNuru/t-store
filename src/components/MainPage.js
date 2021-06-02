import React from "react";

import Jewellery from "./products/jewellery/Jewellery";
import MensClothing from "./products/mensClothing/MensClothing";
import WomensClothing from "./products/womensClothing/WomensClothing";
import Electronic from "./products/electronic/Electronic";
import { Link } from "react-router-dom";

const MainPage = (props) => {
  

  return (
    <div className="block">
      <div className="border border-gray-300 rounded-2xl px-4 py-2 bg-gray-100 shoes mb-4">
        <h2 className="mb-1 font-serif font-bold text-xl ml-1 capitalize py-1 pl-2 bg-gradient-to-r from-pink-200 to-gray-300">
          <Link to="/jewellery">Jewellery</Link>
        </h2>
        <Jewellery />
      </div>

      <div className="mt-2 bg-pink-100 p-2 shirts mb-4">
        <h2 className="mb-1 font-serif font-bold text-xl ml-1 capitalize py-1 pl-2 bg-gradient-to-r from-pink-200 to-gray-300">
          <Link to="/men's clothing"> Mens Clothing</Link>
        </h2>
        <MensClothing />
      </div>

      <div className="mt-2 p-2 mb-4">
        <h2 className="mb-1 font-serif font-bold text-xl ml-1 capitalize py-1 pl-2 bg-gradient-to-r from-pink-200 to-gray-300">
          <Link to="/women's clothing"> Womens Clothing</Link>
        </h2>
        <WomensClothing />
      </div>

      <div className="mt-2 mb-2">
        <h2 className="mb-1 font-serif font-bold text-xl ml-1 capitalize py-1 pl-2 bg-gradient-to-r from-pink-200 to-gray-300">
          <Link to="/electronics">Electronics</Link>
        </h2>
        <Electronic />
      </div>
    </div>
  );
};

export default MainPage;
