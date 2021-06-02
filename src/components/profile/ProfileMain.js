import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Details from "./account/Details";
import Address from "./account/Address";
import ResetPassword from "./account/ResetPassword";
import Orders from "./tstore/Orders";
import WishList from "./tstore/WishList";

const ProfileMain = () => {
  const history = useHistory();
  return (
    <div className="block">
      <div className="hidden md:block block w-48 mt-14">
        <h2 className="text-center font-bold text-2xl py-2">Account</h2>
      </div>
      <div className="w-full shadow-md mb-2">
        <i
          className="fa fa-angle-left text-3xl text-green-600 m-1 font-bold cursor-pointer px-2 py-1"
          onClick={() => history.goBack()}
          title="go back"
        ></i>
      </div>
      <div className="block w-full">
        <Switch>
          <Route exact path="/account/details" component={Details} />
          <Route exact path="/account/address" component={Address} />
          <Route
            exact
            path="/account/resetpassword"
            component={ResetPassword}
          />
          <Route exact path="/account/orders" component={Orders} />
          <Route exact path="/account/wishlist" component={WishList} />
        </Switch>
      </div>
    </div>
  );
};

export default ProfileMain;
