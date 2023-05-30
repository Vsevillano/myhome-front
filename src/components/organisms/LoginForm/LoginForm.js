import { Button, Grid, TextField, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { loginRegisterFormStyles } from './LoginRegisterForm.styles'
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';
import { login } from '../../../actions/auth';
import { globalStyles } from '../../../styles/global.styles';
import {CustomLoader} from '../../atoms/CustomLoader/CustomLoader'
import { useForm } from 'react-hook-form';
export const LoginForm = () => {
  const theme = useTheme();
  const classes = loginRegisterFormStyles(theme);
  const globalClases = globalStyles();

  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);  

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const { register, formState : { errors }, handleSubmit } = useForm();

  const handleLogin = (data) => {
    const {username, password} = data;

    setLoading(true);

    dispatch(login(username, password))
      .then(() => {
        navigate("/profile");        
      })
      .catch(() => {        
        setLoading(false);        
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
        <form onSubmit={handleSubmit(handleLogin)}>
          <Typography variant="h6" textAlign="center">
            Inicio de sesión
          </Typography>
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

          {loading ? (
            <CustomLoader size="small" />
          ) : (
            <>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={globalClases.mt10}
              >
                Iniciar sesión
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
            </>
          )}
          <Typography
            className={`${globalClases.fs11} ${globalClases.formError} ${globalClases.pt10} ${globalClases.pb10} ${globalClases.textCenter}`}
          >
            {message}
          </Typography>
          <Typography
            className={`${globalClases.textCenter} ${globalClases.fs11} ${globalClases.mt5}`}
          >
            ¿No tienes cuenta?{" "}
            <u onClick={() => navigate('/register', { replace: true })}>Registrar</u>
          </Typography>
          <Typography
            className={`${globalClases.textCenter} ${globalClases.fs11} ${globalClases.mt5}`}
          >
            
            <u onClick={() => navigate('/forgotpassword', { replace: true })}>¿Has olvidado tu contraseña?{" "}</u>
          </Typography>
        </form>
      </Grid>
    </Grid>
  );
}
