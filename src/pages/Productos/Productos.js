import { AppBar, Button, Card, Checkbox, Dialog, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, TextField, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { globalStyles } from '../../styles/global.styles';
import noProducts from '../../assets/noproducts.png'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { createProducto, getProductos } from '../../actions/products';
import { Navigate } from 'react-router-dom';
import { CustomLoader } from '../../components/atoms/CustomLoader/CustomLoader';
import CloseIcon from '@mui/icons-material/Close';

export const Productos = () => {
  const globalClases = globalStyles();

  const { user: currentUser } = useSelector((state) => state.auth);
  const { isLoading, productos } = useSelector(state => state.productos);

  const [checked, setChecked] = useState([1]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [isCreated, setIsCreated] = useState(false);

  const dispatch = useDispatch();

  const handleCreateProducto = (e) => {
    e.preventDefault();    
    dispatch(createProducto(name)).then(setIsCreated(!isCreated));      
    setOpen(false)
  };

  useEffect(() => {    
    dispatch(getProductos())
  }, [dispatch, isCreated])

  if (!currentUser) {
    return <Navigate to="/login" />;
  }  

  const handleOpenClose = () => {
    setOpen(!open);    
  }  

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


  return (
    <>
    <Grid container spacing={2}>     
      <Grid item xs={12}>
        <Typography className={`${globalClases.mb10} ${globalClases.colorWhite} ${globalClases.fw700} ${globalClases.fs20}`}>Productos</Typography>        
      </Grid>       
      {isLoading ? <CustomLoader size='large'/> : (
        productos ? (
          <Grid item xs={12}>
            <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {productos.map((producto) => {
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
        ) : (
          <Grid item xs={12} textAlign='center'>            
            <img src={noProducts} alt='Nutrition' className={`${globalClases.maxWidth100} ${globalClases.mt50}`}/>
            <Typography className={`${globalClases.mb10} ${globalClases.fw700} ${globalClases.textCenter} ${globalClases.mt10}`}>¡Esto está muy vacío!</Typography>      
            <Typography className={globalClases.textCenter}>Toca el botón más para empezar a añadir productos</Typography>            
          </Grid>
        )
      )}
      <Grid item xs={12} textAlign='right' className={globalClases.bottomButton}>
        <>
          <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpenClose}>
              Añadir productos
          </Button>
          <Dialog
            fullScreen
            open={open}
            onClose={handleOpenClose}                    
          >
          <AppBar elevation={0} sx={{ position: 'relative' }}>
            <Toolbar>                
              <Typography sx={{ ml: 2, flex: 1 }}  variant="h6" component="div" className={globalClases.textCenter}>
                Añadir producto
              </Typography>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleOpenClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              
            </Toolbar>
          </AppBar>
          <Card className={`${globalClases.px20} ${globalClases.pb20} ${globalClases.m20}`}>
                <Typography variant='h6' textAlign='center' className={globalClases.mt10}>Nuevo producto</Typography>
                <TextField fullWidth label="Nombre del producto" variant="outlined" className={globalClases.mt10} onChange={ (e) => setName(e.target.value)}/>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                    <Button fullWidth variant="contained" className={`${globalClases.mt10}`} onClick={handleCreateProducto}>Añadir</Button>              
                    </Grid>
                    <Grid item xs={6}>              
                    <Button fullWidth variant="outlined" className={`${globalClases.mt10}`} onClick={ () => setOpen(false)}>Cancelar</Button>
                    </Grid>
                </Grid>
              </Card>
          </Dialog>    
          </>              
      </Grid>      
  </Grid>
  
</>
  )
}
