import { Button, Grid, TextField, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { loginRegisterFormStyles } from './LoginRegisterForm.styles'
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';
import { sendMailforgotPassword } from '../../../actions/auth';
import { globalStyles } from '../../../styles/global.styles';
import {CustomLoader} from '../../atoms/CustomLoader/CustomLoader'
import { useForm } from 'react-hook-form';
import { SET_MESSAGE } from '../../../actions/types';
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

  const handleSendMail = (data) => {
    const {email} = data;

    setLoading(true);

    dispatch(sendMailforgotPassword(email))
      .then(() => {
        dispatch({
          type: SET_MESSAGE,
          payload: "Email enviado. Por favor, revise su bandeja de entrada",
        });   
        setLoading(false);        

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
        <form onSubmit={handleSubmit(handleSendMail)}>
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
            className={`${globalClases.fs11} ${globalClases.formSuccess} ${globalClases.pt10} ${globalClases.pb10} ${globalClases.textCenter}`}
          >
            {message}
          </Typography>          
        </form>
      </Grid>
    </Grid>
  );
}
