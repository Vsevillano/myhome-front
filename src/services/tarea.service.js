import axios from "axios";

// const API_URL = "http://localhost:8080/api/";
const API_URL = "https://cfgs-my-home-app-back.herokuapp.com/api/";

const getTareas = () => {
  return axios
    .get(API_URL + "tareas")
    .then((response) => {      
      return response.data;
    });
};

const createTarea = (tarea) => { 
  const {nombre, descripcion, categoria, fecha, estado} = tarea;
  
  return axios.post(API_URL + "tareas", {
    nombre, descripcion, categoria, fecha, estado
  });
};

const getTarea = (id) => {
  return axios
    .get(API_URL + "tareas/" + id)
    .then((response) => {      
      return response.data;
    });
};

const saveTarea = (tarea) => {    
  return axios.put(API_URL + "tareas/" + tarea.id, {
    nombre: tarea.nombre,
    categoria: tarea.categoria,
    descripcion: tarea.descripcion,
    fecha: tarea.fecha,
    estado: tarea.estado,
  });
};

const deleteTarea = (id) => {
  return axios
    .delete(API_URL + "tareas/" + id)
    .then((response) => {        
      return response.data;
    });
};


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getTareas,
  createTarea,
  getTarea,
  saveTarea,
  deleteTarea,
};