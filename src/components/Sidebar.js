import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Sidebar = () => {
  return (
    <div className="md:mt-20 bg-gray-200 px-2 py-1 -mt-32 z-20 w-full text-center md:w-48 md:h-screen fixed ">
        <nav className="bg-gray-100">
          <ul className="flex whitespace-nowrap overflow-auto px-8 md:px-2 md:block justify-center md:text-left">
            <li className="hover:bg-purple-400 hover:rounded-lg rounded transition duration-400 px-4 py-2 md:px-0 md:py-0">
              <Link to="/" className="px-2 inline-block w-full">Home</Link>
            </li>
            <li className="hover:bg-purple-400 rounded hover:rounded-lg transition duration-400 px-4 py-2 md:px-0 md:py-0">
              <Link to="/jewellery" className="px-2 inline-block w-full">Jewellery</Link>
            </li>
            <li className="hover:bg-purple-400 hover:rounded-md rounded transition duration-400 px-4 py-2 md:px-0 md:py-0">
              <Link to="/electronics" className="px-2 inline-block w-full">Electronics</Link>
            </li>
            <li className="hover:bg-purple-400 hover:rounded-md rounded transition duration-400 px-4 py-2 md:px-0 md:py-0">
              <Link to="/men's clothing" className="px-2 inline-block w-full">Men's Clothing</Link>
            </li>
            <li className="hover:bg-purple-400 hover:rounded-md rounded transition duration-400 px-4 py-2 md:px-0 md:py-0">
              <Link to="/women's clothing" className="px-2 inline-block w-full">Women's Clothing</Link>
            </li>
          </ul>
        </nav>
        <Search />
    </div>
  );
};

export default Sidebar;
