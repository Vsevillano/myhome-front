import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { addProductoToLista, getLista } from "../../actions/lists";
import { CustomLoader } from "../../components/atoms/CustomLoader/CustomLoader";
import { globalStyles } from "../../styles/global.styles";
import { getProductos } from "../../actions/products";
import { useTheme } from "@mui/styles";
import { ListaProductosAnnadir } from "../../components/organisms/ListaProductosAnnadir/ListaProductosAnnadir";

export const EditListaCompra = () => {
  const globalClases = globalStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  const { user: currentUser } = useSelector((state) => state.auth);
  const { isLoading, lista, successAdded } = useSelector(
    (state) => state.lists
  );
  const { isLoading: isLoadingProductos, productos } = useSelector(
    (state) => state.productos
  );

  const [stringProductos, setStringProductos] = useState([]);

  const handleAddToList = (e, producto) => {
    e.preventDefault();
    dispatch(
      addProductoToLista({
        id: id,
        nombre: lista.nombre,
        productos: [...stringProductos, producto.nombre],
      })
    );
  };

  const handleDeleteFromList = (e, producto) => {
    e.preventDefault();
    const nuevaLista = stringProductos.filter(
      (item) => item !== producto.nombre
    );

    dispatch(
      addProductoToLista({
        id: id,
        nombre: lista.nombre,
        productos: nuevaLista,
      })
    );
  };

  useEffect(() => {
    dispatch(getLista(id));
    dispatch(getProductos());
  }, [dispatch, id]);

  useEffect(() => {
    if (lista?.productos) {
      setStringProductos(lista.productos.map((producto) => producto.nombre));
    }
  }, [lista]);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Grid container spacing={2} className={globalClases.container}>
      {isLoading || isLoadingProductos ? (
        <CustomLoader size="medium" />
      ) : (
        <>
          <Grid item xs={12} md={6}>
            <Typography
              className={`${globalClases.mb10} ${globalClases.colorWhite} ${globalClases.fw700} ${globalClases.fs20}`}
            >
              Productos en la lista {lista?.nombre}
            </Typography>
            {lista?.productos ? (
              <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
                {lista?.productos?.map((producto) => {
                  const labelId = `checkbox-list-secondary-label-${producto.id}`;
                  return (
                    <ListItem key={producto.id} disablePadding>
                      <ListItemButton
                        onClick={(e) => handleDeleteFromList(e, producto)}
                      >
                        <ListItemText id={labelId} primary={producto.nombre} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <Typography>Sin productos</Typography>
            )}
          </Grid>
          <ListaProductosAnnadir
            productos={productos}
            lista={lista}
            handleAddToList={handleAddToList}
          />
        </>
      )}
    </Grid>
  );
};
