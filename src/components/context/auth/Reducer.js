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
        user: action.payload,
        users: [...state.users, action.payload],
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
