import React, { useState } from "react";

const Order = (props) => {
  const { item } = props;

  const [openOrder, setOpenOrder] = useState(false);

  return item === null ? (
    "Loading"
  ) : (
    <div
      className={`w-full block transition duration-500 py-3 px-1 shadow-md mb-2`}
    >
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setOpenOrder(!openOrder)}
      >
        <img
          src={item.image}
          alt={item.price}
          className="flex-shrink-0 w-8 h-8 rounded-full mr-2"
        />
        <div className="flex-grow text-left">{item.title}</div>
        <i
          className={`text-center px-2 py-1 cursor-pointer text-xl text-purple-600 font-semibold fa fa-angle-${
            openOrder ? "down" : "up"
          }`}
        ></i>
      </div>
      <div
        className={`${openOrder ? "block" : "hidden"} transition duration-500`}
      >
        <div className="p-4 block">
          <div className="text-sm pl-1 bg-gray-300 py-1">Price</div>
          <div className="pl-2">{item.price}</div>
        </div>
        <div className="p-4 block">
          <div className="text-sm pl-1 bg-gray-300 py-1">Quantity</div>
          <div className="pl-2">{item.qty}</div>
        </div>
        <div className="p-4 block">
          <div className="text-sm pl-1 bg-gray-300 py-1">Description</div>
          <div className="pl-2">{item.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Order;
