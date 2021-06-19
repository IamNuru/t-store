import React, { useContext } from "react";

import Shoes from "./products/shoes/Shoes";
import Clothings from "./products/clothings/Clothings";
import Electronic from "./products/electronic/Electronic";
import { Link } from "react-router-dom";
import Item from "./products/clothings/Item";
import CartContext from "./context/cart/CartContext";

const MainPage = (props) => {

  const { wishList } = useContext(CartContext);

  return (
    <div className="block p-2">
      <div className="bg-white px-4 pt-2 pb-16 shoes mb-4 shadow-md">
        <h2 className="mb-1 font-serif font-bold text-xl capitalize py-1 pl-2 bg-purple-600 text-white">
          <Link to="/category/shoes">Shoes</Link>
        </h2>
        <Shoes />
      </div>

      <div className="bg-white px-4 pt-2 pb-16 shoes mb-4 shadow-md">
        <h2 className="mb-1 font-serif font-bold text-xl capitalize py-1 pl-2 bg-pink-600 text-white">
          <Link to="/category/clothings"> Clothings</Link>
        </h2>
        <Clothings />
      </div>

      <div className="bg-white px-4 pt-2 pb-16 mb-4 shadow-md">
        <h2 className="mb-1 font-serif font-bold text-xl capitalize py-1 pl-2 bg-purple-600 text-white">
          <Link to="/category/electronics">Electronics</Link>
        </h2>
        <Electronic />
      </div>

      {wishList?.length > 0 && (
        <div className="mt-2 p-2 mb-4 overflow-x-auto">
          <div className="block">
            <h2 className="font-semibold py-2 pl-1 text-xl">Wish List</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 w-full">
              {wishList.map((wish, index) => {
                return <Item product={wish} key={index} />;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
