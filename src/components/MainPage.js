import React from "react";

import Shoes from "./products/shoes/Shoes";
import Clothings from "./products/clothings/Clothings";
import Electronic from "./products/electronic/Electronic";
import { Link } from "react-router-dom";

const MainPage = (props) => {
  

  return (
    <div className="block">
      <div className="border border-gray-300 rounded-2xl px-4 py-2 bg-gray-100 shoes mb-4">
        <h2 className="mb-1 font-serif font-bold text-xl ml-1 capitalize py-1 pl-2 bg-gradient-to-r from-pink-200 to-gray-300">
          <Link to="/category/shoes">Shoes</Link>
        </h2>
        <Shoes />
      </div>

      <div className="mt-2 p-2 mb-4">
        <h2 className="mb-1 font-serif font-bold text-xl ml-1 capitalize py-1 pl-2 bg-gradient-to-r from-pink-200 to-gray-300">
          <Link to="/clothings/clothing"> Clothings</Link>
        </h2>
        <Clothings />
      </div>

      <div className="mt-2 mb-2">
        <h2 className="mb-1 font-serif font-bold text-xl ml-1 capitalize py-1 pl-2 bg-gradient-to-r from-pink-200 to-gray-300">
          <Link to="/category/electronics">Electronics</Link>
        </h2>
        <Electronic />
      </div>
    </div>
  );
};

export default MainPage;
