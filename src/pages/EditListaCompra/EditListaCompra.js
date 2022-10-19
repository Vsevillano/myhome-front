import { Grid, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { globalStyles } from '../../styles/global.styles';

export const EditListaCompra = () => {
  const globalClases = globalStyles();

  const { user: currentUser } = useSelector((state) => state.auth);
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }  

  return (
    <Grid container> 
      <Grid item xs={12}>
        <Typography className={`${globalClases.mb10} ${globalClases.colorWhite} ${globalClases.fw700} ${globalClases.fs20}`}>Editar lista</Typography>      
      </Grid>
      
    </Grid>
  
  )
}
