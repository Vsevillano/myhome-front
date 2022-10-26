

import TareaService from "../services/tarea.service";
import { CREATE_TAREA_FAIL, CREATE_TAREA_REQUEST, CREATE_TAREA_SUCCESS, GET_TAREA_FAIL, GET_TAREA_REQUEST, GET_TAREA_SUCCESS } from "./types";
  
export const getTareas = () => (dispatch) => {
    dispatch({
        type: GET_TAREA_REQUEST,      
    });
    return TareaService.getTareas().then(
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