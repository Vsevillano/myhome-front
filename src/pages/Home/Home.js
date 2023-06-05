import {
  Grid,
  Typography,
  useMediaQuery,
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Paper,
  TableContainer,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/styles";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTarea, getUserTareas, saveTarea } from "../../actions/tareas";
import { getUsers } from "../../actions/users";
import { CustomLoader } from "../../components/atoms/CustomLoader/CustomLoader";
import { TareaCard } from "../../components/organisms/TareaCard/TareaCard";

import { globalStyles } from "../../styles/global.styles";

export const Home = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const { loading, userTareas } = useSelector((state) => state.userTareas);
  const { loading: loadingGetUsers, users } = useSelector(
    (state) => state.getUsers
  );

  const [isAdmin, setIsAdmin] = useState(false);
  const globalClases = globalStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const dispatch = useDispatch();

  const handleDeleteTarea = (id) => {
    dispatch(deleteTarea(id));
  };

  const handleSaveTarea = (data, id) => {
    dispatch(
      saveTarea({
        id: id,
        nombre: data.nombre,
        categoria: data.categoria,
        descripcion: data.descripcion,
        fecha: data.fecha,
        estado: data.estado,
        user: data.user,
      })
    );
  };

  useEffect(() => {
    if (
      currentUser?.roles.find((item) => item === "ROLE_ADMIN") === "ROLE_ADMIN"
    ) {
      setIsAdmin(true);
    }
  }, [currentUser]);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getUserTareas());
  }, [dispatch]);

  return loadingGetUsers || loading ? (
    <CustomLoader size="medium" />
  ) : currentUser ? (
    isAdmin ? (
      <Grid
        container
        spacing={isMobile ? 2 : 10}
        className={globalClases.container}
      >
        <Grid item xs={12} md={12}>
          <Typography
            variant="h6"
            className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20} ${globalClases.mb10}`}
          >
            Gestión de usuarios
          </Typography>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nombre y apellidos</TableCell>
                  <TableCell align="center">Usuario</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Teléfono</TableCell>
                  <TableCell align="center">Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.nombre} {row.apellidos}
                    </TableCell>
                    <TableCell align="center">{row.username}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.telefono}</TableCell>
                    <TableCell align="center">
                      <Button>Desactivar</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    ) : (
      <Grid container className={globalClases.container}>
        <Grid item xs={4}>
          {loading ? (
            <CustomLoader size="medium" />
          ) : (
            <>
              <Typography
                variant="h6"
                className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20} ${globalClases.mb10}`}
              >
                Mis tareas pendientes
              </Typography>
              {userTareas ? (
                userTareas?.map((tarea) => (
                  <TareaCard
                    key={tarea.id}
                    tarea={tarea}
                    handleDeleteTarea={handleDeleteTarea}
                    handleSaveTarea={handleSaveTarea}
                    users={users}
                  />
                ))
              ) : (
                <Typography variant="p" className={`${globalClases.fw700}`}>
                  ¡Enhorabuena! No tienes tareas pendientes
                </Typography>
              )}
            </>
          )}
        </Grid>
      </Grid>
    )
  ) : (
    <Grid container className={globalClases.container}>
      <Grid item xs={12}>
        <Typography
          variant="h6"
          className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20} ${globalClases.mb10}`}
        >
          Contenido del usuario sin logear
        </Typography>
      </Grid>
    </Grid>
  );
};
