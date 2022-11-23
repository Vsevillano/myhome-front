import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import lists from "./lists";
import productos from "./products";
import { tareasReducer, getUserTareasReducer, } from "./tareas";
import { getUsersReducer } from "./users";

export default combineReducers({
  auth,
  message,
  lists,
  productos,
  tareas: tareasReducer,  
  getUsers: getUsersReducer,
  userTareas: getUserTareasReducer,
});