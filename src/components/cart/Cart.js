import React, { useContext } from "react";
import ApplyCoupon from "./ApplyCoupon";
import CartCheckOutButton from "./CartCheckOutButton";
import CartRow from "./CartRow";
import CartContext from "../context/cart/CartContext";
import Formatter from "../Formatter";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { cart, shippingCharge, couponValue } = cartContext;

  return (
    <div className="flex justify-center my-6">
      {cart.length < 1 ? (
        <EmptyCart />
      ) : (
        <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
          <div className="flex-1">
            <table className="w-full text-sm lg:text-base" cellSpacing="0">
              <thead>
                <tr className="h-12 uppercase">
                  <th className="hidden md:table-cell"></th>
                  <th className="text-left">Product</th>
                  <th className="lg:text-right text-left pl-5 lg:pl-0">
                    <span className="lg:hidden" title="Quantity">
                      Qtd
                    </span>
                    <span className="hidden lg:inline">Quantity</span>
                  </th>
                  <th className="hidden text-right md:table-cell">
                    Unit price
                  </th>
                  <th className="text-right">Total price</th>
                </tr>
              </thead>
              <tbody>
                {cart.length > 0 &&
                  cart.map((item) => {
                    return <CartRow item={item} key={item.id} />;
                  })}
              </tbody>
            </table>
            <hr className="pb-6 mt-6" />
            <div className="my-4 mt-6 -mx-2 lg:flex">
              <ApplyCoupon />
              <div className="lg:px-2 lg:w-1/2">
                <div className="p-4 bg-gray-100 rounded-full">
                  <h1 className="ml-2 font-bold uppercase">Order Details</h1>
                </div>
                <div className="p-4">
                  <div className="flex justify-between border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Subtotal
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      {Formatter.format(
                        cart
                          .map((item) => item.price * item.qty)
                          .reduce(
                            (prev, next) => parseInt(prev) + parseInt(next),
                            0
                          )
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-b">
                    <div className="flex lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-gray-800">
                      Coupon 'New customer'
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-green-700">
                      -{Formatter.format(couponValue)}
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      New Subtotal
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      {/* substract coupon value here */}
                      {Formatter.format(
                        cart
                          .map((item) => item.price * item.qty)
                          .reduce(
                            (prev, next) => parseInt(prev) + parseInt(next),
                            0
                          ) - couponValue
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Shipping Charge
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      {Formatter.format(shippingCharge)}
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Total
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      {Formatter.format(
                        cart
                          .map((item) => item.price * item.qty)
                          .reduce(
                            (prev, next) => parseInt(prev) + parseInt(next),
                            0
                          ) -
                          couponValue -
                          shippingCharge
                      )}
                    </div>
                  </div>
                  <div>
                    <CartCheckOutButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
