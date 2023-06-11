import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar, Grid, Typography } from "@mui/material";
import { globalStyles } from "../../../styles/global.styles";

export const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  const globalClases = globalStyles();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Grid
        container
        className={`${globalClases.container} ${globalClases.fitContent}`}
      >
        <Grid item xs={12} className={globalClases.fitContent}>
          <Typography
            variant="h6"
            className={`${globalClases.colorWhite} ${globalClases.mb20} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20}`}
          >
            Perfil
          </Typography>
        </Grid>
        <Grid item md={1} sm={12}>
          <Avatar
            src="/static/images/avatar/1.jpg"
            sx={{ width: 100, height: 100 }}
            className={`${globalClases.ml10} ${globalClases.bgColorBlue}`}
          />
        </Grid>
        <Grid item sm={12} md={8}>
          <Typography className={`${globalClases.fs20} ${globalClases.pl20}`}>
            {currentUser.username}
          </Typography>
          <Typography className={`${globalClases.fs11} ${globalClases.pl20}`}>
            Teléfono: {currentUser.telefono}
          </Typography>
          <Typography className={`${globalClases.fs11} ${globalClases.pl20}`}>
            Email: {currentUser.email}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
