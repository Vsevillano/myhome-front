import {
  CREATE_LIST_SUCCESS,
  CREATE_LIST_FAIL,
  GET_LISTS_REQUEST,
  GET_LISTS_SUCCESS,
  GET_LISTS_FAIL,
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
} from "../actions/types";

const initialState = { isLoading: false, listas: null, successCreate: false, successAdded: false, lista: null};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    // Crear una lista
    case CREATE_LIST_REQUEST:
      return { ...state, isLoading: true, successCreate: false };
    case CREATE_LIST_SUCCESS:
      return { ...state, isLoading: false, listas: payload, successCreate: true };
    case CREATE_LIST_FAIL:
      return { ...state, isLoading: false, successCreate: false };
    // Obtener todas las listas
    case GET_LISTS_REQUEST:
      return { ...state, isLoading: true };
    case GET_LISTS_SUCCESS:
      return { ...state, isLoading: false, listas: payload };
    case GET_LISTS_FAIL:
      return { ...state, isLoading: false };
    // Eliminar lista
    case DELETE_LIST_REQUEST:
      return { ...state, isLoading: true, successDelete: false };
    case DELETE_LIST_SUCCESS:
      return { ...state, isLoading: false, listas: payload, successDelete: true};
    case DELETE_LIST_FAIL:
      return { ...state, isLoading: false, successDelete: false };
    // Obtener una lista
    case GET_LIST_REQUEST:
      return { ...state, isLoading: true };
    case GET_LIST_SUCCESS:
      return { ...state, isLoading: false, lista: payload };
    case GET_LIST_FAIL:
      return { ...state, isLoading: false };
    // Anadir un producto a una lista
    case ADD_LIST_REQUEST:
      return { ...state, isLoading: true, successAdded: false };
    case ADD_LIST_SUCCESS:
      return { ...state, isLoading: false, lista: payload, successAdded: true };
    case ADD_LIST_FAIL: 
      return { ...state, isLoading: false, successAdded: false };
    default:
      return state;
  }
}
