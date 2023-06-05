

import ProductService from "../services/product.service";
import { CREATE_PRODUCT_FAIL, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./types";
  
export const getProductos = () => async(dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });
  try {
    const productos = await ProductService.getProductos();
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: productos });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: error.message });
  }
};

export const createProducto = (nombre) => async(dispatch) => {
     dispatch({ type: CREATE_PRODUCT_REQUEST });
  try {
    const productos = await ProductService.createProducto(nombre);    
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: productos.data });
  } catch (error) {
    dispatch({ type: CREATE_PRODUCT_FAIL });
  }
    
};