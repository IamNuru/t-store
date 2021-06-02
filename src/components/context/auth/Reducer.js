import {
  REGISTER,
  LOGIN,
  LOGOUT,
  UPDATE_PASSWORD,
  ADD_TO_ORDERS
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

    case UPDATE_PASSWORD:
      return {
        ...state,
        user: state.user.password = action.payload
      };

    case ADD_TO_ORDERS:
      return {
        ...state,
        orders: [...state.orders, action.payload]
      };

    default:
      return {
        ...state,
      };
  }
};

export default AuthReducer;
