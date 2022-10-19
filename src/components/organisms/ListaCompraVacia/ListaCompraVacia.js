import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { globalStyles } from '../../../styles/global.styles';
import nutritionImage from '../../../assets/Nutrition-plan.svg'
import AddIcon from '@mui/icons-material/Add';

export const ListaCompraVacia = ({setIsAdding}) => {
  const globalClases = globalStyles();

  return (
    <Grid container>
        <Grid item xs={12}>
            <img src={nutritionImage} alt='Nutrition' className={`${globalClases.maxWidth100} ${globalClases.mt50}`}/>
            <Typography className={`${globalClases.mb10} ${globalClases.fw700} ${globalClases.textCenter} ${globalClases.mt10}`}>¡Planifiquemos tus compras!</Typography>      
            <Typography>Toca el botón más para crear tu primera lista</Typography>        
        </Grid>  
        <Grid item xs={12} textAlign='right' className={globalClases.mt50}>        
      </Grid>
    </Grid>
    
  )

}
