import api from "./api";

// const API_URL = "http://localhost:8080/api/";
const API_URL = "https://cfgs-my-home-app-back.herokuapp.com/api/";

export const getTareas = () => {
  return api
    .get(API_URL + "tareas")
    .then((response) => {   
      return response.data;
    });
};

export const createTarea = (tarea) => { 
  const { nombre, descripcion, categoria, fecha, estado, user } = tarea;  
  return api.post(API_URL + "tareas", { nombre, descripcion, categoria, fecha, estado, user });
};

export const deleteTarea = (id) => {
  return api
    .delete(API_URL + "tareas/" + id)
    .then((response) => {        
      return response.data;
    });
};

export const getTarea = (id) => {
  return api
    .get(API_URL + "tareas/" + id)
    .then((response) => {      
      return response.data;
    });
};

export const saveTarea = (tarea) => { 
  return api.put(API_URL + "tareas/" + tarea.id, {
    nombre: tarea.nombre,
    categoria: tarea.categoria,
    descripcion: tarea.descripcion,
    fecha: tarea.fecha,
    estado: tarea.estado,
    user: tarea.user
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