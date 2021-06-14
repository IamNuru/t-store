import React, { useContext } from "react";
import AuthContext from "../../context/auth/Context";

const Details = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user !== null && (
        <div className="w-full block">
          <div className="w-full md:w-2/3 lg:w-1/2 m-auto bg-gray-100 mt-1 h-full h-screen pb-32 pl-4">
            <div className="font-semibold text-center">{user.email}</div>
            <div className="flex py-2">
              <div className="w-32 text-gray-600 text-right pr-4">
                Full Name
              </div>
              <div className="ml-1 capitalize">{user.name}</div>
            </div>
            <div className="flex py-2">
              <div className="w-32 text-gray-600 text-right pr-4">Email</div>
              <div className="ml-1">{user.email}</div>
            </div>
            <div className="flex py-2">
              <div className="w-32 text-gray-600 text-right pr-4">Gender</div>
              <div className="ml-1">
                {user.gender === "m" ? "Male" : "Female"}
              </div>
            </div>
            <div className="flex py-2">
              <div className="w-32 text-gray-600 text-right pr-4">
                Phone Number
              </div>
              <div className="ml-1">+233543027058</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
