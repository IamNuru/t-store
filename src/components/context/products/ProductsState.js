import { useReducer } from "react";
import axios from "axios";
import ProductsReducer from "./ProductsReducer";
import ProductsContext from "./ProductsContext";

import {
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_ELECTRONICS,
  GET_JEWELLERIES,
  GET_WOMENS_CLOTHING,
  GET_MENS_CLOTHING,
  SEARCH_PRODUCTS,
} from "../types";

const ProductsState = (props) => {
  const initialState = {
    products: null,
    jewelleries: null,
    mensClothing: null,
    womensClothing: null,
    electronics: null,
    product: null,
    searchedItems:null,
    loading: false,
  };

  //initialise the state
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  //set the actions
  //**get all the products */
  const getProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {}
  };

  //**get specific products products */
  //get Jewelery
  const getJewelleries = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products/category/jewelery");
      dispatch({
        type: GET_JEWELLERIES,
        payload: res.data,
      });
    } catch (error) {}
  };

  //get Mens' Clothing
  const getMensClothing = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products/category/men's clothing");
      dispatch({
        type: GET_MENS_CLOTHING,
        payload: res.data,
      });
    } catch (error) {}
  };

  //get Womens' Clothing
  const getWomensClothing = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products/category/women's clothing");
      dispatch({
        type: GET_WOMENS_CLOTHING,
        payload: res.data,
      });
    } catch (error) {}
  };

  //get Electronics
  const getElectronics = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products/category/electronics?limit=6");
      dispatch({
        type: GET_ELECTRONICS,
        payload: res.data,
      });
    } catch (error) {}
  };

  //**get a product */
  const getProduct = (id) => {
    dispatch({
      type: GET_PRODUCT,
      payload: id,
    });
  };

  // search product
  const searchProducts =(text) =>{
    dispatch({
      type: SEARCH_PRODUCTS,
      payload: text
    })
  }

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        jewelleries: state.jewelleries,
        mensClothing: state.mensClothing,
        womensClothing: state.womensClothing,
        electronics: state.electronics,
        product: state.product,
        searchedItems: state.searchedItems,
        loading: state.loading,
        getProducts,
        getJewelleries,
        getMensClothing,
        getWomensClothing,
        getElectronics,
        getProduct,
        searchProducts,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
