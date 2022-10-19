import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import lists from "./lists";

export default combineReducers({
  auth,
  message,
  lists,
});