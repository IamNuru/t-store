import React, { useContext } from "react";
import CartContext from "./context/cart/CartContext";
import AuthContext from "./context/auth/Context";
import SettingsContext from "./context/settings/SettingsContext";

import { Link } from "react-router-dom";

const Header = () => {
  const { logout, logedin } = useContext(AuthContext);
  const { isNavbarOpen, closeNavbar } = useContext(SettingsContext);
  const { cart } = useContext(CartContext);


  const toggleBar = () => {
    if (isNavbarOpen === true) {
      closeNavbar(false);
    } else {
      closeNavbar(true);
    }
  };
  return (
    <div className="bg-white pt-4 flex fixed w-full top-0 z-30 mb-2 shadow-md min-h-2 py-1">
      <div className="navs flex">
        <div
          id="toggler"
          className="z-40 cursor-pointer ml-4 md:hidden"
          onClick={toggleBar}
        >
          <div className="w-6 bg-black pb-1 mb-1"></div>
          <div className="w-6 bg-black pt-1 mb-1"></div>
          <div className="w-6 bg-black pt-1"></div>
        </div>
        <Link to="/">
          <i className="fa fa-cart-plus text-purple-600 ml-4 text-4xl px-1"></i>
        </Link>
      </div>
      <div className="flex ml-auto mr-4">
        {!logedin ? (
          <div>
            <Link
              to="/register"
              className="px-2 py-1 font-3xl"
              title="register"
            >
              <i className="fa fa-user-plus"></i>
            </Link>
            <Link to="/login" className="px-2 py-1 font-3xl" title="sign in">
              <i className="fa fa-sign-in-alt"></i>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/profile" className="px-2 py-1 font-3xl" title="profiile">
              <i className="fa fa-user-circle"></i>
            </Link>
            <button
              onClick={() => logout()}
              className="px-1 py-2 font-3xl"
              title="Logout"
            >
              <i className="fa fa-sign-out-alt"></i>
            </button>
          </div>
        )}
        <Link to="/cart">
          <div className="flex text-center ml-4">
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
