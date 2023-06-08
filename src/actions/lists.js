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

export const getListas = () => async (dispatch) => {
  dispatch({ type: GET_LISTS_REQUEST });
  try {
    const listas = await ListService.getListas();
    dispatch({ type: GET_LISTS_SUCCESS, payload: listas });
  } catch (error) {
    dispatch({ type: GET_LISTS_FAIL, payload: error.message });
  }
};

export const createLista = (nombre) => async (dispatch) => {
  dispatch({ type: CREATE_LIST_REQUEST});
  try {
    const lista = await ListService.createLista(nombre);
    
    dispatch({ type: CREATE_LIST_SUCCESS, payload: lista });
  } catch (error) {
    dispatch({ type: CREATE_LIST_FAIL, payload: error.message});
  }
};

export const getLista = (id) => async (dispatch) => {
  dispatch({ type: GET_LIST_REQUEST });
  try {
    const lista = await ListService.getLista(id);
    dispatch({ type: GET_LIST_SUCCESS, payload: lista });
  } catch (error) {
    dispatch({ type: GET_LIST_FAIL, payload: error.message });
  }
};

export const deleteLista = (id) => async (dispatch) => {
  dispatch({ type: DELETE_LIST_REQUEST});
  try {
    const lista = await ListService.deleteLista(id);
    dispatch({ type: DELETE_LIST_SUCCESS, payload: lista });
  } catch (error) {
    dispatch({type: DELETE_LIST_FAIL, payload: error.message});
  }
};

export const addProductoToLista = (listaEntrada) => async (dispatch) => {
  dispatch({ type: ADD_LIST_REQUEST });
  try {
    const lista = await ListService.addProductoToLista(listaEntrada);
    dispatch({type: ADD_LIST_SUCCESS, payload: lista.data});
  } catch (error) {
    dispatch({ type: ADD_LIST_FAIL, payload: error.message});
  }
};
