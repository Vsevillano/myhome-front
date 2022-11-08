import axios from "axios";

// const API_URL = "http://localhost:8080/api/";
const API_URL = "https://cfgs-my-home-app-back.herokuapp.com/api/";
const user = JSON.parse(localStorage.getItem('user'));

const createLista = (nombre) => {
  return axios.post(API_URL + "listas", {
    nombre,    
  });
};

const getListas = () => {  
  return axios
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
  return axios
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
  return axios.put(API_URL + "listas/" + lista.id, {
    nombre: lista.nombre.toString(),
    productos: lista.productos,  
  });
};

const deleteLista = (id) => {
  return axios
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