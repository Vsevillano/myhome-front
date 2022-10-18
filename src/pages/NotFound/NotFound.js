import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { globalStyles } from '../../styles/global.styles'
import { notFoundStyles } from './NotFound.styles'

export const NotFound = () => {
  const globalClases = globalStyles();
  const classes = notFoundStyles();
  return (
    <Grid container>
        <Grid item xs={12} className={classes.root}>
            <Typography variant='h2'>Upps!!</Typography>
            <Typography variant='body' className={globalClases.mt10}>Parece que la página que buscabas no ha podido ser encontrada...</Typography>
            <Button variant='contained' component={Link} to="/" className={globalClases.mt10}>Volver al iniciio</Button>
        </Grid>
    </Grid>
  )
}
