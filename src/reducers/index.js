import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import lists from "./lists";
import productos from "./products";
import { createTareaReducer, deleteTareaReducer, getTareaReducer, getTareasReducer, getUserTareasReducer, saveTareaReducer } from "./tareas";
import { getUsersReducer } from "./users";

export default combineReducers({
  auth,
  message,
  lists,
  productos,
  tareasList: getTareasReducer,  
  createTarea: createTareaReducer,
  getTarea: getTareaReducer,
  deleteTarea: deleteTareaReducer, 
  saveTarea: saveTareaReducer,
  getUsers: getUsersReducer,
  userTareas: getUserTareasReducer,
});