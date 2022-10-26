import {
    GET_TAREA_REQUEST,
    GET_TAREA_SUCCESS,
    GET_TAREA_FAIL,
  } from "../actions/types";
      
  const initialState = { isLoading: false, tareas: null };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_TAREA_REQUEST:
        return {
          ...state,
          isLoading: true,          
        };        
      case GET_TAREA_SUCCESS:              
        return {
          ...state,
          isLoading: false,
          tareas: payload,
        };
      case GET_TAREA_FAIL:
        return {
          ...state,
          isLoading: false,
          tareas: null,
        };     
      default:
        return state;
    }
  }