import { useReducer } from "react";
import axios from 'axios';
import ShirtsReducer from "./ShirtsReducer";
import ShirtsContext from "./ShirtsContext";

import { GET_SHIRTS, GET_SHIRT } from "../types";

const ShirtsState = (props) => {
  const initialState = {
    shirts: null,
    shirt: null,
    loading: false,
  };

  //initialise the state
  const [state, dispatch] = useReducer(ShirtsReducer, initialState);

  //set the actions
  //**get the shirts */
  const getShirts = async () => {
      try {
          const res = await axios.get('https://fakestoreapi.com/shirts');
            dispatch({
                type: GET_SHIRTS,
                payload: res.data,
            });
      } catch (error) {
          
      }
      
  };

  //**get a shirt */
  const getShirt = (id) => {
    dispatch({
      type: GET_SHIRT,
      payload: id,
    });
  };

  return (
    <ShirtsContext.Provider
      value={{
        shirts: state.shirts,
        shirt: state.shirt,
        loading: state.loading,
        getShirts,
        getShirt,
      }}
    >
        {props.children}
    </ShirtsContext.Provider>
  );
};

export default ShirtsState;
