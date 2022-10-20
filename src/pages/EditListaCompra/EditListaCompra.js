import { Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { getLista } from '../../actions/lists';
import { CustomLoader } from '../../components/atoms/CustomLoader/CustomLoader';
import { globalStyles } from '../../styles/global.styles';

export const EditListaCompra = () => {
  const globalClases = globalStyles();
  
  const params = useParams();
  const {id} = params;


  const { user: currentUser } = useSelector((state) => state.auth);
  const { isLoading, lista } = useSelector(state => state.lists);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLista(id));     
  }, [dispatch, id])
  

  if (!currentUser) {
    return <Navigate to="/login" />;
  }  

  return (
    <Grid container> 
      {isLoading ? <CustomLoader size='medium'/> : (
      <>
        <Grid item xs={12}>
          <Typography className={`${globalClases.mb10} ${globalClases.colorWhite} ${globalClases.fw700} ${globalClases.fs20}`}>Lista {lista.nombre}</Typography>      
        </Grid>
        <Grid item xs={12}>
            {lista?.productos.map( producto => (
              <Grid item xs={12} key={producto.id}>{producto.nombre}</Grid>
            ))}        
        </Grid>
      </>
      )}      
    </Grid>
  )
}
