import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { globalStyles } from "../../../styles/global.styles";

export const NoLoggedUserHome = () => {
  const globalClases = globalStyles();
  const navigate = useNavigate();
  return (
    <Grid container className={globalClases.container}>
      <Grid item xs={12}>
        <Typography variant="h6" className={`${globalClases.mb10}`}>
          ¡Bienvenido a Myhome, tu plataforma de organización y gestión
          personalizada! Con Myhome, puedes crear listas de productos y
          administrar tus tareas de manera eficiente y sin complicaciones. Ya
          sea que estés organizando tu lista de compras, planificando proyectos
          o simplemente deseando mantener tus tareas diarias en orden, Myhome
          está aquí para ayudarte.
        </Typography>
        <Typography variant="h6" className={`${globalClases.mb10}`}>
          En Myhome, la seguridad y privacidad son nuestras principales
          prioridades. Puedes estar tranquilo sabiendo que tus datos están
          protegidos y solo tú tienes acceso a ellos. Además, nuestra aplicación
          está disponible en múltiples dispositivos, lo que significa que puedes
          acceder a tus listas y tareas en cualquier momento y en cualquier
          lugar.
        </Typography>
        <Typography variant="h6" className={`${globalClases.mb10}`}>
          ¿Estás listo para llevar tu organización al siguiente nivel?
          ¡Regístrate en Myhome hoy mismo y descubre la comodidad de tener tus
          listas de productos y tareas bajo control!
        </Typography>
      </Grid>
      <Grid item xs={12} textAlign="center" className={globalClases.mt10}>
        <Button
          variant="contained"          
          onClick={(e) => {
            e.preventDefault();
            navigate("/register");
          }}
        >
          Crear cuenta
        </Button>
      </Grid>
    </Grid>
  );
};
