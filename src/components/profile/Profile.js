import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from '../context/auth/Context'
import CartContext from '../context/cart/CartContext'

const Profile = () => {
  const { orders } = useContext(AuthContext)
  const { wishList } = useContext(CartContext)
  return (
    <div className="block mt-20">
      <div className="md:border border-gray-200 md:rounded-md md:px-2 md:mx-1 block md:min-h-32 px-1 py-2 md:py-4 md:flex">
        <div className="md:pt-24 md:mr-1 border-r border-gray-200 font-semibold text-xl w-full md:w-48">Account</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-4">
          <Link
            to="/account/details"
            className="flex md:block px-4 py-1 md:py-4 hover:bg-purple-400 hover:text-white transition duration-500 md:rounded md:rounded-md md:shadow-lg border-t md:border border-purple-200 md:text-center">
            <h2 className="md:font-semibold text-md w-full md:py-2">
              Details
            </h2>
            <div className="hidden md:block text-gray-800 block">
              <div>abdulainurudeentitiaka@gmail.com</div>
              <div>0543027058</div>
            </div>
            <i className="md:hidden fa fa-angle-right ml-auto font-semibold"></i>
          </Link>
          <Link
            to="/account/address"
            className="flex md:block px-4 py-1 md:py-4 hover:bg-purple-400 hover:text-white transition duration-500 md:rounded md:rounded-md md:shadow-lg border-t md:border border-purple-200 md:text-center">
            <h2 className="md:font-semibold text-md w-full md:py-2">
              Address
            </h2>
            <div className="hidden md:block text-gray-800 block">
                <div>Kumasi</div>
              <div>Asawasei</div>
              <div>Box 80</div>
            </div>
            <i className="md:hidden fa fa-angle-right ml-auto font-semibold"></i>
          </Link>
          <Link
            to="/account/resetpassword"
            className="flex md:block px-4 py-1 md:py-4 hover:bg-purple-400 hover:text-white transition duration-500 md:rounded md:rounded-md md:shadow-lg border-t md:border border-purple-200 md:text-center">
            <h2 className="md:font-semibold text-md w-full md:py-2">
              Reset Password
            </h2>
            <div className="hidden md:block text-gray-800 block">
            <div>Change your password</div>
            </div>
            <i className="md:hidden fa fa-angle-right ml-auto font-semibold"></i>
          </Link>
        </div>
      </div>

      {/* tstore links */}
      <div className="md:border border-gray-200 md:rounded-md md:px-2 md:mx-1 block md:mt-4 md:min-h-32 px-1 py-2 md:py-4 md:flex">
        <div className="md:pt-6 md:mr-2 md:border-r md:border-gray-200 font-semibold text-xl w-full md:w-48">Tstore</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-4">
          <Link
            to="/account/orders"
            className="flex md:block px-4 py-1 md:py-4 hover:bg-purple-400 hover:text-white transition duration-500 md:rounded md:rounded-md md:shadow-lg border-t md:border border-purple-200 md:text-center">
            <h2 className="md:font-semibold text-md w-full md:py-2">
              Orders
            </h2>
            <p className="hidden md:block text-gray-800 block">
              You've made <span className="text-purple-800">{orders.length }</span> orders 
              with <span className="text-purple-800">7</span> completed
            </p>
            <i className="md:hidden fa fa-angle-right ml-auto font-semibold"></i>
          </Link>
          <Link
            to="/account/wishlist"
            className="flex md:block px-4 py-1 md:py-4 hover:bg-purple-400 hover:text-white transition duration-500 md:rounded md:rounded-md md:shadow-lg border-t md:border border-purple-200 md:text-center">
            <h2 className="md:font-semibold text-md w-full md:py-2">
              Wish List
            </h2>
            <p className="hidden md:block text-gray-800 block">
              You have <span className="text-purple-800">{wishList.length}</span> items in your wish list. <br />
            </p>
            <i className="md:hidden fa fa-angle-right ml-auto font-semibold"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
