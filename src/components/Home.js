import React from "react";
import Main from "./Main";
import { Switch, Route } from "react-router-dom";
import Profile from "./profile/Profile";
import ProtectedRoute from "../ProtectedRoute";
import ProfileMain from "./profile/ProfileMain";
import Admin from "./dashboard";
import Help from "./Help";
import Chat from "./chatbot/Chat"

const Home = (props) => {
  return (
    <div className="h-full">
      <Switch>

        <ProtectedRoute exact path="/dashboard/*" component={Admin}/>
        <ProtectedRoute exact path="/account" component={Profile} />
        <ProtectedRoute exact path="/account/*" component={ProfileMain}/>
        <Route exact path="/help" component={Help}/>
        <Route exact path="/chatbot" component={Chat}/>
        <Route path="" component={Main} />
      </Switch>
    </div>
  );
};

export default Home;
