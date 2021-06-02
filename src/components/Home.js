import React from "react";
import Main from "./Main";
import { Switch, Route } from "react-router-dom";
import Profile from "./profile/Profile";
import Address from "./profile/account/Address";
import Details from "./profile/account/Details";
import ResetPassword from "./profile/account/ResetPassword";
import Orders from "./profile/tstore/Orders";
import WishList from "./profile/tstore/WishList";
import ProtectedRoute from "../ProtectedRoute";
import ProfileMain from "./profile/ProfileMain";

const Home = (props) => {
  return (
    <div className="h-screen">
      <Switch>
        <ProtectedRoute exact path="/account" component={Profile} />
        <ProtectedRoute exact path="/account/*" component={ProfileMain} />
        {/* <ProtectedRoute exact path="/account/details" component={Details} />
        <ProtectedRoute exact path="/account/address" component={Address} />
        <ProtectedRoute exact path="/account/resetpassword" component={ResetPassword} />
        <ProtectedRoute exact path="/account/orders" component={Orders} />
        <ProtectedRoute exact path="/account/wishlist" component={WishList} />
        <ProtectedRoute exact path="/account" component={Profile} /> */}
        <Route path="" component={Main} />
      </Switch>
    </div>
  );
};

export default Home;
