import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
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
      return { ...state, isLoading: false, productos: payload.data };
    case CREATE_PRODUCT_FAIL:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
}
