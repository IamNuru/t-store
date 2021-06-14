import {
  REGISTER,
  LOGIN,
  LOGOUT,
  UPDATE_PASSWORD,
  ADD_TO_ORDERS,
  ERRORS,
  CLEAR_ERRORS,
  GET_ORDERS,
  GET_USER,
  CLEAR_MESSAGES,
} from "../types";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case REGISTER:
    case LOGIN:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        user: action.payload.user,
        logedin: action.payload.token,
        errors: null
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        logedin: true,
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
        errors: null
      };

    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload
      };

    case CLEAR_ERRORS:
      return {
        errors: null
      };

    case UPDATE_PASSWORD:
      return {
        ...state,
        success:action.payload,
        /* user: {...state.user, password:action.payload.newPassword},
        users: [...state.users.map((u) => 
        u.username === state.user.username ? {...u, password:action.payload.newPassword} : u)] */
      };
      

    case ERRORS:
      return {
        ...state,
        errors: action.payload
      };

    case ADD_TO_ORDERS:
      return {
        ...state,
        orders: [...state.orders, action.payload]
      };

    case CLEAR_MESSAGES:
      return {
        ...state,
        success:'',
        errors:''
      };

    default:
      return {
        ...state,
      };
  }
};

export default AuthReducer;
