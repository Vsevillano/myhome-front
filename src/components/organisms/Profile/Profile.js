import React from "react";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";


export const Profile = () => {

  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='body1'><strong>Username:</strong> {currentUser.username}</Typography>
        <Typography>
        <strong>Token:</strong> {currentUser.accessToken}
        
        </Typography>
        <Typography><strong>Id:</strong> {currentUser.id}</Typography>
        <Typography><strong>Email:</strong> {currentUser.email}</Typography>
        <Typography><strong>Autoridad:</strong></Typography>
          <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
          </ul>
      </Grid>
    </Grid>
  )
}
