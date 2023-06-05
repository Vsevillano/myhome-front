import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_LIST_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,
  SAVE_PRODUCT_REQUEST,
  SAVE_PRODUCT_SUCCESS,
  SAVE_PRODUCT_FAIL,
} from "../actions/types";

const initialState = { isLoading: false, editSuccess: false, deleteSuccess: false, saveSuccess: false,  productos: null, error: null };

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    // GET
    case GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, productos: payload };
    case GET_PRODUCTS_FAIL:
      return { ...state, isLoading: false, error: payload };
    // Create
    case CREATE_PRODUCT_REQUEST:
      return { ...state, isLoading: true, editSuccess: false };
    case CREATE_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, productos: payload.data, editSuccess: true};
    case CREATE_PRODUCT_FAIL:
      return { ...state, isLoading: false, error: payload, editSuccess: false };
    // Delete
    case DELETE_PRODUCT_REQUEST:
      return { ...state, isLoading: true, deleteSuccess: false };
    case DELETE_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, productos: payload.data, deleteSuccess: true };
    case DELETE_PRODUCT_FAIL:
      return { ...state, isLoading: false, error: payload, deleteSuccess: false };
    // Save/Edit product
    case SAVE_PRODUCT_REQUEST:
      return { ...state, isLoading: true, saveSuccess: false };
    case SAVE_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, productos: payload.data, saveSuccess: true };
    case SAVE_PRODUCT_FAIL:
      return { ...state, isLoading: false, error: payload, saveSuccess: false };
    default:
      return state;
    
  }
}
