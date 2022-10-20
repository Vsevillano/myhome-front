import { Checkbox, Grid, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
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
  
  const [checked, setChecked] = useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  if (!currentUser) {
    return <Navigate to="/login" />;
  }  

  return (
    <Grid container> 
      {isLoading ? <CustomLoader size='medium'/> : (
      <>
        <Grid item xs={12}>
          <Typography className={`${globalClases.mb10} ${globalClases.colorWhite} ${globalClases.fw700} ${globalClases.fs20}`}>Lista {lista?.nombre}</Typography>      
        </Grid>
        <Grid item xs={12}>            
          <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {lista?.productos.map((producto) => {
              const labelId = `checkbox-list-secondary-label-${producto.id}`;
              return (
                <ListItem
                  key={producto.id}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(producto.id)}
                      checked={checked.indexOf(producto.id) !== -1}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>                          
                    <ListItemText id={labelId} primary={producto.nombre} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>                              
        </Grid>
      </>
      )}      
    </Grid>
  )
}
