

import TareaService from "../services/tarea.service";
import UserService from "../services/users.service";

import { CREATE_TAREA_FAIL, CREATE_TAREA_REQUEST, CREATE_TAREA_SUCCESS, DELETE_TAREA_FAIL, DELETE_TAREA_REQUEST, DELETE_TAREA_SUCCESS, GET_TAREAS_FAIL, GET_TAREAS_REQUEST, GET_TAREAS_SUCCESS, GET_TAREA_FAIL, GET_TAREA_REQUEST, GET_TAREA_SUCCESS, GET_USER_TAREAS_FAIL, GET_USER_TAREAS_REQUEST, GET_USER_TAREAS_SUCCESS, SAVE_TAREA_FAIL, SAVE_TAREA_REQUEST, SAVE_TAREA_SUCCESS } from "./types";
  
export const getTareas = () => async(dispatch) => {
    dispatch({ type: GET_TAREAS_REQUEST });
    try {
      const tareas = await TareaService.getTareas();
      dispatch({ type: GET_TAREAS_SUCCESS, payload: tareas });
    } catch (error) {
      dispatch({ type: GET_TAREAS_FAIL, payload: error.message });
    }
};

export const getUserTareas = () => async(dispatch) => {
  dispatch({ type: GET_USER_TAREAS_REQUEST });
  try {
    const tareas = await UserService.getUserTareas();
    dispatch({ type: GET_USER_TAREAS_SUCCESS, payload: tareas });
  } catch (error) {
    dispatch({ type: GET_USER_TAREAS_FAIL, payload: error.message });
  }
};

export const createTarea = (tarea) => async(dispatch) => {        
  dispatch({ type: CREATE_TAREA_REQUEST });
  try {
    const response = await TareaService.createTarea(tarea);
    dispatch({ type: CREATE_TAREA_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: CREATE_TAREA_FAIL });
  }
};

export const deleteTarea = (id) => async(dispatch) => {        
  dispatch({ type: DELETE_TAREA_REQUEST });
  try {
    const response = await TareaService.deleteTarea(id);
    dispatch({ type: DELETE_TAREA_SUCCESS, payload: response, success: true });
  } catch (error) {
    dispatch({ type: DELETE_TAREA_FAIL });
  }
};

export const getTareaById = (id) => async(dispatch) => {        
  dispatch({ type: GET_TAREA_REQUEST });
  try {
    const response = await TareaService.getTarea(id);
    dispatch({ type: GET_TAREA_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: GET_TAREA_FAIL });
  }
};

export const saveTarea = (tarea) => async(dispatch) => {        
  dispatch({ type: SAVE_TAREA_REQUEST });
  try {
    const response = await TareaService.saveTarea(tarea);
    dispatch({ type: SAVE_TAREA_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: SAVE_TAREA_FAIL });
  }
};



