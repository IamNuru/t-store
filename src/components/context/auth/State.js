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
    user:null,
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
  const register = (comini) => {
    dispatch({
      type: REGISTER,
      payload: comini,
    });
    
  };

  //log user in
  const login = (u) => {
    dispatch({
      type: LOGIN,
      payload:u
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
      payload: credentials
    });
  }
  ;


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
