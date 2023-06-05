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
  GET_USER_TAREAS_REQUEST,
  GET_USER_TAREAS_SUCCESS,
  GET_USER_TAREAS_FAIL,
} from "../actions/types";

const initialState = { isLoading: false, tareas: null, error: null };

export const tareasReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TAREAS_REQUEST:
      return { ...state, isLoading: true };
    case GET_TAREAS_SUCCESS:
      return { ...state, isLoading: false, tareas: payload };
    case GET_TAREAS_FAIL:
      return { ...state, isLoading: false, error: payload };

    case CREATE_TAREA_REQUEST:
      return { ...state, isLoading: true };
    case CREATE_TAREA_SUCCESS:
      return { ...state, isLoading: false, tareas: payload.data };
    case CREATE_TAREA_FAIL:
      return { ...state, isLoading: false, error: payload };

    case DELETE_TAREA_REQUEST:
      return { ...state, isLoading: true };
    case DELETE_TAREA_SUCCESS:
      return { ...state, isLoading: false, tareas: payload.data };
    case DELETE_TAREA_FAIL:
      return { ...state, isLoading: false, error: payload };

    case SAVE_TAREA_REQUEST:
      return { ...state, isLoading: true };
    case SAVE_TAREA_SUCCESS:
      return { ...state, isLoading: false, tareas: payload.data };
    case SAVE_TAREA_FAIL:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};

export const getUserTareasReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_TAREAS_REQUEST:
      return { ...state, isLoading: true };
    case GET_USER_TAREAS_SUCCESS:
      return { ...state, isLoading: false, success: true, userTareas: payload };
    case GET_USER_TAREAS_FAIL:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};

export const getTareaReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TAREA_REQUEST:
      return { ...state, isLoading: true };
    case GET_TAREA_SUCCESS:
      return { ...state, isLoading: false, tarea: payload };
    case GET_TAREA_FAIL:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
