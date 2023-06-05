import {
  AppBar,
  Box,
  Button,
  Card,
  Chip,
  Dialog,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { addProductoToLista, getLista } from "../../actions/lists";
import { CustomLoader } from "../../components/atoms/CustomLoader/CustomLoader";
import { globalStyles } from "../../styles/global.styles";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { getProductos } from "../../actions/products";
import nutritionImage from "../../assets/verdura.png";
import { useTheme } from "@mui/styles";

export const EditListaCompra = () => {
  const globalClases = globalStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const params = useParams();
  const { id } = params;

  const { user: currentUser } = useSelector((state) => state.auth);
  const { isLoading, lista } = useSelector((state) => state.lists);
  const { isLoading: isLoadingProductos, productos } = useSelector(
    (state) => state.productos
  );
  const [open, setOpen] = useState(false);
  const [listaProductos, setListaProductos] = useState([]);
  const [isCreated, setIsCreated] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!lista?.productos) {
      dispatch(getLista(id));
    }
  }, [dispatch, lista, id]);

  useEffect(() => {
    dispatch(getLista(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (!productos || isCreated) {
      dispatch(getProductos());
      setIsCreated(false);
    }
  }, [dispatch, productos, isCreated]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setListaProductos(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };


  const handleAddToList = (e) => {
    e.preventDefault();
    dispatch(
      addProductoToLista({
        id: id,
        nombre: lista?.nombre,
        productos: listaProductos,
      })
    );
    setOpen(false);
  };


  const handleOpenClose = () => {
    setOpen(!open);
  };

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Grid container className={globalClases.container}>
      {isLoading ? (
        <CustomLoader size="medium" />
      ) : (
        <>
          <Grid item xs={12} md={4}>
            <Typography
              className={`${globalClases.mb10} ${globalClases.colorWhite} ${globalClases.fw700} ${globalClases.fs20}`}
            >
              Lista {lista?.nombre}
            </Typography>

            {lista?.productos?.length > 0 ? (
              <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
                {lista?.productos?.map((producto) => {
                  const labelId = `checkbox-list-secondary-label-${producto.id}`;
                  return (
                    <ListItem key={producto.id} disablePadding>
                      <ListItemButton>
                        <ListItemText id={labelId} primary={producto.nombre} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <Grid item xs={12} textAlign="center">
                <img
                  src={nutritionImage}
                  alt="Nutrition"
                  className={`${globalClases.maxWidth200px} ${globalClases.mt50}`}
                />
                <Typography
                  className={`${globalClases.mb10} ${globalClases.fw700} ${globalClases.textCenter} ${globalClases.mt10}`}
                >
                  ¿Qué necesitas comprar?
                </Typography>
                <Typography>
                  Toca el botón más para empezar a añadir productos a tu lista
                </Typography>
              </Grid>
            )}
          </Grid>

          <Grid
            item
            xs={12}
            textAlign="right"
            className={globalClases.bottomButton}
          >
            <>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={handleOpenClose}
              >
                Añadir a la lista
              </Button>
              <Dialog
                fullScreen={isMobile}
                open={open}
                onClose={handleOpenClose}
              >
                <AppBar elevation={0} sx={{ position: "relative" }}>
                  <Toolbar>
                    <Typography
                      sx={{ ml: 2, flex: 1 }}
                      variant="h6"
                      component="div"
                      className={globalClases.textCenter}
                    >
                      Añadir producto
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
                <Card
                  className={`${globalClases.px20} ${globalClases.pb20} ${globalClases.m20}`}
                >
                  {isLoadingProductos ? (
                    <CustomLoader size="medium" />
                  ) : (
                    <>
                      <Typography
                        variant="h6"
                        textAlign="center"
                        className={globalClases.mt10}
                      >
                        Elige tus productos
                      </Typography>

                      <Select
                        label="Productos"
                        fullWidth
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={listaProductos}
                        onChange={handleChange}
                        input={
                          <OutlinedInput
                            id="select-multiple-chip"
                            label="Chip"
                          />
                        }
                        renderValue={(selected) => (
                          <Box
                            sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                          >
                            {selected.map((value) => (
                              <Chip key={value} label={value} />
                            ))}
                          </Box>
                        )}
                      >
                        {productos?.map((producto) => (
                          <MenuItem key={producto.id} value={producto.nombre}>
                            {producto.nombre}
                          </MenuItem>
                        ))}
                      </Select>

                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Button
                            fullWidth
                            variant="contained"
                            className={`${globalClases.mt10}`}
                            onClick={(e) => handleAddToList(e)}
                          >
                            Actualizar
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button
                            fullWidth
                            variant="outlined"
                            className={`${globalClases.mt10}`}
                            onClick={() => setOpen(false)}
                          >
                            Cancelar
                          </Button>
                        </Grid>
                      </Grid>
                      
                    </>
                  )}
                </Card>
              </Dialog>
            </>
          </Grid>
        </>
      )}
    </Grid>
  );
};
