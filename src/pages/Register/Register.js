import { Grid } from "@mui/material";
import React from "react";
import { RegisterForm } from "../../components/organisms/RegisterForm/RegisterForm";

export const Register = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <RegisterForm />
      </Grid>
    </Grid>
  );
};
