import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import { signinStyles } from './Prueba1.styles';
import axios from 'axios';
export const Signin = () => {

  const classes =  signinStyles(); 
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = data => {
    console.log(data);
    console.log(errors);
    axios.post('http://localhost:8080/api/usuarios', {
      "nombre": data.Nombre,
      "apellidos": data.Apellidos,
      "email": data.Email,
      "activo": true
    })
        .then(response => console.log(response));
  }

  return (
    <Grid container>
      <Grid item xs={6} className={classes.root}>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant='h6' textAlign='center'>Registrar usuario</Typography>
          <TextField margin='dense' fullWidth type="text" placeholder="Nombre" {...register("Nombre", {required: true, maxLength: 80})} />
          <TextField margin='dense' fullWidth type="text" placeholder="Apellidos" {...register("Apellidos", {required: true, maxLength: 100})} />
          <TextField margin='dense' fullWidth type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />        
          <Button fullWidth className={classes.mt15} variant='contained' color='primary' type="submit">Registrar</Button>
        </form>
      </Grid> 
    </Grid>
  )
}
