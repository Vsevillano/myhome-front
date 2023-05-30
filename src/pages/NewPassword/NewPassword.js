import { Grid } from '@mui/material'
import React from 'react'
import { NewPasswordForm } from '../../components/organisms/NewPasswordForm/NewPasswordForm'

export const NewPassword = () => {

  return (
    <Grid container>
      <Grid item xs={12}>
          <NewPasswordForm/>
      </Grid>
    </Grid>
    
  )
}
