import React, { useEffect } from "react";
import { useReducer } from "react";
import AuthReducer from "./Reducer";
import AuthContext from "./Context";
import axios from "axios";

//import variables from types
import {
  REGISTER,
  LOGIN,
  LOGOUT,
  UPDATE_PASSWORD,
  ADD_TO_ORDERS,
  ERRORS,
  GET_ORDERS,
  GET_USER,
CLEAR_MESSAGES,

} from "../types";

const AuthState = (props) => {
  const initialState = {
    users: [],
    user: null,
    orders: [],
    errors: null,
    success: null,
    logedin: false,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //set configuration for making request
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Access-Control-Allow-Origin": "*"
    },
  };

  //get token from localstorage if found
  if (localStorage.getItem("token")) {
    initialState.logedin = localStorage.getItem("token");
  } else {
    initialState.logedin = false;
  }

  //get authenticated user object
  useEffect(() => {
    const getAuthUser = async () => {
      const configs = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      await axios
        .get(`${process.env.REACT_APP_API_URL}/user`, configs)
        .then((res) => {
          dispatch({
            type: GET_USER,
            payload: res.data,
          });
        })
        .catch((err) => {});
    };
    getAuthUser();
    // eslint-disable-next-line
  }, [initialState.user]);

  /** *** ACTIONS *** */
  //Register new user
  const register = async (user) => {
    await axios
      .post(`${process.env.REACT_APP_API_URL}/register`, user, config)
      .then((res) => {
        dispatch({
          type: REGISTER,
          payload: res.data[0],
        });
      })
      .catch((err) => {
        var obj = err.response.data.errors ? err.response.data.errors : "";
        dispatch({
          type: ERRORS,
          payload: obj[Object.keys(obj)[0]],
        });
      });
  };

  //log user in
  const login = async (user) => {
    await axios
      .post(`${process.env.REACT_APP_API_URL}/login`, user, config)
      .then((res) => {
        dispatch({
          type: LOGIN,
          payload: res.data[0],
        });
      })
      .catch((err) => {
        var obj = err.response.data.errors ? err.response.data.errors : "";
        dispatch({
          type: ERRORS,
          payload: obj[Object.keys(obj)[0]],
        });
      });
  };

  //Clear all errors on the page such as form errors
  const setError = (err) => {
    dispatch({
      type: ERRORS,
      payload: err,
    });
  };

  //log user out
  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  //update logged in user password
  const updatePassword = async (credentials) => {
    await axios.post(`${process.env.REACT_APP_API_URL}/resetpassword`, credentials, config)
    .then(res => {
      dispatch({
        type: UPDATE_PASSWORD,
        payload: res.data,
      });
    }).catch((err) => {
      var obj = err.response.data.errors ? err.response.data.errors : "";
      dispatch({
        type: ERRORS,
        payload: obj[Object.keys(obj)[0]],
      });
    });
    
  };

  //add to order
  const addToOrders = async (order) => {
    await axios
      .post(`http://localhost:8000/api/order`, order, config)
      /* .post(`${process.env.REACT_APP_API_URL}/order`, order, config) */
      .then((res) => {
        dispatch({
          type: ADD_TO_ORDERS,
          payload: res.data[0],
        });
      })
      .catch((err) => {
        var obj = err.response.data.errors ? err.response.data.errors : "";
        dispatch({
          type: ERRORS,
          payload: obj[Object.keys(obj)[0]],
        });
      });
  };

  //get authenticated user orders
  const getOrders = async () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/orders`, config)
      .then((res) => {
        dispatch({
          type: GET_ORDERS,
          payload: res.data[0].transactions,
        });
      })
      .catch((err) => {});
  };

  //Clear messages if any
  const clearMessages = () =>{
    dispatch({
      type:CLEAR_MESSAGES,
    })
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        users: state.users,
        logedin: state.logedin,
        orders: state.orders,
        errors: state.errors,
        success: state.success,
        login,
        register,
        logout,
        updatePassword,
        addToOrders,
        setError,
        getOrders,
        clearMessages,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
