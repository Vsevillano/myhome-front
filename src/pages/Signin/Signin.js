import { Grid } from '@mui/material'
import React from 'react'
import { LoginRegisterForm } from '../../components/organisms/LoginForm/LoginRegisterForm'

export const Signin = () => {

  return (
    <Grid container>
      <Grid item xs={12}>
          <LoginRegisterForm/>
      </Grid>
    </Grid>
    
  )
}
