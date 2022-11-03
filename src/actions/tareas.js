

import TareaService from "../services/tarea.service";
import { CREATE_TAREA_FAIL, CREATE_TAREA_REQUEST, CREATE_TAREA_SUCCESS, DELETE_TAREA_FAIL, DELETE_TAREA_REQUEST, DELETE_TAREA_SUCCESS, GET_TAREAS_FAIL, GET_TAREAS_REQUEST, GET_TAREAS_SUCCESS, GET_TAREA_FAIL, GET_TAREA_REQUEST, GET_TAREA_SUCCESS, SAVE_TAREA_FAIL, SAVE_TAREA_REQUEST, SAVE_TAREA_SUCCESS } from "./types";
  
export const getTareas = () => (dispatch) => {
    dispatch({
        type: GET_TAREAS_REQUEST,      
    });
    return TareaService.getTareas().then(
        (response) => {
        dispatch({
            type: GET_TAREAS_SUCCESS,
            payload: response,
        });

        return Promise.resolve();
        },
        (error) => {
        dispatch({
            type: GET_TAREAS_FAIL,
        });
        return Promise.reject();
        }
    );
};

export const createTarea = (tarea) => (dispatch) => {    
    
    dispatch({
        type: CREATE_TAREA_REQUEST,
    });
    return TareaService.createTarea(tarea).then(
      (response) => {
        dispatch({
          type: CREATE_TAREA_SUCCESS,
        });
  
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: CREATE_TAREA_FAIL,
        });
        return Promise.reject();
      }
    );
  };

  export const getTarea = (id) => (dispatch) => {
    dispatch({
      type: GET_TAREA_REQUEST,      
    });
    return TareaService.getTarea(id).then(
      (response) => {          
        dispatch({
          type: GET_TAREA_SUCCESS,
          payload: response,
        });
  
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: GET_TAREA_FAIL,
        });
        return Promise.reject();
      }
    );
  };

  export const saveTarea = (lista) => (dispatch) => {
    dispatch({
      type: SAVE_TAREA_REQUEST,      
    });
    
    return TareaService.saveTarea(lista).then(
      (response) => {             
        dispatch({
          type: SAVE_TAREA_SUCCESS,
          payload: response,
        });
  
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: SAVE_TAREA_FAIL,
        });
        return Promise.reject();
      }
    );
  };

  export const deleteTarea = (id) => (dispatch) => {
    dispatch({
      type: DELETE_TAREA_REQUEST,      
    });
    return TareaService.deleteTarea(id).then(
      (response) => {             
        dispatch({
          type: DELETE_TAREA_SUCCESS,
          payload: response,
        });
  
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: DELETE_TAREA_FAIL,
        });
        return Promise.reject();
      }
    );
  };