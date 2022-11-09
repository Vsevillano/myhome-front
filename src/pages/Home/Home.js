import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { globalStyles } from '../../styles/global.styles';

export const Home = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [isAdmin, setIsAdmin] = useState(false)
  const globalClases = globalStyles();
  useEffect(() => {
    if (currentUser?.roles.find(item => item === 'ROLE_ADMIN') === 'ROLE_ADMIN') {
      setIsAdmin(true)            
    }    
  }, [currentUser])
  

  return (
    currentUser ? (
      isAdmin ? (
        <Grid container>
          <Grid item xs={12}>
            <Typography variant='h6' className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20} ${globalClases.mb10}`}>Contenido del Admin</Typography>        
          </Grid>
        </Grid>        
        ): (
          <Grid container>
            <Grid item xs={12}>
              <Typography variant='h6' className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20} ${globalClases.mb10}`}>Contenido del usuario logeado</Typography>        
            </Grid>
          </Grid>          
        )
    ): (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h6' className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20} ${globalClases.mb10}`}>Contenido del usuario sin logear</Typography>        
        </Grid>
      </Grid>
    )
    
  )
}
