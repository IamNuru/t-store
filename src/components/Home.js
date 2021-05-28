import React, { useContext, useEffect } from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";
import CartContext from "./context/cart/CartContext"


const Home = () => {
  const { setLocalstorage } = useContext(CartContext)
  useEffect(() => {
    //setLocalstorage()
  });
  return (
      <div className="block md:flex">
        <Sidebar />
        <Main />
      </div>
  );
};

export default Home;
