import ProductService from "../services/product.service";
import {
  CREATE_PRODUCT_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  SAVE_PRODUCT_FAIL,
  SAVE_PRODUCT_REQUEST,
  SAVE_PRODUCT_SUCCESS,
} from "./types";

export const getProductos = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });
  try {
    const response = await ProductService.getProductos();
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error.message });
  }
};

export const createProducto = (nombre) => async (dispatch) => {
  dispatch({ type: CREATE_PRODUCT_REQUEST });
  try {
    const response = await ProductService.createProducto(nombre);
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: CREATE_PRODUCT_FAIL });
  }
};

export const deleteProducto = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_REQUEST });
  try {
    const response = await ProductService.deleteProducto(id);
    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: response});
  } catch (error) {
    dispatch({ type: DELETE_PRODUCT_FAIL });
  }
};

export const saveProducto = (id, nombre) => async (dispatch) => {
  dispatch({ type: SAVE_PRODUCT_REQUEST });
  try {
    const response = await ProductService.editProducto(id, nombre); 
    dispatch({ type: SAVE_PRODUCT_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: SAVE_PRODUCT_FAIL });
  }
};