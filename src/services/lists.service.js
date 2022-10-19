import axios from "axios";

const API_URL = "http://localhost:8080/api/";

const createLista = (nombre) => {
  return axios.post(API_URL + "listas", {
    nombre,    
  });
};

const getListas = () => {
  return axios
    .get(API_URL + "listas")
    .then((response) => {      
      return response.data;
    });
};

const deleteLista = (id) => {
  return axios
    .delete(API_URL + "listas/" + id)
    .then((response) => {        
      return response.data;
    });
};


export default {
  createLista,
  getListas,  
  deleteLista,
};