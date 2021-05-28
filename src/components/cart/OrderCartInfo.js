import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/cart/CartContext";

const OrderCartInfo = () => {
  const { cart } = useContext(CartContext);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GHS",
  });

  return (
    <div className="px-2 py-4 text-center">
      {cart !== null && cart.length > 0 ? (
        <p className="text-sm"> You are about to make payment of {' '}
          {formatter.format(cart
            .map((item) => item.price * item.qty)
            .reduce((prev, next) => parseInt(prev) + parseInt(next), 0))
            }
        </p>
      ) : (
        <p className="text-base">
          Your{" "}
          <Link to="/cart" className="px-1 text-purple-700">
            cart
          </Link>{" "}
          is Empty. Start <Link to="/">Shopping</Link> now
        </p>
      )}
      <p className="text-sm text-gray-600">You can{" "}
      <Link to="/cart" className="px-1 text-purple-700">
        edit
      </Link>{" "}
      or{" "}
      <Link to="/" className="px-1 text-purple-700">
        continue
      </Link>{" "}
      shopping
      </p>
    </div>
  );
};

export default OrderCartInfo;
