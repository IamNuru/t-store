import React, { useState, useContext } from "react";
import AuthContext from "../../context/auth/Context";
import CartContext from "../../context/cart/CartContext";
import AmountToPay from "../AmountToPay";

const MomoPay = (props) => {
  const { addToOrders } = useContext(AuthContext);
  const { cart, couponValue, shippingCharge } = useContext(CartContext);

  const [momoNumber, setMomoNumber] = useState("");
  const [amount] = useState(
    cart
      .map((item) => item.price * item.qty)
      .reduce((prev, next) => parseInt(prev) + parseInt(next), 0) -
      couponValue -
      shippingCharge
  );
  const [formError, setFormError] = useState("");

  const onChange = (e) => {
    setMomoNumber(e.target.value);
    setFormError("");
  };
  const confirmOrder = (e) => {
    e.preventDefault();
    if (momoNumber === "") {
      setFormError("Phone number field is required");
    } else if (momoNumber.length !== 10) {
      setFormError("Phone number must be 10 values");
    } else {
      const order = {
        momoNumber: momoNumber,
        amount: amount,
        payment_method: "momoPay",
        cart: cart,
      };
      addToOrders(order).then(res =>{
        props.directToPage.push("/cart/checkout/success");
      });
      /* cart.map(ca =>{
       return addToOrders(ca.id)
      }) */
      
    }
  };
  return (
    <div className="transition duration-500 w-full mx-2 mt-4 border-1 border-gray-300 rounded-md shadow:md">
      <h2 className="w-full capitalize font-bold text-sm">PAYMENT DETAILS</h2>
      <form onSubmit={confirmOrder} className="w-full max-w-sm">
        <div className="block items-center border-teal-500 py-2">
          <div className="block mb-2 py-1">
            <label className="text-pink-400 text-sm">Mobile Money Number</label>
            <input
              className="ml-1 appearance-none bg-transparent border-b  w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="number"
              value={momoNumber}
              onChange={onChange}
              placeholder="22 588 5558"
              aria-label="number"
              required
            />
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
  );
};

export default MomoPay;
