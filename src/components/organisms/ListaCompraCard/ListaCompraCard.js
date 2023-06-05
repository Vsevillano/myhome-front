import { FormGroup, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { globalStyles } from "../../../styles/global.styles";
import { listaCompraCardStyles } from "./ListaCompraCard.styles";
import { useNavigate } from "react-router-dom";

export const ListaCompraCard = ({ lista, handleDeleteLista }) => {
  const globalClases = globalStyles();
  const classes = listaCompraCardStyles();
  const navigate = useNavigate();
  return (
    <Grid item xs={12}>
      <Paper
        elevation={1}
        className={`${globalClases.px20} ${globalClases.mt10} ${globalClases.pb10}`}
      >
        <FormGroup>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body1" className={globalClases.mt10}>
                {lista.nombre}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              className={`${globalClases.px20} ${globalClases.mt10} ${classes.actions}`}
            >
              <EditIcon
                className={globalClases.mx10}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(lista.id);
                }}
              />
              <DeleteIcon
                onClick={(e) => {
                  e.preventDefault();
                  handleDeleteLista(lista.id);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography className={globalClases.fs11}>
                Elementos en la lista: {lista?.productos?.length}
              </Typography>
            </Grid>
          </Grid>
        </FormGroup>
      </Paper>
    </Grid>
  );
};
