import { GET_SHIRTS, GET_SHIRT } from "../types";


const ShirtsReducer = (state, action) => {
    switch (action.type) {
        case GET_SHIRTS:
            return  {
                ...state,
                shirts: action.payload,
                loading: false
            };
        case GET_SHIRT:
            return{
                ...state,
                shirt: action.payload,
            }
    
        default:
            return{
                ...state
            }
    }
}

export default ShirtsReducer
