

import ProductService from "../services/product.service";
import { CREATE_PRODUCT_FAIL, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./types";
  
export const getProductos = () => (dispatch) => {
    dispatch({
        type: GET_PRODUCTS_REQUEST,      
    });
    return ProductService.getProductos().then(
        (response) => {
        dispatch({
            type: GET_PRODUCTS_SUCCESS,
            payload: response,
        });

        return Promise.resolve();
        },
        (error) => {
        dispatch({
            type: GET_PRODUCTS_FAIL,
        });
        return Promise.reject();
        }
    );
};

export const createProducto = (nombre) => (dispatch) => {
    dispatch({
        type: CREATE_PRODUCT_REQUEST,
    });
    return ProductService.createProducto(nombre).then(
      (response) => {
        dispatch({
          type: CREATE_PRODUCT_SUCCESS,
        });
  
        return Promise.resolve();
      },
      (error) => {
        dispatch({
          type: CREATE_PRODUCT_FAIL,
        });
        return Promise.reject();
      }
    );
  };


