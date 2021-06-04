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
        users: [...state.users, action.payload],
        user: action.payload,
        logedin: true
      };

    case LOGIN:
      return {
        ...state,
        user: action.payload,
        logedin: true
      };

    case LOGOUT:
      return {
        ...state,
        logedin: false,
        user: null
      };

    case UPDATE_PASSWORD:
      return {
        ...state,
        user: {...state.user, password:action.payload.newPassword},
        /* user: {...state, user: {...state.user, password:action.payload.newPassword}}, */
        users: [...state.users.map((u) => 
        u.username === state.user.username ? {...u, password:action.payload.newPassword} : u)]
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
