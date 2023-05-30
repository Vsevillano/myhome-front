import { Grid } from '@mui/material'
import React from 'react'
import { ForgotPasswordForm } from '../../components/organisms/ForgotPasswordForm/ForgotPasswordForm'

export const ForgotPassword = () => {

  return (
    <Grid container>
      <Grid item xs={12}>
          <ForgotPasswordForm/>
      </Grid>
    </Grid>
    
  )
}
