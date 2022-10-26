import axios from "axios";

const API_URL = "http://localhost:8080/api/";

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

// const editProducto = (id, nombre) => {
//   return axios.put(API_URL + "productos" + id, {
//     nombre,    
//   });
// };

// const getProducto = (id) => {
//   return axios
//     .get(API_URL + "productos/" + id)
//     .then((response) => {      
//       return response.data;
//     });
// };

// const deleteProducto = (id) => {
//   return axios
//     .delete(API_URL + "productos/" + id)
//     .then((response) => {        
//       return response.data;
//     });
// };

// const deleteAllProductos = () => {
//   return axios
//     .delete(API_URL + "productos/")
//     .then((response) => {        
//       return response.data;
//     });
// };



export default {
  getTareas,
  createTarea,
};