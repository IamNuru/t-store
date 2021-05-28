import {
  REGISTER,
  LOGIN,
  LOGOUT
} from "../types";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case LOGIN:
      return {
        ...state,
        logedin: true
      };

    case LOGOUT:
      return {
        ...state,
        logedin: false
      };

    default:
      return {
        ...state,
      };
  }
};

export default AuthReducer;
