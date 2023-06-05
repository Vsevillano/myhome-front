import { Grid, Typography } from "@mui/material";
import React from "react";
import { globalStyles } from "../../../styles/global.styles";
import noProducts from "../../../assets/noproducts.png";

export const ListaProductosVacia = () => {
  const globalClases = globalStyles();

  return (
    <Grid item xs={12} textAlign="center">
      <img
        src={noProducts}
        alt="Nutrition"
        className={`${globalClases.maxWidth100} ${globalClases.mt50}`}
      />
      <Typography
        className={`${globalClases.mb10} ${globalClases.fw700} ${globalClases.textCenter} ${globalClases.mt10}`}
      >
        ¡Esto está muy vacío!
      </Typography>
      <Typography className={globalClases.textCenter}>
        Toca el botón más para empezar a añadir productos
      </Typography>
    </Grid>
  );
};
