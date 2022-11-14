import axios from "axios";

// const API_URL = "http://localhost:8080/api/";
const API_URL = "https://cfgs-my-home-app-back.herokuapp.com/api/";
const user = JSON.parse(localStorage.getItem('user'));

export const getUsers = () => {
  return axios
    .get(API_URL + "users", {
      headers: {
       'Authorization': 'Bearer ' + user.accessToken
      }
    })
    .then((response) => {   
      return response.data;
    });
};

export const getUserTareas = () => {
  return axios
    .get(API_URL + "tareas/user/" + user.id, {
      headers: {
       'Authorization': 'Bearer ' + user.accessToken
      }
    })
    .then((response) => {   
      return response.data;
    });
};




// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUsers,
  getUserTareas,
};