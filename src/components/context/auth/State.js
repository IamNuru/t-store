import { useReducer } from "react";
import AuthReducer from "./Reducer";
import AuthContext from "./Context";

import {
  REGISTER,
  LOGIN,
  LOGOUT,
  UPDATE_PASSWORD,
  ADD_TO_ORDERS,
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
    orders:[],

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
  

  //log user out
  const updatePassword = (credentials) => {
    dispatch({
      type: UPDATE_PASSWORD,
      payload: credentials.newPassword
    });
  };


  //add to order
  const addToOrders = (product) => {
    dispatch({
      type: ADD_TO_ORDERS,
      payload: product,
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        users: state.users,
        logedin: state.logedin,
        orders: state.orders,
        login,
        register,
        logout,
        updatePassword,
        addToOrders
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
