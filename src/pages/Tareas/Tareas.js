import { Button, Card, Grid, TextField, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { globalStyles } from '../../styles/global.styles';

export const Tareas = () => {

  const { user: currentUser } = useSelector((state) => state.auth);
  const globalClases = globalStyles();
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Grid container spacing={2}>      
      <Grid item xs={12} md={6}>
        <Card className={`${globalClases.px20} ${globalClases.pb20}`}>
          <Typography variant='h6' textAlign='center' className={globalClases.mt10}>Añadir tareas</Typography>
          <TextField fullWidth label="Nombre de la tarea" variant="outlined" className={globalClases.mt10}/>
          <TextField fullWidth label="Descripción" variant="outlined" className={globalClases.mt10}/>
          <TextField fullWidth label="Categoría" variant="outlined" className={globalClases.mt10}/>
          <TextField fullWidth label="Estado" variant="outlined" className={globalClases.mt10}/>
          <Button fullWidth variant="contained" className={`${globalClases.mt10}`}>Añadir</Button>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card className={`${globalClases.px20} ${globalClases.pb20}`}>          
          <Typography variant='h6' textAlign='center' className={globalClases.mt10}>Lista de tareas</Typography>
        </Card>
      </Grid>
    </Grid>
  )
}
