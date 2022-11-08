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
    CREATE_TAREA_REQUEST,
    CREATE_TAREA_SUCCESS,
    CREATE_TAREA_FAIL,
  } from "../actions/types";
      
  const initialState = { loading: false, tareas: null, tarea: {}, error: null };

  export const getTareasReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_TAREAS_REQUEST:
            return { loading: true };
        case GET_TAREAS_SUCCESS:            
            return { loading: false, success: true, tareas: payload };
        case GET_TAREAS_FAIL:
            return { loading: false, error: payload };        
        default:
            return state;
    }
}

export const createTareaReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
      case CREATE_TAREA_REQUEST:
          return { loading: true };
      case CREATE_TAREA_SUCCESS:            
          return { loading: false, success: true };
      case CREATE_TAREA_FAIL:
          return { loading: false, error: payload };        
      default:
          return state;
  }
}

export const getTareaReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
      case GET_TAREA_REQUEST:
          return { loading: true };
      case GET_TAREA_SUCCESS:            
          return { loading: false, tarea: payload };
      case GET_TAREA_FAIL:
          return { loading: false, error: payload };        
      default:
          return state;
  }
}

export const saveTareaReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
      case SAVE_TAREA_REQUEST:
          return { loading: true };
      case SAVE_TAREA_SUCCESS:            
          return { loading: false, tarea: payload };
      case SAVE_TAREA_FAIL:
          return { loading: false, error: payload };        
      default:
          return state;
  }
}

export const deleteTareaReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
      case DELETE_TAREA_REQUEST:
          return { loading: true };
      case DELETE_TAREA_SUCCESS:            
          return { loading: false, tarea: payload };
      case DELETE_TAREA_FAIL:
          return { loading: false, error: payload };        
      default:
          return state;
  }
}