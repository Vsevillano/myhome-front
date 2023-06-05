import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Button,
  Dialog,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

import { globalStyles } from "../../../styles/global.styles";
import { useForm } from "react-hook-form";
import { useTheme } from "@emotion/react";

export const ListaProductos = ({ productos }) => {
  const globalClases = globalStyles();

  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleOpenClose = () => {
    setOpen(!open);
  };

  const handleSubmitEditProduct = (data) => {
    handleOpenClose();
    reset();
  };

  const handleDeleteProduct = () => {};

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  return (
    <>
      <Grid item xs={12} md={6}>
        <div>
          {productos?.map((producto, i) => {
            return (
              <Accordion
                expanded={expanded === "panel" + i}
                onChange={handleChange("panel" + i)}
                key={i}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography>{producto.nombre}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    className={`${globalClases.mb10} ${globalClases.mt20}`}
                  >
                    <EditIcon onClick={handleOpenClose} />
                    <DeleteIcon
                      className={globalClases.mx10}
                      onClick={() => handleDeleteProduct(producto.id)}
                    />
                  </Grid>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </Grid>
      <Dialog fullScreen={isMobile} open={open} onClose={handleOpenClose}>
        <AppBar elevation={0} sx={{ position: "relative" }}>
          <Toolbar>
            <Typography
              sx={{ ml: 2, flex: 1 }}
              variant="h6"
              component="div"
              className={globalClases.textCenter}
            >
              Editar producto
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleOpenClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Grid container className={globalClases.px20}>
          <Grid
            item
            xs={12}
            className={`${globalClases.mt10} ${globalClases.mb20}`}
          >
            <form onSubmit={handleSubmit(handleSubmitEditProduct)}>
              <TextField
                fullWidth
                label="Nombre del producto"
                variant="outlined"
                className={`${globalClases.inputWhite} ${globalClases.mt10}`}
                {...register("nombre", { required: true })}
              />
              {errors.nombre?.type === "required" && (
                <span className={globalClases.formError}>
                  El campo nombre es requerido
                </span>
              )}

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={`${globalClases.mt10}`}
                  >
                    Guardar
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="outlined"
                    className={`${globalClases.mt10}`}
                    onClick={handleOpenClose}
                  >
                    Cancelar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};
