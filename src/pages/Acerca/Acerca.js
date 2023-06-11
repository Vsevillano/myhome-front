import { Grid, Typography } from "@mui/material";
import React from "react";
import { globalStyles } from "../../styles/global.styles";

export const Acerca = () => {
  const globalClases = globalStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          variant="h6"
          className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20} ${globalClases.mb10}`}
        >
          Acerca de
        </Typography>

        <Typography className={globalClases.mb10}>
        ¡Bienvenido a la sección "Acerca de" de la aplicación MyHome!
    </Typography>
Desarrollada por Victoriano Sevillano Vega en el año 2023, MyHome es una aplicación intuitiva y versátil diseñada para facilitar la gestión de tareas, listas de compra y la administración eficiente de productos en tu hogar. Nuestra misión es proporcionarte una herramienta integral que simplifique y mejore tu experiencia diaria en la organización del hogar.
<Typography className={globalClases.mb10}>
Con MyHome, podrás gestionar tus tareas domésticas de manera eficiente. Ya sea que necesites recordar realizar el mantenimiento del jardín, limpiar la casa o realizar tareas rutinarias, nuestra aplicación te permitirá crear tareas, asignar prioridades, establecer recordatorios y hacer un seguimiento del progreso, para que siempre tengas una visión clara de lo que necesitas hacer.
</Typography>
Además, podrás crear listas de compra de forma rápida y sencilla. Olvídate de olvidar algún producto importante en el supermercado. Con MyHome, podrás crear y administrar múltiples listas de compra, añadir productos con facilidad y llevar un registro actualizado de tus necesidades. Además, podrás gestionar los productos de tu despensa, registrar su fecha de caducidad y recibir notificaciones para evitar desperdicios innecesarios.
<Typography className={globalClases.mb10}>
En MyHome, nos preocupamos por tu comodidad y eficiencia en la gestión de tu hogar. Esperamos que nuestra aplicación te ayude a ahorrar tiempo y energía, para que puedas disfrutar de una vida más organizada y tranquila en tu casa. ¡Descarga MyHome ahora y empieza a simplificar tu vida!
        </Typography>
      </Grid>
    </Grid>
  );
};
