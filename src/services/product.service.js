import api from "./api";

const API_URL = "http://localhost:8080/api/";
// const API_URL = "https://cfgs-my-home-app-back.herokuapp.com/api/";
const user = JSON.parse(localStorage.getItem('user'));

const getProductos = () => {
  return api
    .get(API_URL + "productos", {
      headers: {
        'Authorization': 'Bearer ' + user.accessToken
       }
    })
    .then((response) => {      
      return response.data;
    });
};

const createProducto = (nombre) => {
  return api.post(API_URL + "productos", {
    nombre,    
  }, {
    headers: {
      'Authorization': 'Bearer ' + user.accessToken
     }
  });
};

const editProducto = (id, nombre) => {
  return api.put(API_URL + "productos" + id, {
    nombre,    
  });
};

const getProducto = (id) => {
  return api
    .get(API_URL + "productos/" + id)
    .then((response) => {      
      return response.data;
    });
};

const deleteProducto = (id) => {
  return api
    .delete(API_URL + "productos/" + id)
    .then((response) => {        
      return response.data;
    });
};

const deleteAllProductos = () => {
  return api
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