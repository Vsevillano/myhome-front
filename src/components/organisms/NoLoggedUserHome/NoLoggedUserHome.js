import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { globalStyles } from "../../../styles/global.styles";

export const NoLoggedUserHome = () => {
  const globalClases = globalStyles();
  const navigate = useNavigate();
  return (
    <Grid container className={globalClases.container} textAlign="center" justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h4" textAlign="center" className={`${globalClases.mb10} ${globalClases.colorWhite}`}>
        ¡Bienvenido a MyHome! Organiza listas de productos y gestiona tareas de manera eficiente.
        </Typography>
        <Typography variant="h4" textAlign="center" className={`${globalClases.mb10} ${globalClases.blueStrong}`}>
        Regístrate hoy y mantén todo bajo control.
        </Typography>
        <Button
          variant="contained"          
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
          }}
          className={globalClases.mt50}
        >
          Crear cuenta
        </Button>
      </Grid>
      
    </Grid>
  );
};
