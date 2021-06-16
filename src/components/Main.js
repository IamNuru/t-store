import React from "react";

import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import MainPage from "./MainPage";
import Electronic from "./products/electronic/Electronic";
import Clothings from "./products/clothings/Clothings";
import CategoryProducts from "./products/CategoryProducts";
import Cart from "./cart/Cart";
import Checkout from "./cart/Checkout";
import SearchedItem from "./SearchPage";
import LoginPage from "./auth/LoginPage";
import Register from "./auth/Register";
import SingleProduct from "./products/SingleProduct";
import SuccessOrder from "./cart/SuccessOrder";
import Sidebar from "./Sidebar";
import Shoes from "./products/shoes/Shoes";
import PageNotFound from "./PageNotFound";
import Header from "./Header";

const Main = (props) => {
  return (
    <div className="block md:flex h-full">
      <>
        <Header />
      </>
      <>
        <Sidebar />
      </>
      <div className="w-full md:ml-48 mt-28 md:mt-14 px-1 md:pl-4">
        <Switch>
          <Route exact path="/electronics" component={Electronic} />
          <Route exact path="/clothings" component={Clothings} />
          <Route exact path="/shoes" component={Shoes} />
          <Route exact path="/cart" component={Cart} />
          <ProtectedRoute exact path="/cart/checkout" component={Checkout} />
          <ProtectedRoute
            exact
            path="/cart/checkout/success/:reference"
            component={SuccessOrder}
          />
          <Route exact path="/search" component={SearchedItem} />
          <Route exact path="/category/:cat" component={CategoryProducts} />
          <Route exact path="/product/:id" component={SingleProduct} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={MainPage} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
