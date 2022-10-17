import React from 'react';
import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom'

export const SigninLayout = () => {
  return (
    <Grid container>
        <Grid item sm={6} md={6} xs={6}>
            <Outlet/>
        </Grid>
    </Grid>
  )
}
