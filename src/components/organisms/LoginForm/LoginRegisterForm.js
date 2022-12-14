import { Button, Grid, TextField, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { loginRegisterFormStyles } from './LoginRegisterForm.styles'
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';
import { login, registerUser } from '../../../actions/auth';
import { globalStyles } from '../../../styles/global.styles';
import {CustomLoader} from '../../atoms/CustomLoader/CustomLoader'
import { useForm } from 'react-hook-form';
import { validatePassword } from '../../../common/utils/fieldValidator';
export const LoginRegisterForm = () => {
  const theme = useTheme();
  const classes = loginRegisterFormStyles(theme);
  const globalClases = globalStyles();

  const [isRegister, setIsRegister] = useState(false);

  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);  

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const { register, formState : { errors }, handleSubmit, reset, getValues } = useForm();

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

  const handleRegister = (data) => {
    const {nombre, apellidos, username, email, telefono, password} = data;

    dispatch(registerUser(nombre, apellidos, username, email, telefono, password))
      .then(() => {
        dispatch(login(username, password))
      })
      .catch(() => {
        reset();
      });    
  };
  

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    
    <Grid container elevation={3} justifyContent='center'>
      <Grid item xs={12} md={6} className={`${classes.form} ${globalClases.mt50}`}>
      
    {!isRegister ? (
      <form onSubmit={handleSubmit(handleLogin)}>
        <Typography variant='h6' textAlign='center'>Inicio de sesi??n</Typography>
        <TextField fullWidth label="Usuario" variant="outlined" autoComplete='off' className={globalClases.mt10} {...register('username', { required: true })}/>
        {errors.username?.type === 'required' && <span className={globalClases.formError}>El campo usuario es requerido</span>}
        <TextField fullWidth label="Contrase??a" autoComplete='off' variant="outlined" type='password' className={globalClases.mt10} {...register('password', { required: true })} />        
        {errors.password?.type === 'required' && <span className={globalClases.formError}>El campo contrase??a es requerido</span>}

        {loading ? 
          <CustomLoader size='small'/> :
          <Button type='submit' fullWidth variant="contained" className={globalClases.mt10}>Iniciar sesi??n</Button>          
        } 
        <Typography className={`${globalClases.fs11} ${globalClases.formError} ${globalClases.pt10} ${globalClases.pb10} ${globalClases.textCenter}`}>{message}</Typography>       
        <Typography className={`${globalClases.textCenter} ${globalClases.fs11} ${globalClases.mt5}`}>??No tienes cuenta? <u onClick={ () => setIsRegister(true)}>Registrar</u></Typography>
      </form>
    )
    : (
      <form onSubmit={handleSubmit(handleRegister)} >
        <Typography variant='h6' textAlign='center'>Registrar</Typography>
        <TextField fullWidth label="Nombre" variant="outlined" autoComplete='off' className={globalClases.mt10} {...register('nombre', { required: true })} />
        {errors.nombre?.type === 'required' && <span className={globalClases.formError}>El campo nombre es requerido</span>}        
        <TextField fullWidth label="Apellidos" variant="outlined" autoComplete='off' className={globalClases.mt10} {...register('apellidos', { required: true })} />
        {errors.apellidos?.type === 'required' && <span className={globalClases.formError}>El campo apellidos es requerido</span>}        
        <TextField fullWidth label="Usuario" variant="outlined" autoComplete='off' className={globalClases.mt10} {...register('username', { required: true })} />
        {errors.username?.type === 'required' && <span className={globalClases.formError}>El campo usuario es requerido</span>}        
        <TextField fullWidth label="Email" autoComplete='off' variant="outlined" className={globalClases.mt10} {...register('email', { required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })} />        
        {errors.email?.type === 'pattern' && <span className={globalClases.formError}>El campo email debe tener el formato ejemplo@dominio.es</span>}
        {errors.email?.type === 'required' && <span className={globalClases.formError}>El campo email es requerido</span>}
        <TextField fullWidth label="Tel??fono" variant="outlined" autoComplete='off' className={globalClases.mt10} {...register('telefono', { required: true })} />
        {/* {errors.telefono?.type === 'pattern' && <span className={globalClases.formError}>El campo email debe tener el formato ejemplo@dominio.es</span>} */}
        <TextField fullWidth label="Contrase??a" autoComplete='off' variant="outlined" type='password' className={globalClases.mt10} {...register('password', { required: true })} />
        {errors.password?.type === 'required' && <span className={globalClases.formError}>El campo contrase??a es requerido</span>}
        <TextField fullWidth label="Repetir contrase??a" autoComplete='off' variant="outlined" type='password' className={globalClases.mt10} {...register('verifypassword', { required: true, validate: () => validatePassword(getValues('password'), getValues('verifypassword')) })} />                
        {errors.verifypassword && <span className={globalClases.formError}>Las contrase??as deben coincidir</span>}
        <Button type='submit' fullWidth variant="contained" className={globalClases.mt10}>Registrar</Button>        
        <Typography className={`${globalClases.fs11} ${globalClases.formError} ${globalClases.pt10} ${globalClases.pb10} ${globalClases.textCenter}`}>{message}</Typography>  
        <Typography className={`${globalClases.textCenter} ${globalClases.fs11} ${globalClases.mt5}`}>??Ya tienes cuenta? <u onClick={ () => setIsRegister(false)}>Iniciar sesi??n</u></Typography>
      </form>
    )}
    </Grid>
      </Grid>
      
  )
}
