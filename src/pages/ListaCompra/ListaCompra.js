import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { globalStyles } from "../../styles/global.styles";
import { deleteLista, getListas } from "../../actions/lists";
import { CustomLoader } from "../../components/atoms/CustomLoader/CustomLoader";
import { ListaCompraVacia } from "../../components/organisms/ListaCompraVacia/ListaCompraVacia";
import { ListaCompraCard } from "../../components/organisms/ListaCompraCard/ListaCompraCard";
import { ListaCompraAdd } from "../../components/organisms/ListaCompraAdd/ListaCompraAdd";
import AddIcon from "@mui/icons-material/Add";

export const ListaCompra = () => {
  const globalClases = globalStyles();

  const { user: currentUser } = useSelector((state) => state.auth);
  const { isLoading, listas } = useSelector((state) => state.lists);

  const dispatch = useDispatch();

  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleDeleteLista = (id) => {
    dispatch(deleteLista(id));
  };

  useEffect(() => {
    if (!listas || isAdded) {
      dispatch(getListas());
      setIsAdded(false);
    }
  }, [dispatch, listas, isAdded]);

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
          Mis listas
        </Typography>
      
      {!isAdding ? (
        <Grid item xs={12}>
          {isLoading ? (
            <CustomLoader size="medium" />
          ) : listas ? (
            listas.map((lista) => (
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
      ) : (
        <Grid item xs={12}>
          <ListaCompraAdd setIsAdding={setIsAdding} setIsAdded={setIsAdded} />
        </Grid>
      )}
      <Grid
        item
        xs={12}
        textAlign="right"
        className={globalClases.bottomButton}
      >
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setIsAdding(true)}
        >
          Crear lista
        </Button>
      </Grid>
    </Grid>
  </Grid>
  );
};
