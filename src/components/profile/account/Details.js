import React from "react";

const Details = () => {
  return (
    <div className="w-full ml-4 block">
      <div className="w-full md:w-2/3 lg:w-1/2 m-auto bg-gray-100 mt-1 h-full min-h-screen pb-32 pl-4">
        <div className="font-semibold text-center">Username</div>
        <div className="flex py-2">
          <div className="w-32 text-gray-600 text-right pr-4">Full Name</div>
          <div className="ml-1">Abdulai Nuru-deen</div>
        </div>
        <div className="flex py-2">
          <div className="w-32 text-gray-600 text-right pr-4">Email</div>
          <div className="ml-1">Abdulai Nuru-deen</div>
        </div>
        <div className="flex py-2">
          <div className="w-32 text-gray-600 text-right pr-4">Phone Number</div>
          <div className="ml-1">+233543027058</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
