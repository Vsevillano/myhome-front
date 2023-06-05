import { API_URL } from "../utils/constants/urls";
import api from "./api";

const createLista = (nombre) => {
  return api.post(API_URL + "listas", {
    nombre,
  });
};

const getListas = () => {
  return api.get(API_URL + "listas").then((response) => {
    return response.data;
  });
};

const getLista = (id) => {
  return api.get(API_URL + "listas/" + id).then((response) => {
    return response.data;
  });
};

const addProductoToLista = (lista) => {
  return api.put(API_URL + "listas/" + lista.id, {
    nombre: lista.nombre.toString(),
    productos: lista.productos,
  });
};

const deleteLista = (id) => {
  return api.delete(API_URL + "listas/" + id).then((response) => {
    return response.data;
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createLista,
  getListas,
  getLista,
  deleteLista,
  addProductoToLista,
};
