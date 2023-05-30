import { Button, Grid, TextField, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { loginRegisterFormStyles } from './LoginRegisterForm.styles'
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';
import { login } from '../../../actions/auth';
import { globalStyles } from '../../../styles/global.styles';
import {CustomLoader} from '../../atoms/CustomLoader/CustomLoader'
import { useForm } from 'react-hook-form';
export const ForgotPasswordForm = () => {
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
            Recuperar contraseña
          </Typography>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            autoComplete="off"
            className={globalClases.mt10}
            {...register("email", { required: true })}
          />
          {errors.username?.type === "required" && (
            <span className={globalClases.formError}>
              El campo usuario es requerido
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
                Enviar email de recuperación
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
        </form>
      </Grid>
    </Grid>
  );
}
