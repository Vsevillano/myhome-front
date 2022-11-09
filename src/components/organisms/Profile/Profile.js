import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Avatar, Grid, Typography } from "@mui/material";
import { globalStyles } from "../../../styles/global.styles";


export const Profile = () => {

  const { user: currentUser } = useSelector((state) => state.auth);
  

  const globalClases = globalStyles();
  console.log(currentUser)
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <>
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='h6' className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20} ${globalClases.mb10}`}>Datos del usuario</Typography>
      </Grid>
    </Grid>
    <Grid container spacing={5} justifyContent='center' alignItems='center'>      
      <Grid item xs={4}>
        <Avatar          
          src="/static/images/avatar/1.jpg"
          sx={{ width: 100, height: 100 }}
          className={`${globalClases.ml10} ${globalClases.bgColorBlue}`}
        />                
      </Grid>
      <Grid item xs={8}>
        <Typography className={`${globalClases.fs20} ${globalClases.pl20}`}>{currentUser.username}</Typography>
        <Typography className={`${globalClases.fs11} ${globalClases.pl20}`}>{currentUser.email}</Typography>
      </Grid>
    </Grid>
    </>
  )
}
