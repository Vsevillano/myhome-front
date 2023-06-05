import { API_URL } from "../utils/constants/urls";
import api from "./api";

const getProductos = () => {
  return api.get(API_URL + "productos").then((response) => {
    return response.data;
  });
};

const createProducto = (nombre) => {
  return api.post(API_URL + "productos", { nombre });
};

const editProducto = (id, nombre) => {
  return api.put(API_URL + "productos" + id, {
    nombre,
  });
};

const getProducto = (id) => {
  return api.get(API_URL + "productos/" + id).then((response) => {
    return response.data;
  });
};

const deleteProducto = (id) => {
  return api.delete(API_URL + "productos/" + id).then((response) => {
    return response.data;
  });
};

const deleteAllProductos = () => {
  return api.delete(API_URL + "productos/").then((response) => {
    return response.data;
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProductos,
  createProducto,
  editProducto,
  getProducto,
  deleteProducto,
  deleteAllProductos,
};
