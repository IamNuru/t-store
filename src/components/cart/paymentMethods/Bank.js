import React, { useState, useContext } from "react";
import AuthContext from "../../context/auth/Context";
import CartContext from "../../context/cart/CartContext";
import AmountToPay from "../AmountToPay";

const Bank = (props) => {
  const { addToOrders } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  const [bankInfo, setBankInfo] = useState({
    accountNumber: "",
    accountName: "",
    cvv: "",
    dateOfTransaction: "",
  });
  const [formError, setFormError] = useState("");

  const { accountNumber, accountName, cvv, dateOfTransaction } = bankInfo;

  const onChange = (e) => {
    setBankInfo({ ...bankInfo, [e.target.name]: e.target.value });
    setFormError("");
  };
  const confirmOrder = (e) => {
    e.preventDefault();
    if (
      accountNumber === "" ||
      accountName === "" ||
      cvv === "" ||
      dateOfTransaction === ""
    ) {
      setFormError("All fields are required");
    } else if (accountNumber.length > 20) {
      setFormError("Account number cannot be more than 20");
    } else {
      cart.map(ca =>{
        return addToOrders(ca)
      })
      props.directToPage.push("/cart/checkout/success");
    }
  };
  return (
    <>
      <div className="w-full mx-2 mt-4 border-1 border-gray-300 rounded-md shadow:md">
        <h2 className="w-full capitalize font-bold text-sm">PAYMENT DETAILS</h2>
        <form onSubmit={confirmOrder} className="w-full max-w-sm m-auto">
          <div className="block py-1 items-center border-teal-500 py-2">
            <div className="block mb-2">
              <label className="text-pink-400 text-sm">Card Holder Name</label>
              <input
                className="ml-1 appearance-none bg-transparent border-b w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Account Name"
                name="accountName"
                value={accountName}
                onChange={onChange}
                aria-label="Account Name"
                required
              />
            </div>
            <div className="block mb-2 py-1">
              <label className="text-pink-400 text-sm">Card Number</label>
              <input
                className="ml-1 appearance-none bg-transparent border-b  w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="number"
                placeholder="22 588 5558"
                name="accountNumber"
                value={accountNumber}
                onChange={onChange}
                aria-label="accountNumber"
                required
              />
            </div>
            <div className="block mb-2 py-1">
              <label className="text-pink-400 text-sm">Date</label>
              <input
                className="ml-1 appearance-none bg-transparent border-b w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="date"
                placeholder="choose date"
                name="dateOfTransaction"
                value={dateOfTransaction}
                onChange={onChange}
                aria-label="date"
                required
              />
              <div className="block mb-2 py-1">
                <label className="text-pink-400 text-sm">Cvv</label>
                <input
                  className="ml-1 appearance-none bg-transparent border-b w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="number"
                  placeholder="Cvv"
                  name="cvv"
                  value={cvv}
                  onChange={onChange}
                  aria-label="cvv"
                  required
                />
              </div>
            </div>
          </div>
          <AmountToPay />
          {formError && (
            <p className="text-center text-red-800 text-sm p-4">{formError}</p>
          )}
          <div className="text-right mt-2">
            <button className="min-w-12 md:min-w-8 px-4 py-1 bg-purple-800 font-semibold text-md rounded-lg text-white">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Bank;
