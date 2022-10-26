import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import lists from "./lists";
import productos from "./products";
import tareas from "./tareas";

export default combineReducers({
  auth,
  message,
  lists,
  productos,
  tareas,
});