import { Grid, Typography } from "@mui/material";
import React from "react";

import { globalStyles } from "../../../styles/global.styles";
import { CustomLoader } from "../../atoms/CustomLoader/CustomLoader";
import { TareaCard } from "../TareaCard/TareaCard";

export const LoggedUserHome = ({loadingTareas, isAdmin, userTareas, handleDeleteTarea, handleSaveTarea, users}) => {
  const globalClases = globalStyles();

  return (
    <Grid container className={globalClases.container}>
      <Grid item xs={4}>
        {loadingTareas && !isAdmin ? (
          <CustomLoader size="medium" />
        ) : (
          <>
            <Typography
              variant="h6"
              className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20} ${globalClases.mb10}`}
            >
              Mis tareas pendientes
            </Typography>
            {userTareas ? (
              userTareas?.map((tarea) => (
                <TareaCard
                  key={tarea.id}
                  tarea={tarea}
                  handleDeleteTarea={handleDeleteTarea}
                  handleSaveTarea={handleSaveTarea}
                  users={users}
                />
              ))
            ) : (
              <Typography variant="p" className={`${globalClases.fw700}`}>
                ¡Enhorabuena! No tienes tareas pendientes
              </Typography>
            )}
          </>
        )}
      </Grid>
    </Grid>
  );
};
