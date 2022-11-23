import api from "./api";

const API_URL = "http://localhost:8080/api/";
// const API_URL = "https://cfgs-my-home-app-back.herokuapp.com/api/";
const user = JSON.parse(localStorage.getItem('user'));

const createLista = (nombre) => {
  return api.post(API_URL + "listas", {
    nombre,    
  });
};

const getListas = () => {  
  return api
    .get(API_URL + "listas", {
      headers: {
        'Authorization': 'Bearer ' + user.accessToken
       }
    })
    .then((response) => {   
      return response.data;
    });
};

const getLista = (id) => {
  return api
    .get(API_URL + "listas/" + id, {
      headers: {
        'Authorization': 'Bearer ' + user.accessToken
       }
    })
    .then((response) => {      
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
  return api
    .delete(API_URL + "listas/" + id)
    .then((response) => {        
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