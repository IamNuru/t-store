import React, { useContext } from "react";
import CartCheckOutButton from "./CartCheckOutButton";
import CartRow from "./CartRow";
import CartContext from "./context/cart/CartContext";
import Formatter from "./Formatter";


const Cart = () => {
  const cartContext = useContext(CartContext);
  const { cart, shippingCharge, couponValue } = cartContext;

  return (
    <div className="flex justify-center my-6">
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
                <th className="hidden text-right md:table-cell">Unit price</th>
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
            <div className="lg:px-2 lg:w-1/2">
              <div className="p-4 bg-gray-100 rounded-full">
                <h1 className="ml-2 font-bold uppercase">Coupon Code</h1>
              </div>
              <div className="p-4">
                <p className="mb-4 italic">
                  If you have a coupon code, please enter it in the box below
                </p>
                <div className="justify-center md:flex">
                  <form action="" method="POST">
                    <div className="flex items-center w-full h-13 pl-3 bg-white bg-gray-100 border rounded-full">
                      <input
                        type="coupon"
                        name="code"
                        id="coupon"
                        placeholder="Apply coupon"
                        defaultValue="90off"
                        className="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none"
                      />
                      <button
                        type="submit"
                        className="text-sm flex items-center px-3 py-1 text-white bg-gray-800 rounded-full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none"
                      >
                        <svg
                          aria-hidden="true"
                          data-prefix="fas"
                          data-icon="gift"
                          className="w-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
                          />
                        </svg>
                        <span className="font-medium">Apply coupon</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="p-4 mt-6 bg-gray-100 rounded-full">
                <h1 className="ml-2 font-bold uppercase">
                  Instruction for seller
                </h1>
              </div>
              <div className="p-4">
                <p className="mb-4 italic">
                  If you have some information for the seller you can leave them
                  in the box below
                </p>
                <textarea className="w-full h-24 p-2 bg-gray-100 rounded"></textarea>
              </div>
            </div>
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
                <div >
                  <CartCheckOutButton  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
