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
    user:
      {
        username: 'admin',
        password: 'password',
        name: 'Administrator'
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
