import {
  REGISTER,
  LOGIN,
  LOGOUT,
  ADD_TO_ORDERS,
  ERRORS,
  CLEAR_ERRORS,
  GET_ORDERS,
  GET_USER,
  CLEAR_MESSAGES,
  SUCCESS_MESSAGES,
  SET_lOADING,
  SET_LOGED_IN,
} from "../types";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case REGISTER:
    case LOGIN:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        user: action.payload.user,
        logedin: true,
        errors: null,
        loading: false,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        logedin: true,
        loading: false,
      };

    /* case LOGIN:
      return {
        ...state,
        user: action.payload[0].user,
        logedin: action.payload[0].token,
        errors: null
      }; */

    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        logedin: false,
        user: null,
        errors: null,
        loading: false,
      };

    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };

    case CLEAR_ERRORS:
      return {
        errors: null,
        loading: false,
      };
      

    case ERRORS:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };

    case ADD_TO_ORDERS:
      return {
        ...state,
        orders: [...state.orders, action.payload]
      };

    case SUCCESS_MESSAGES:
      return {
        ...state,
        success: action.payload,
        loading:false,
      };

    case CLEAR_MESSAGES:
      return {
        ...state,
        success:null,
        errors:null,
        loading: false,
      };

    case SET_LOGED_IN:
      return {
        ...state,
        logedin:action.payload,
      };



    case SET_lOADING:
      return {
        ...state,
        loading:action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default AuthReducer;
