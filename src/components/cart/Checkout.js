import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bank from "./paymentMethods/Bank";
import MomoPay from "./paymentMethods/MomoPay";

const Checkout = (props) => {
  const [paymentMethod, setPaymentMethod] = useState("momo");

  return (
    <div
      className="bg-white block w-full md:w-96 h-screen px-4 py-4 m-auto 
        shadow-2xl rounded-md bg-white"
    >
      <h2 className="font-semibold mt-4 text-xl text-gray-700 text-center">
        Confirm Order and Pay
      </h2>
      <p className="text-gray-400 text-sm px-4 pt-2 mb-8">
        Please select your method of payment then fill the form and confirm
      </p>
      <div className="text-center block">
        <h2 className="w-full capitalize">PAYMENT METHODS</h2>
        <div className="flex justify-center px-2 py-2">
          <button
            onClick={() => setPaymentMethod("momo")}
            className={`${
              paymentMethod === "momo" && "bg-purple-600 text-white "
            }appearance-none focus:outline-none  px-4 py-2 rounded-md shadow-md 
            text-gray-400 hover:shadow-lg mx-1 outline-none 
            `}
          >
            Momo
          </button>
          <button
            onClick={() => setPaymentMethod("bank")}
            className={`${
              paymentMethod === "bank" && "bg-purple-600 text-white "
            }appearance-none focus:outline-none px-4 py-2 rounded-md shadow-md 
            text-gray-900 hover:shadow-lg mx-1 outline-none`}
          >
            Bank
          </button>
        </div>
      </div>
      {paymentMethod === "bank" ? <Bank directToPage={props.history}/> : <MomoPay directToPage={props.history}/>} 
      <div className="mt-8 text-center mb-4 text-sm text-gray-600">
        You can{" "}
        <Link to="/cart" className="px-1 text-purple-700">
          edit
        </Link>{" "}
        or{" "}
        <Link to="/" className="px-1 text-purple-700">
          continue
        </Link>{" "}
        shopping
      </div>
    </div>
  );
};

export default Checkout;
