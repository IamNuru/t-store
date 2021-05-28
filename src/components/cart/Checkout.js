import React, { useContext, useState } from "react";
import AuthContext from "../context/auth/Context";
import OrderCartInfo from "./OrderCartInfo";

const Checkout = () => {
  const { logedin } = useContext(AuthContext);

  const [paymentMethod, setPaymentMethod] = useState("momo");

  const confirmOrder = (e) => {
      e.preventDefault()
      if(paymentMethod === "momo"){

      }else if(paymentMethod === "bank"){

      }else{
          alert("Invalid payment method")
      }

  }
  return (
    <div
      className="bg-white block w-full md:w-2/3 h-screen px-4 py-4 m-auto 
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
            className={`${paymentMethod === "momo" &&'bg-purple-600 text-white '}appearance-none focus:outline-none  px-4 py-2 rounded-md shadow-md 
            text-gray-400 hover:shadow-lg mx-1 outline-none 
            `}
          >
            Momo
          </button>
          <button
            onClick={() => setPaymentMethod("bank")}
            className={`${paymentMethod === "bank" &&'bg-purple-600 text-white '}appearance-none focus:outline-none px-4 py-2 rounded-md shadow-md 
            text-gray-900 hover:shadow-lg mx-1 outline-none`}
          >
            Bank
          </button>
        </div>
      </div>
      {paymentMethod === "bank" ? (
        <div className="w-full mx-2 mt-4 border-1 border-gray-300 rounded-md shadow:md">
          <h2 className="w-full capitalize font-bold text-sm">
            PAYMENT DETAILS
          </h2>
          <form onSubmit={confirmOrder} className="w-full max-w-sm m-auto">
            <div className="block py-1 items-center border-teal-500 py-2">
              <div className="block">
                <label className="text-pink-400 text-sm">
                  Card Holder Name
                </label>
                <input
                  className="ml-4 appearance-none bg-transparent border-b-2 border-steal w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Jane Doe"
                  aria-label="Full name"
                />
              </div>
              <div className="block py-1">
                <label className="text-pink-400 text-sm">
                  Card Number
                </label>
                <input
                  className="ml-4 appearance-none bg-transparent border-b border-steal w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="number"
                  placeholder="Jane Doe"
                  aria-label="Full name"
                />
              </div>
              <div className="block py-1">
                <div className="md:flex">
                  <label className="text-pink-400 text-sm">Date</label>
                  <input
                    className="ml-4 appearance-none bg-transparent border-none border-b border-steal w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Jane Doe"
                    aria-label="Full name"
                  />
                </div>
                <div className="py-1">
                  <label className="text-pink-400 text-sm">Cvv</label>
                  <input
                    className="ml-4 appearance-none bg-transparent border-none border-b border-steal w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Jane Doe"
                    aria-label="Full name"
                  />
                </div>
              </div>
            </div>
              <OrderCartInfo />
            <button className="min-w-12 md:min-w-8 px-4 py-1 float-right bg-purple-800 font-semibold text-md rounded-lg text-white">Confirm</button>
            </form>
        </div>
      ) : (
        <div className="w-full mx-2 mt-4 border-1 border-gray-300 rounded-md shadow:md">
          <h2 className="w-full capitalize font-bold text-sm">
            PAYMENT DETAILS
          </h2>
          <form onSubmit={confirmOrder} className="w-full max-w-sm">
            <div className="block items-center border-teal-500 py-2">
              <div className="block">
                <label className="text-pink-400 text-sm">
                  Mobile Number
                </label>
                <input
                  className="ml-4 appearance-none bg-transparent border-none border-b border-steal w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Jane Doe"
                  aria-label="Full name"
                />
              </div>
              </div>
              <OrderCartInfo />
              <button className="min-w-12 md:min-w-8 px-4 py-1 float-right bg-purple-800 font-semibold text-md rounded-lg text-white">Confirm</button>
              </form>
        </div>
      )}
      
    </div>
  );
};

export default Checkout;
