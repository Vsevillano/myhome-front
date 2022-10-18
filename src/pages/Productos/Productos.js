import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { globalStyles } from '../../styles/global.styles';
import noProducts from '../../assets/noproducts.svg'
import AddIcon from '@mui/icons-material/Add';

export const Productos = () => {
    const globalClases = globalStyles();

  return (
    <Grid container spacing={2}>            
      <Grid item xs={12}>
        <Typography className={`${globalClases.mb10} ${globalClases.colorWhite} ${globalClases.fw700} ${globalClases.fs20}`}>Productos</Typography>      
        <img src={noProducts} alt='Nutrition' className={`${globalClases.maxWidth100} ${globalClases.mt50}`}/>
        <Typography className={`${globalClases.mb10} ${globalClases.fw700} ${globalClases.textCenter} ${globalClases.mt10}`}>¡Esto está muy vacío!</Typography>      
        <Typography className={globalClases.textCenter}>Toca el botón más para empezar a añadir productos</Typography>
        <Grid item xs={12} textAlign='right' className={globalClases.bottomButton}>
            <Button variant="contained" startIcon={<AddIcon />}>
                Añadir productos
            </Button>
        </Grid>
      </Grid>
  </Grid>
  )
}
