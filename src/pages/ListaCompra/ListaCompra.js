import { AppBar, Button, Dialog, Grid, IconButton, TextField, Toolbar, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { globalStyles } from "../../styles/global.styles";
import { createLista, deleteLista, getListas } from "../../actions/lists";
import { CustomLoader } from "../../components/atoms/CustomLoader/CustomLoader";
import { ListaCompraVacia } from "../../components/organisms/ListaCompraVacia/ListaCompraVacia";
import { ListaCompraCard } from "../../components/organisms/ListaCompraCard/ListaCompraCard";
import { ListaCompraAdd } from "../../components/organisms/ListaCompraAdd/ListaCompraAdd";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@emotion/react";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";

export const ListaCompra = () => {
  const globalClases = globalStyles();

  const { user: currentUser } = useSelector((state) => state.auth);
  const { isLoading, listas, successCreate, successDelete } = useSelector((state) => state.lists);

  const { register, formState: { errors }, handleSubmit, reset} = useForm();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);

  const handleOpenClose = () => {
    setOpen(!open);
  };

  const handleDeleteLista = (id) => {
    dispatch(deleteLista(id));
  };

  const handleCreateLista = (data) => {
    handleOpenClose();
    dispatch(createLista(data.nombre));
    reset();
  };

  useEffect(() => {
    if (successCreate)
    dispatch(getListas());
  }, [dispatch, successCreate]);

  useEffect(() => {
    if (successDelete)
    dispatch(getListas());
  }, [dispatch, successDelete]);

  useEffect(() => {
   
    dispatch(getListas());
  }, [dispatch]);


  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Grid container className={globalClases.container}>
        {isLoading ? (
          <CustomLoader size="medium" />
        ) : (
          <Grid item xs={12}>
            <Typography
              variant="h6"
              className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20}`}
            >
              Listas de compra
            </Typography>
            <Grid item xs={12}>
              {listas?.length > 0 ? ( 
                listas?.map((lista) => (
                  <Grid key={lista.id} item xs={12} md={4}>
                    <ListaCompraCard
                      lista={lista}
                      handleDeleteLista={handleDeleteLista}
                    />
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
                  <ListaCompraVacia />
                </Grid>
              )}
            </Grid>
            <Grid
              item
              xs={12}
              textAlign="right"
              className={globalClases.bottomButton}
            >
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleOpenClose}
              >
                Crear lista
              </Button>
            </Grid>
          </Grid>
        )}
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
              Crear lista
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
            <form onSubmit={handleSubmit(handleCreateLista)}>
              <TextField
                fullWidth
                label="Nombre de la lista"
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
