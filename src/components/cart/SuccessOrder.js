import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/Context";
import CartContext from "../context/cart/CartContext";

const SuccessOrder = () => {
  const { user } = useContext(AuthContext);
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    clearCart();

    // eslint-disable-next-line
  }, []);
  return (
    <div
      className="bg-white block w-full md:w-96 h-screen px-4 py-4 m-auto 
            shadow-2xl rounded-md bg-white text-blue-500"
    >
      <h2 className="text-center font-bold text-6xl w-full py-8">
        <i className="fa fa-handshake-o"></i>
      </h2>
      <p className="mt-2 mb-4">
        Hi {user.fullName}, Thank you for making an order with us
      </p>
      <p className="my-4">
        Your Order Number is <span className="text-pink-600">1144586665</span>
      </p>
      <p className="my-4">
        Please Copy your order number for references should you need inquiry
        about your order. You can also use the order number to track your
        product
      </p>
      <p className="my-4">
        Continue{" "}
        <Link to="/" className="text-green-600">
          Shopping <i className="fa fa-arrow-right"></i>
        </Link>
      </p>
    </div>
  );
};

export default SuccessOrder;
