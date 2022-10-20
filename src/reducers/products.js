import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
  } from "../actions/types";
      
  const initialState = { isLoading: false, productos: null };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_PRODUCTS_REQUEST:
        return {
          ...state,
          isLoading: true,          
        };        
      case GET_PRODUCTS_SUCCESS:             
        return {
          ...state,
          isLoading: false,
          productos: payload,
        };
      case GET_PRODUCTS_FAIL:
        return {
          ...state,
          isLoading: false,
          productos: null,
        };     
      default:
        return state;
    }
  }