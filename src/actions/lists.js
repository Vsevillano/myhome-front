import {
    CREATE_LIST_SUCCESS,
    CREATE_LIST_FAIL,
    GET_LIST_SUCCESS,
    GET_LIST_FAIL,
  } from "./types";
  
  import ListService from "../services/lists.service";
  
  export const create = (nombre) => (dispatch) => {
    return ListService.createLista(nombre).then(
      (response) => {
        dispatch({
          type: CREATE_LIST_SUCCESS,
        });
  
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: CREATE_LIST_FAIL,
        });
        return Promise.reject();
      }
    );
  };
  
  export const getListas = () => (dispatch) => {
    return ListService.getListas().then(
      (response) => {             
        dispatch({
          type: GET_LIST_SUCCESS,
          payload: response,
        });
  
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: GET_LIST_FAIL,
        });
        return Promise.reject();
      }
    );
  };

