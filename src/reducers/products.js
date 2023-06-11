import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,
  SAVE_PRODUCT_REQUEST,
  SAVE_PRODUCT_SUCCESS,
  SAVE_PRODUCT_FAIL,
} from "../actions/types";

const initialState = { isLoading: false, productos: null, error: null };

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
      return { ...state, isLoading: true };
    case CREATE_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, productos: payload };
    case CREATE_PRODUCT_FAIL:
      return { ...state, isLoading: false, error: payload };
    // Delete
    case DELETE_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case DELETE_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, productos: payload };
    case DELETE_PRODUCT_FAIL:
      return { ...state, isLoading: false, error: payload };
    // Save/Edit product
    case SAVE_PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case SAVE_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, productos: payload };
    case SAVE_PRODUCT_FAIL:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
}
