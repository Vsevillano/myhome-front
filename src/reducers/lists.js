import {
    CREATE_LIST_SUCCESS,
    CREATE_LIST_FAIL,
    GET_LIST_SUCCESS,
    GET_LIST_FAIL,
  } from "../actions/types";
      
  const initialState = { isLoading: false, listas: null };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_LIST_SUCCESS:
        return {
          ...state,
          isLoading: false,
          listas: payload.lists,
        };
      case CREATE_LIST_FAIL:
        return {
          ...state,
          isLoading: false,
          listas: null,
        };
      case GET_LIST_SUCCESS:             
        return {
          ...state,
          isLoading: false,
          listas: payload,
        };
      case GET_LIST_FAIL:
        return {
          ...state,
          isLoading: false,
          listas: null,
        };
      default:
        return state;
    }
  }