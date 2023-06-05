import {
  Grid,
  List,
  ListItem,
  Checkbox,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";

export const ListaProductos = ({ productos }) => {
  const [checked, setChecked] = useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Grid item xs={12} md={6}>
      <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
        {productos?.map((producto) => {
          const labelId = `checkbox-list-secondary-label-${producto.id}`;
          return (
            <ListItem
              key={producto.id}
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={handleToggle(producto.id)}
                  checked={checked.indexOf(producto.id) !== -1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemText id={labelId} primary={producto.nombre} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
};
