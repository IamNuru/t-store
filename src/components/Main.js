import React from "react";

import { Switch, Route} from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute"
import MainPage from './MainPage'
import Electronic from "./products/electronic/Electronic";
import MensClothing from "./products/mensClothing/MensClothing";
import WomensClothing from "./products/womensClothing/WomensClothing";
import Jewellery from "./products/jewellery/Jewellery";
import Cart from "./Cart";
import Checkout from "./cart/Checkout";
import SearchedItem from "./SearchPage";
import LoginPage from "./user/LoginPage";
import Register from "./user/Register";
import SingleProduct from "./products/SingleProduct";
import SuccessOrder from "./cart/SuccessOrder";


const Main = () => {

  return (
    <div className="w-full mt-4 md:ml-48 mt-48 md:mt-24 pl-4">
        <Switch> 
          <Route exact path="/electronics" component={Electronic} />
          <Route exact path="/men's clothing" component={MensClothing} />
          <Route exact path="/women's clothing" component={WomensClothing} />
          {/* <Route exact path="/jewellery" component={Jewellery} /> */}
          <Route exact path="/cart" component={Cart} />
          <ProtectedRoute exact path="/cart/checkout" component={Checkout} />
          <ProtectedRoute exact path="/cart/checkout/success" component={SuccessOrder} />
          <Route exact path="/search/:txt" component={SearchedItem} />
          <Route exact path="/product/:cat/:id" component={SingleProduct} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path="/jewellery" component={Jewellery} />
          <Route path="/" component={MainPage} />
        </Switch>
    </div>
  );
};

export default Main;
