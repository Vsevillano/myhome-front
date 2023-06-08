import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { create } from "../../../actions/lists";
import { globalStyles } from "../../../styles/global.styles";

export const ListaCompraAdd = ({ handleCreateLista }) => {
  const dispatch = useDispatch();
  const globalClases = globalStyles();
  const [name, setName] = useState("");



  return (
    <Card className={`${globalClases.px20} ${globalClases.pb20}`}>
      <Typography variant="h6" textAlign="center" className={globalClases.mt10}>
        Nueva lista
      </Typography>
      <TextField
        fullWidth
        label="Nombre de la lista"
        variant="outlined"
        className={globalClases.mt10}
        onChange={(e) => setName(e.target.value)}
      />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            className={`${globalClases.mt10}`}
            onClick={handleCreateLista}
          >
            Añadir
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="outlined"
            className={`${globalClases.mt10}`}            
          >
            Cancelar
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};
