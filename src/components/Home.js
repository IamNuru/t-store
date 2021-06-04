import React from "react";
import Main from "./Main";
import { Switch, Route } from "react-router-dom";
import Profile from "./profile/Profile";
import ProtectedRoute from "../ProtectedRoute";
import ProfileMain from "./profile/ProfileMain";

const Home = (props) => {
  return (
    <div className="h-full">
      <Switch>
        <ProtectedRoute exact path="/account" component={Profile} />
        <ProtectedRoute exact path="/account/*" component={ProfileMain} />
        <Route path="" component={Main} />
      </Switch>
    </div>
  );
};

export default Home;
