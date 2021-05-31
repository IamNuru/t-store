import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import AuthContext from "./context/auth/Context"
import SettingsContext from "./context/settings/SettingsContext";

const Sidebar = () => {
  const { logedin , logout} = useContext(AuthContext);
  const { isNavbarOpen, closeNavbar } = useContext(SettingsContext);
  
  const onMobileNavClick = () => {
    window.addEventListener('click', function(e){   
      if (document.getElementById('mobile-nav').contains(e.target)){
        closeNavbar(true)
      } else if (document.getElementById('cover').contains(e.target)){
        closeNavbar(false)
      } 
    });
  }
  return (
    <Fragment>
    <div className="transition-all duration-1000 -mt-14 md:mt-16 bg-gray-200 px-2 py-1 z-20 w-full text-center md:w-48 md:h-screen fixed">
      <nav className="hidden md:block bg-gray-100">
        <ul className="flex whitespace-nowrap overflow-auto px-8 md:px-2 md:block md:justify-center md:text-left">
          <li className="hover:bg-purple-400 hover:rounded-lg rounded transition duration-400 px-4 py-2 md:px-0 md:py-0">
            <Link to="/" className="px-2 inline-block w-full">
              Home
            </Link>
          </li>
          <li className="hover:bg-purple-400 rounded hover:rounded-lg transition duration-400 px-4 py-2 md:px-0 md:py-0">
            <Link to="/jewellery" className="px-2 inline-block w-full">
              Jewellery
            </Link>
          </li>
          <li className="hover:bg-purple-400 hover:rounded-md rounded transition duration-400 px-4 py-2 md:px-0 md:py-0">
            <Link to="/electronics" className="px-2 inline-block w-full">
              Electronics
            </Link>
          </li>
          <li className="hover:bg-purple-400 hover:rounded-md rounded transition duration-400 px-4 py-2 md:px-0 md:py-0">
            <Link to="/men's clothing" className="px-2 inline-block w-full">
              Men's Clothing
            </Link>
          </li>
          <li className="hover:bg-purple-400 hover:rounded-md rounded transition duration-400 px-4 py-2 md:px-0 md:py-0">
            <Link to="/women's clothing" className="px-2 inline-block w-full">
              Women's Clothing
            </Link>
          </li>
        </ul>
      </nav>
      <Search />
      <nav className="mt-8 hidden md:block">
        <ul className="flex whitespace-nowrap overflow-auto px-8 md:px-2 md:block justify-center md:text-left">
          {!logedin ? (
            <div>
              <li className="hover:bg-purple-400 hover:rounded-md rounded transition duration-400 px-4 py-2 md:px-0 md:py-0">
                <Link to="/register" className="px-2 inline-block w-full">
                  Register
                </Link>
              </li>
              <li className="hover:bg-purple-400 hover:rounded-md rounded transition duration-400 px-4 py-2 md:px-0 md:py-0">
                <Link
                  to="/login"
                  className="px-2 inline-block w-full"
                >
                  Login
                </Link>                
              </li>
            </div>
          ) : (
            <li className="hover:bg-purple-400 hover:rounded-md rounded transition duration-400 px-4 py-2 md:px-0 md:py-0">
              <button onClick={() => logout()} className="outline-none">Logout</button>
            </li>

          )}
        </ul>
      </nav>
    </div>


    {/* Mobile view navs */}
    {/* <div onClick={onMobileNavClick} id="mobile-nav" className={`${!isNavbarOpen ? 'invisible opacity-0' : 'visible opacity-full'} md:hidden transition-all duration-1000 -mt-14 bg-gray-200 px-2 py-1 z-20 w-72 h-screen fixed`}> */}
    <div onClick={onMobileNavClick} id="cover" className={`${!isNavbarOpen ? 'w-0' : 'w-full'} transition-all duration-300 fixed z-20 -mt-14 h-screen bg-black bg-opacity-25`}>
    <div id="mobile-nav" className={`${!isNavbarOpen ? '-ml-60' : 'w-60'} transition-all duration-700 md:hidden bg-gray-200 px-1 py-1 z-40 h-screen`}>
      <nav className="block">
        <ul className="block whitespace-nowrap overflow-auto px-1">
          <li className="hover:bg-purple-400 transition duration-400 py-2">
            <Link to="/" className="px-2 inline-block w-full">
              Home
            </Link>
          </li>
          <li className="hover:bg-purple-400 transition duration-400 py-2">
            <Link to="/jewellery" className="px-2 inline-block w-full">
              Jewellery
            </Link>
          </li>
          <li className="hover:bg-purple-400 transition duration-400 py-2">
            <Link to="/electronics" className="px-2 inline-block w-full">
              Electronics
            </Link>
          </li>
          <li className="hover:bg-purple-400 transition duration-400 py-2">
            <Link to="/men's clothing" className="px-2 inline-block w-full">
              Men's Clothing
            </Link>
          </li>
          <li className="hover:bg-purple-400 transition duration-400 py-2">
            <Link to="/women's clothing" className="px-2 inline-block w-full">
              Women's Clothing
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="mt-8 block">
        <ul className="flex whitespace-nowrap overflow-auto px-8">
          {!logedin ? (
            <div>
              <li className="hover:bg-purple-400 hover:rounded-md rounded transition duration-400 py-2">
                <Link to="/register" className="px-2 inline-block w-full">
                  Register
                </Link>
              </li>
              <li className="hover:bg-purple-400 hover:rounded-md rounded transition duration-400 py-2">
                <Link
                  to="/login"
                  className="px-2 inline-block w-full"
                >
                  Login
                </Link>                
              </li>
            </div>
          ) : (
            <li className="hover:bg-purple-400 hover:rounded-md rounded transition duration-400 px-4 py-2 md:px-0 md:py-0">
              <button onClick={() => logout()} className="outline-none">Logout</button>
            </li>

          )}
        </ul>
      </nav>
    </div>
    </div>
    </Fragment>
  );
};

export default Sidebar;
