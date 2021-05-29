import React, { useContext } from "react";
import CartContext from "./context/cart/CartContext";

import { Link } from "react-router-dom";

const Header = () => {
  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  return (
      <div className="bg-white flex fixed w-full top-0 z-20 mb-2 shadow-md min-h-4 p-4">
        <div className="navs">
          <nav>
            <ul className="flex justify-center">
              <li className="px-4 py-1 rounded-md mx-2 bg-purple-700 text-xl text-white">
                <Link to="/">Home</Link>
              </li>
              <li className="px-4 py-1 rounded-md mx-2 bg-purple-700 text-xl text-white">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="basket ml-auto">
          <Link to="/cart">
            <div className="flex text-center">
              <svg
                className="stroke-current text-purple-600 text-sm inline-block w-8 h-8"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8" cy="21" r="2"></circle>
                <circle cx="20" cy="21" r="2"></circle>
                <path d="M5.67 6H23l-1.68 8.39a2 2 0 0 1-2 1.61H8.75a2 2 0 0 1-2-1.74L5.23 2.74A2 2 0 0 0 3.25 1H1"></path>
              </svg>

              <div
                className="absolute -mt-4 ml-4 bg-red-400 p-1 text-xs"
                style={{ borderRadius: "50%" }}
              >
                {cart === null ? 0 : cart.length}
              </div>
            </div>
          </Link>
        </div>
      </div>
  );
};

export default Header;
