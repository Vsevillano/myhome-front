import { Button, Grid, TextField, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { registerFormStyles } from "./RegisterForm.styles";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { login, registerUser } from "../../../actions/auth";
import { globalStyles } from "../../../styles/global.styles";
import { CustomLoader } from "../../atoms/CustomLoader/CustomLoader";
import { useForm } from "react-hook-form";
import { validatePassword } from "../../../common/utils/fieldValidator";
export const RegisterForm = () => {
  const theme = useTheme();
  const classes = registerFormStyles(theme);
  const globalClases = globalStyles();

  let navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    getValues,
  } = useForm();

  const handleRegister = (data) => {
    const { nombre, apellidos, username, email, telefono, password } = data;

    dispatch(
      registerUser(nombre, apellidos, username, email, telefono, password)
    )
      .then(() => {
        dispatch(login(username, password));
      })
      .catch(() => {
        reset();
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Grid container elevation={3} justifyContent="center">
      <Grid
        item
        xs={12}
        md={6}
        className={`${classes.form} ${globalClases.mt50}`}
      >
        <form onSubmit={handleSubmit(handleRegister)}>
          <Typography variant="h6" textAlign="center">
            Registrar
          </Typography>
          <TextField
            fullWidth
            label="Nombre"
            variant="outlined"
            autoComplete="off"
            className={globalClases.mt10}
            {...register("nombre", { required: true })}
          />
          {errors.nombre?.type === "required" && (
            <span className={globalClases.formError}>
              El campo nombre es requerido
            </span>
          )}
          <TextField
            fullWidth
            label="Apellidos"
            variant="outlined"
            autoComplete="off"
            className={globalClases.mt10}
            {...register("apellidos", { required: true })}
          />
          {errors.apellidos?.type === "required" && (
            <span className={globalClases.formError}>
              El campo apellidos es requerido
            </span>
          )}
          <TextField
            fullWidth
            label="Usuario"
            variant="outlined"
            autoComplete="off"
            className={globalClases.mt10}
            {...register("username", { required: true })}
          />
          {errors.username?.type === "required" && (
            <span className={globalClases.formError}>
              El campo usuario es requerido
            </span>
          )}
          <TextField
            fullWidth
            label="Email"
            autoComplete="off"
            variant="outlined"
            className={globalClases.mt10}
            {...register("email", {
              required: true,
              pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors.email?.type === "pattern" && (
            <span className={globalClases.formError}>
              El campo email debe tener el formato ejemplo@dominio.es
            </span>
          )}
          {errors.email?.type === "required" && (
            <span className={globalClases.formError}>
              El campo email es requerido
            </span>
          )}
          <TextField
            fullWidth
            label="Teléfono"
            variant="outlined"
            autoComplete="off"
            className={globalClases.mt10}
            {...register("telefono", { required: true })}
          />
          <TextField
            fullWidth
            label="Contraseña"
            autoComplete="off"
            variant="outlined"
            type="password"
            className={globalClases.mt10}
            {...register("password", { required: true })}
          />
          {errors.password?.type === "required" && (
            <span className={globalClases.formError}>
              El campo contraseña es requerido
            </span>
          )}
          <TextField
            fullWidth
            label="Repetir contraseña"
            autoComplete="off"
            variant="outlined"
            type="password"
            className={globalClases.mt10}
            {...register("verifypassword", {
              required: true,
              validate: () =>
                validatePassword(
                  getValues("password"),
                  getValues("verifypassword")
                ),
            })}
          />
          {errors.verifypassword && (
            <span className={globalClases.formError}>
              Las contraseñas deben coincidir
            </span>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={globalClases.mt10}
          >
            Registrar
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            fullWidth
            variant="contained"
            className={globalClases.mt10}
          >
            Volver
          </Button>
          <Typography
            className={`${globalClases.fs11} ${globalClases.formError} ${globalClases.pt10} ${globalClases.pb10} ${globalClases.textCenter}`}
          >
            {message}
          </Typography>
          <Typography
            className={`${globalClases.textCenter} ${globalClases.fs11} ${globalClases.mt5}`}
          >
            ¿Ya tienes cuenta?{" "}
            <u onClick={() => navigate("/login", { replace: true })}>
              Iniciar sesión
            </u>
          </Typography>
        </form>
      </Grid>
    </Grid>
  );
};
