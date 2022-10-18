import { Button, Card, CardHeader, Grid, IconButton, Menu, MenuItem, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { globalStyles } from '../../styles/global.styles';
import nutritionImage from '../../assets/Nutrition-plan.svg'
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const ListaCompra = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const globalClases = globalStyles();
  const [isAdding, setIsAdding] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const listas = [{algo: 'x'}];

  return (
    <Grid container spacing={2}> 
      <Grid item xs={12}>
        <Typography className={`${globalClases.mb10} ${globalClases.colorWhite} ${globalClases.fw700} ${globalClases.fs20}`}>Mis listas</Typography>      
      </Grid>     
      {listas ? (
        <Grid item xs={12}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader        
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon onClick={handleClick}/>                  
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose} disableRipple>
                      <EditIcon className={`${globalClases.mr10} ${globalClases.fs20}`} />
                      Editar
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                      <DeleteIcon className={`${globalClases.mr10} ${globalClases.fs20}`} />
                      Borrar
                    </MenuItem>
                  </Menu>
                </IconButton>
              }
              title="Pepe"        
            />
                        
          </Card>  
        </Grid>) : (
        <>         
        {isAdding ? (      
        <Grid item xs={12} md={6}>
          <Card className={`${globalClases.px20} ${globalClases.pb20}`}>
            <Typography variant='h6' textAlign='center' className={globalClases.mt10}>Nueva lista</Typography>
            <TextField fullWidth label="Nombre de la lista" variant="outlined" className={globalClases.mt10}/>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button fullWidth variant="contained" className={`${globalClases.mt10}`}>Añadir</Button>              
              </Grid>
              <Grid item xs={6}>              
                <Button fullWidth variant="outlined" className={`${globalClases.mt10}`} onClick={ () => setIsAdding(false)}>Cancelar</Button>
              </Grid>
            </Grid>
          </Card>        
        </Grid>      
        ): (
        <>
          <Grid item xs={12}>
            <img src={nutritionImage} alt='Nutrition' className={`${globalClases.maxWidth100} ${globalClases.mt50}`}/>
            <Typography className={`${globalClases.mb10} ${globalClases.fw700} ${globalClases.textCenter} ${globalClases.mt10}`}>¡Planifiquemos tus compras!</Typography>      
            <Typography>Toca el botón más para crear tu primera lista</Typography>        
          </Grid>      
          <Grid item xs={12} textAlign='right' className={globalClases.mt50}>
            <Button variant="contained" startIcon={<AddIcon />} onClick={ () => setIsAdding(true)}>
                Crear lista
            </Button>
          </Grid>
        </>
        )}
      </>)}

  </Grid>
  )
}
