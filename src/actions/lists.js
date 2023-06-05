import {
    CREATE_LIST_SUCCESS,
    CREATE_LIST_FAIL,
    GET_LISTS_SUCCESS,
    GET_LISTS_FAIL,
    GET_LISTS_REQUEST,
    DELETE_LIST_REQUEST,
    DELETE_LIST_SUCCESS,
    DELETE_LIST_FAIL,
    GET_LIST_REQUEST,
    GET_LIST_SUCCESS,
    GET_LIST_FAIL,
    ADD_LIST_REQUEST,
    ADD_LIST_SUCCESS,
    ADD_LIST_FAIL,
    CREATE_LIST_REQUEST,
  } from "./types";
  
  import ListService from "../services/lists.service";
  
  export const getListas = () => (dispatch) => {
    dispatch({
      type: GET_LISTS_REQUEST,      
    });
    return ListService.getListas().then(
      (response) => {             
        dispatch({
          type: GET_LISTS_SUCCESS,
          payload: response,
        });
  
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: GET_LISTS_FAIL,
        });
        return Promise.reject();
      }
    );
  };

  export const create = (nombre) => (dispatch) => {
    dispatch({
      type: CREATE_LIST_REQUEST,
    });
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

  export const getLista = (id) => (dispatch) => {
    dispatch({
      type: GET_LIST_REQUEST,      
    });
    return ListService.getLista(id).then(
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

  export const deleteLista = (id) => (dispatch) => {
    dispatch({
      type: DELETE_LIST_REQUEST,      
    });
    return ListService.deleteLista(id).then(
      (response) => {             
        dispatch({
          type: DELETE_LIST_SUCCESS,
          payload: response,
        });
  
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: DELETE_LIST_FAIL,
        });
        return Promise.reject();
      }
    );
  };

  export const addProductoToLista = (lista) => (dispatch) => {
    dispatch({
      type: ADD_LIST_REQUEST,      
    });
    
    return ListService.addProductoToLista(lista).then(
      (response) => {             
        dispatch({
          type: ADD_LIST_SUCCESS,
          payload: response,
        });
  
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: ADD_LIST_FAIL,
        });
        return Promise.reject();
      }
    );
  };

  