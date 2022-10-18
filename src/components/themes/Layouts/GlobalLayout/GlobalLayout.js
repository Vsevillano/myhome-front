import React from 'react';
import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom'
import { globalLayoutStyles } from './GlobalLayout.styles';
import { Header } from '../../../molecules/Header/Header';


export const GlobalLayout = () => {
  const classes = globalLayoutStyles();

  return (
    <Grid container className={classes.container}>      
        <Header/>
        <Grid item sm={12} md={12} xs={12} className={classes.root}>            
            <Outlet/>            
        </Grid>
    </Grid>
  )
}
