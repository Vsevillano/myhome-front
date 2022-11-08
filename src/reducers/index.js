import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import lists from "./lists";
import productos from "./products";
import { createTareaReducer, deleteTareaReducer, getTareaReducer, getTareasReducer, saveTareaReducer } from "./tareas";

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
});