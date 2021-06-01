import { useReducer } from "react";
import AuthReducer from "./Reducer";
import AuthContext from "./Context";

import {
  REGISTER,
  LOGIN,
  LOGOUT,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    users:[
      {
        username: 'admin',
        password: 'password',
        fullName: 'Admin'
      },
      {
        username: 'user',
        password: 'password',
        fullName: 'User'
      },
      {
        username: 'owner',
        password: 'password',
        fullName: 'Owner'
      },
    ],
    user:
      {
        username: 'admin',
        password: 'password',
        fullName: 'Administrator'
      },
    logedin: false,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // set local storage to logged in user
  /*if (window.localStorage.getItem('user')){
    initialState.login = true 
  }*/


  
  //actions
  //Register user
  const register = (user) => {
    dispatch({
      type: (REGISTER, LOGIN),
      payload: user,
    });
    
  };

  //log user in
  const login = () => {
    dispatch({
      type: LOGIN,
    });
  };

  

  //log user out
  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        users: state.users,
        logedin: state.logedin,
        login,
        register,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
