import { Button, Grid, TextField, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { loginRegisterFormStyles } from './LoginRegisterForm.styles'
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams  } from 'react-router-dom';
import { changepassword, login } from '../../../actions/auth';
import { globalStyles } from '../../../styles/global.styles';
import {CustomLoader} from '../../atoms/CustomLoader/CustomLoader'
import { useForm } from 'react-hook-form';
import { validatePassword } from '../../../common/utils/fieldValidator';
import useJwtVerification from '../../../hooks/useJwtVerification';
export const NewPasswordForm = () => {
  const theme = useTheme();
  const classes = loginRegisterFormStyles(theme);
  const globalClases = globalStyles();
  const params = useParams();
  const {id} = params;
  let navigate = useNavigate();
  const decodedToken = useJwtVerification(id);
  
  const [loading, setLoading] = useState(false);  

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const { register, formState : { errors }, handleSubmit, getValues } = useForm();


  const handleChangePassword = (data) => {
    const {password} = data;

    setLoading(true);

    dispatch(changepassword(decodedToken.sub, password))
      .then(() => {
        navigate("/");        
      })
      .catch(() => {        
        setLoading(false);        
      });    
  };

  
  return (
    
    <Grid container elevation={3} justifyContent="center">
      <Grid
        item
        xs={12}
        md={6}
        className={`${classes.form} ${globalClases.mt50}`}
      >
        {decodedToken ? (
        <form onSubmit={handleSubmit(handleChangePassword)}>
          <Typography variant="h6" textAlign="center">
            Cambiar contraseña
          </Typography>
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
                Cambiar contraseña
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
        </form>) :
        (
          <Typography variant="h6" textAlign="center">
            Token no válido
          </Typography>
        )}
      </Grid>
    </Grid>
  );
}
