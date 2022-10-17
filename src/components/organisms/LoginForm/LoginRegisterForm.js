import { Button, Grid, TextField, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { loginRegisterFormStyles } from './LoginRegisterForm.styles'
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';
import { login, register } from '../../../actions/auth';
import { globalStyles } from '../../../styles/global.styles';

export const LoginRegisterForm = () => {
  const theme = useTheme();
  const classes = loginRegisterFormStyles(theme);
  const globalClases = globalStyles();

  const [isRegister, setIsRegister] = useState(false);

  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    dispatch(login(username, password))
      .then(() => {
        navigate("/profile");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
    
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    dispatch(register(username, email, password))
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
    
  };

  return (
    <Grid container elevation={3} justifyContent='center'>
      <Grid item xs={12} md={6} className={classes.form}>
    {!isRegister ? (
      <>
        <Typography variant='h6' textAlign='center'>Inicio de sesión</Typography>
        <TextField fullWidth label="Usuario" variant="outlined" className={globalClases.mt10} onChange={ (e) => onChangeUsername(e)} />
        <TextField fullWidth label="Contraseña" variant="outlined" className={globalClases.mt10} onChange={ (e) => onChangePassword(e)} />
        <Button fullWidth variant="contained" className={globalClases.mt10} onClick={handleLogin}>Iniciar sesión</Button>
        <Typography variant='caption' textAlign='center'>¿No tienes cuenta? <u onClick={ () => setIsRegister(true)}>Registrar</u></Typography>
      </>
    )
    : (
      <>
        <Typography variant='h6' textAlign='center'>Registrar</Typography>
        <TextField fullWidth label="Usuario" variant="outlined" className={globalClases.mt10} onChange={ (e) => onChangeUsername(e)} />        
        <TextField fullWidth label="Email" variant="outlined" className={globalClases.mt10} onChange={ (e) => onChangeEmail(e)} />
        <TextField fullWidth label="Contraseña" variant="outlined" className={globalClases.mt10} onChange={ (e) => onChangePassword(e)} />
        <TextField fullWidth label="Repetir contraseña" variant="outlined" className={globalClases.mt10} />
        <Button fullWidth variant="contained" className={globalClases.mt10} onClick={handleRegister}>Registrar</Button>
        <Typography variant='caption' textAlign='center'>¿Ya tienes cuenta? <u onClick={ () => setIsRegister(false)}>Iniciar sesión</u></Typography>
      </>
    )}
    </Grid>
      </Grid>
  )
}
