import axios from "axios";

// const API_URL = "http://localhost:8080/api/";
const API_URL = "https://cfgs-my-home-app-back.herokuapp.com/api/";

const getProductos = () => {
  return axios
    .get(API_URL + "productos")
    .then((response) => {      
      return response.data;
    });
};

const createProducto = (nombre) => {
  return axios.post(API_URL + "productos", {
    nombre,    
  });
};

const editProducto = (id, nombre) => {
  return axios.put(API_URL + "productos" + id, {
    nombre,    
  });
};

const getProducto = (id) => {
  return axios
    .get(API_URL + "productos/" + id)
    .then((response) => {      
      return response.data;
    });
};

const deleteProducto = (id) => {
  return axios
    .delete(API_URL + "productos/" + id)
    .then((response) => {        
      return response.data;
    });
};

const deleteAllProductos = () => {
  return axios
    .delete(API_URL + "productos/")
    .then((response) => {        
      return response.data;
    });
};



export default {
  getProductos,
  createProducto,
  editProducto,
  getProducto,
  deleteProducto,
  deleteAllProductos,
};