import axios from "axios";

// const API_URL = "http://localhost:8080/api/";
const API_URL = "https://cfgs-my-home-app-back.herokuapp.com/api/";
const user = JSON.parse(localStorage.getItem('user'));

export const getTareas = () => {
  return axios
    .get(API_URL + "tareas", {
      headers: {
       'Authorization': 'Bearer ' + user.accessToken
      }
    })
    .then((response) => {   
      return response.data;
    });
};



export const createTarea = (tarea) => { 
  const { nombre, descripcion, categoria, fecha, estado } = tarea;  
  return axios.post(API_URL + "tareas", { nombre, descripcion, categoria, fecha, estado }, {
    headers: {
     'Authorization': 'Bearer ' + user.accessToken
    }});
};

export const deleteTarea = (id) => {
  return axios
    .delete(API_URL + "tareas/" + id, {
      headers: {
       'Authorization': 'Bearer ' + user.accessToken
      }})
    .then((response) => {        
      return response.data;
    });
};

export const getTarea = (id) => {
  return axios
    .get(API_URL + "tareas/" + id, {
      headers: {
       'Authorization': 'Bearer ' + user.accessToken
      }})
    .then((response) => {      
      return response.data;
    });
};

export const saveTarea = (tarea) => {    
  return axios.put(API_URL + "tareas/" + tarea.id, {
    nombre: tarea.nombre,
    categoria: tarea.categoria,
    descripcion: tarea.descripcion,
    fecha: tarea.fecha,
    estado: tarea.estado,
  },{
    headers: {
     'Authorization': 'Bearer ' + user.accessToken
    }});
};




// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getTareas,
  createTarea,
  getTarea,
  saveTarea,
  deleteTarea,
};