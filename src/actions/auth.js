import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  FORGOR_PASSWORD_MAIL_SEND_SUCCESS,
  FORGOR_PASSWORD_MAIL_SEND_FAIL,
  SET_MESSAGE,
} from "./types";

import AuthService from "../services/auth.service";

export const registerUser =
  (nombre, apellidos, username, email, telefono, password) => (dispatch) => {
    return AuthService.register(
      nombre,
      apellidos,
      username,
      email,
      telefono,
      password
    ).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });

        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: REGISTER_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
  };

export const changepassword = (username, password) => (dispatch) => {
  return AuthService.changeUserPassword(username, password);
};

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      if (!data.activo) {
        dispatch({
          type: LOGIN_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: "Usuario bloqueado",
        });
        return Promise.reject();
      } else {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
        return Promise.resolve();
      }
    },
    (error) => {
      let message = "";

      console.log(error);

      if (error.code === "ERR_NETWORK") message = "Error de conexión";

      if (error?.response?.data?.status) {
        switch (error.response.data.status) {
          case 400:
            message = "Usuario o contraseña erróneas";
            break;

          default:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
              error.message ||
              error.toString();
            break;
        }
      }

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const sendMailforgotPassword = (email) => (dispatch) => {
  return AuthService.sendMailforgotPassword(email).then(
    (data) => {
      dispatch({
        type: FORGOR_PASSWORD_MAIL_SEND_SUCCESS,
        payload: { data: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: FORGOR_PASSWORD_MAIL_SEND_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
