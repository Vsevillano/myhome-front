import { Grid } from "@mui/material";
import React from "react";
import { LoginForm } from "../../components/organisms/LoginForm/LoginForm";

export const Login = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <LoginForm />
      </Grid>
    </Grid>
  );
};
