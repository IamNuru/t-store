import {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_CATEGORY,
  GET_CATEGORIES,
  GET_ELECTRONICS,
  GET_SHOES,
  GET_CLOTHINGS,
  SEARCH_PRODUCTS,
  GET_CATEGORY_PRODUCTS,
  GET_RELATED_PRODUCTS,
  ERRORS,
  CLEAR_MESSAGES,
  CLEAR_ERRORS,
  SET_lOADING,
} from "../types";

const ProductsReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
    case UPDATE_PRODUCT:
    case DELETE_PRODUCT:
      return {
        ...state,
        success: action.payload,
        errors: null,
      };
    case ADD_CATEGORY:
    case UPDATE_CATEGORY:
    case DELETE_CATEGORY:
      return {
        ...state,
        success: action.payload,
        errors: null,
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_PRODUCTS:
    case GET_CATEGORY_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case GET_SHOES:
      return {
        ...state,
        shoes: action.payload,
        loading: false,
        errors: null,
        success: null,
      };
    case GET_CLOTHINGS:
      return {
        ...state,
        clothings: action.payload,
        loading: false,
        errors: null,
        success: null,
      };
    case GET_ELECTRONICS:
      return {
        ...state,
        electronics: action.payload,
        loading: false,
        errors: null,
        success: null,
      };
    case SEARCH_PRODUCTS:
      return {
        ...state,
        searchedItems: action.payload
      };
    /* case SEARCH_PRODUCTS:
      return {
        ...state,
        searchedItems: state.products.filter((product) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            product.title.match(regex) ||
            product.description.match(regex) ||
            product.category.match(regex)
          );
        }),
      }; */
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    case GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };
    case GET_RELATED_PRODUCTS:
      return {
        ...state,
        relatedProducts: action.payload,
        loading: false,
      };

    case CLEAR_MESSAGES:
      return {
        ...state,
        success: "",
        errors: "",
      };

    case ERRORS:
      return {
        ...state,
        errors: action.payload,
        success: null,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };

    case SET_lOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default ProductsReducer;
