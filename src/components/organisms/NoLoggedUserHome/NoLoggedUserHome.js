import {Grid, Typography } from "@mui/material";
import React from "react";

import { globalStyles } from "../../../styles/global.styles";

export const NoLoggedUserHome = () => {
  const globalClases = globalStyles();

  return (
    <Grid container className={globalClases.container}>
      <Grid item xs={12}>
        <Typography
          variant="h6"
          className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20} ${globalClases.mb10}`}
        >
          Contenido del usuario sin logear
        </Typography>
      </Grid>
    </Grid>
  );
};
