import { Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import React from "react";
import AddIcon from '@mui/icons-material/Add';


import { globalStyles } from "../../../styles/global.styles";

export const ListaProductosAnnadir = ({ productos, lista, handleAddToList }) => {
  const globalClases = globalStyles();

  

  return (
    <>
      <Grid item xs={12} md={6}>
        <Typography
          className={`${globalClases.mb10} ${globalClases.colorWhite} ${globalClases.fw700} ${globalClases.fs20}`}
        >
          Productos para añadir
        </Typography>
        {productos && lista ? (
          <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
            {productos.map((producto) => {
              const listaIds = lista?.productos?.map((producto) => producto.id);
              if (!listaIds?.includes(producto.id)) {
                return (
                  <ListItem key={producto.id} disablePadding secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={(e) => handleAddToList(e, producto)}>
                      <AddIcon />
                    </IconButton>
                  }>
                    <ListItemButton>
                      <ListItemText
                        id={producto.id}
                        primary={producto.nombre}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              }
            })}
          </List>
        ) : (
          <Typography>
            No quedan productos que añadir, pero los puedes crear desde el menú
            "Productos"
          </Typography>
        )}
      </Grid>
    </>
  );
};
