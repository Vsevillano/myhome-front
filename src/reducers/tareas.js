import {
    GET_TAREA_REQUEST,
    GET_TAREA_SUCCESS,
    GET_TAREA_FAIL,
    GET_TAREAS_REQUEST,
    GET_TAREAS_SUCCESS,
    GET_TAREAS_FAIL,
    SAVE_TAREA_REQUEST,
    SAVE_TAREA_SUCCESS,
    SAVE_TAREA_FAIL,
    DELETE_TAREA_REQUEST,
    DELETE_TAREA_SUCCESS,
    DELETE_TAREA_FAIL,
  } from "../actions/types";
      
  const initialState = { isLoading: false, tareas: null, tarea: null };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_TAREAS_REQUEST:
        return {
          ...state,
          isLoading: true,          
        };        
      case GET_TAREAS_SUCCESS:              
        return {
          ...state,
          isLoading: false,
          tareas: payload,
        };
      case GET_TAREAS_FAIL:
        return {
          ...state,
          isLoading: false,
          tareas: null,
        }; 
      case GET_TAREA_REQUEST:
        return {
          ...state,
          isLoading: true,          
        };        
      case GET_TAREA_SUCCESS:              
        return {
          ...state,
          isLoading: false,
          tarea: payload,
        };
      case GET_TAREA_FAIL:
        return {
          ...state,
          isLoading: false,
          tarea: null,
        };  
      case SAVE_TAREA_REQUEST:
        return {
          ...state,
          isLoading: true,          
        };        
      case SAVE_TAREA_SUCCESS:              
        return {
          ...state,
          isLoading: false,
          tarea: payload,
        };
      case SAVE_TAREA_FAIL:
        return {
          ...state,
          isLoading: false,
          tarea: null,
        };  
        
      case DELETE_TAREA_REQUEST:
        return {
          ...state,
          isLoading: true,          
        };        
      case DELETE_TAREA_SUCCESS:              
        return {
          ...state,
          isLoading: false,
          tarea: payload,
        };
      case DELETE_TAREA_FAIL:
        return {
          ...state,
          isLoading: false,
          tarea: null,
        };  
      default:
        return state;
    }
  }