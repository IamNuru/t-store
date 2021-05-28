import {
    GET_PRODUCTS,
    GET_PRODUCT,
    GET_ELECTRONICS,
    GET_JEWELLERIES,
    GET_WOMENS_CLOTHING,
    GET_MENS_CLOTHING,
    SEARCH_PRODUCTS,
    GET_RELATED_PRODUCTS
  } from "../types";


const ProductsReducer = (state, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return  {
                ...state,
                products: action.payload,
                loading: false
            };
        case GET_JEWELLERIES:
            return  {
                ...state,
                jewelleries: action.payload,
                loading: false
            };
        case GET_MENS_CLOTHING:
            return  {
                ...state,
                mensClothing: action.payload,
                loading: false
            };
        case GET_WOMENS_CLOTHING:
            return  {
                ...state,
                womensClothing: action.payload,
                loading: false
            };
        case GET_ELECTRONICS:
            return  {
                ...state,
                electronics: action.payload,
                loading: false
            };
        case SEARCH_PRODUCTS:
            return {
                ...state,
                searchedItems: state.products.filter((product) => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return(
                        product.title.match(regex) || product.description.match(regex) || product.category.match(regex)
                    )
                })
            }
        case GET_PRODUCT:
            return{
                ...state,
                product: action.payload,
                loading: false
            }
        case GET_RELATED_PRODUCTS:
            return{
                ...state,
                relatedProducts: action.payload,
                loading: false
            }
    
        default:
            return{
                ...state
            }
    }
}

export default ProductsReducer
