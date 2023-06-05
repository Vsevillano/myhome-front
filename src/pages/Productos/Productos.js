import {
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
import React, { useEffect, useState } from "react";
import { globalStyles } from "../../styles/global.styles";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import {
  createProducto,
  deleteProducto,
  getProductos,
  saveProducto,
} from "../../actions/products";
import { Navigate } from "react-router-dom";
import { CustomLoader } from "../../components/atoms/CustomLoader/CustomLoader";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";
import { useForm } from "react-hook-form";
import { ListaProductosVacia } from "../../components/organisms/ListaProductosVacia/ListaProductosVacia";
import { ListaProductos } from "../../components/organisms/ListaProductos/ListaProductos";

export const Productos = () => {
  const globalClases = globalStyles();

  const { user: currentUser } = useSelector((state) => state.auth);
  const { isLoading, editSuccess, deleteSuccess, saveSuccess, productos } = useSelector(
    (state) => state.productos
  );

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      nombre: "",
    },
  });

  const handleCreateProducto = (data) => {
    dispatch(createProducto(data.nombre));
    setOpen(false);
    reset();
  };

  const handleEditProducto = (id, nombre) => {
    dispatch(saveProducto(id, nombre));
    setOpen(false);
    reset();
  };

  useEffect(() => {
    dispatch(getProductos());
  }, []);

  useEffect(() => {
    if (deleteSuccess || editSuccess || saveSuccess) dispatch(getProductos());
  }, [dispatch, deleteSuccess, editSuccess, saveSuccess]);

  const handleOpenClose = () => {
    setOpen(!open);
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProducto(id));
  };

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Grid container className={globalClases.container}>
      <Grid item xs={12}>
        <Typography
          variant="h6"
          className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20}`}
        >
          Productos
        </Typography>
        {isLoading ? (
          <CustomLoader size="medium" />
        ) : !productos ? (
          <ListaProductosVacia />
        ) : (
          <ListaProductos
            productos={productos}
            handleDeleteProduct={handleDeleteProduct}
            handleEditProducto={handleEditProducto}
          />
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
          Crear producto
        </Button>
        <Dialog fullScreen={isMobile} open={open} onClose={handleOpenClose}>
          <AppBar elevation={0} sx={{ position: "relative" }}>
            <Toolbar>
              <Typography
                sx={{ ml: 2, flex: 1 }}
                variant="h6"
                component="div"
                className={globalClases.textCenter}
              >
                Crear producto
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
            <Grid item xs={12} className={globalClases.mt10}>
              <form onSubmit={handleSubmit(handleCreateProducto)}>
                <TextField
                  fullWidth
                  label="Nombre del producto"
                  variant="outlined"
                  className={globalClases.mt10}
                  {...register("nombre", { required: true })}
                />
                {errors.nombre?.type === "required" && (
                  <span className={globalClases.formError}>
                    El campo nombre es requerido
                  </span>
                )}

                <Grid container spacing={2} className={globalClases.mb20}>
                  <Grid item xs={6}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      className={`${globalClases.mt10}`}
                    >
                      Crear
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      fullWidth
                      variant="outlined"
                      className={`${globalClases.mt10}`}
                      onClick={(e) => {
                        handleOpenClose(e);
                        reset();
                      }}
                    >
                      Cancelar
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Dialog>
      </Grid>
    </Grid>
  );
};
