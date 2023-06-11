import { useTheme } from "@emotion/react";
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { changeUserEstado } from "../../../actions/users";

import { globalStyles } from "../../../styles/global.styles";

export const LoggedAdminHome = ({ users, handleChangeEstado }) => {
  const globalClases = globalStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  
  return (
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
              {users?.map(
                (row) =>
                  row.nombre !== "Administrador" && (
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
                        {row.activo ? (
                          <Button onClick={(e) => {
                            e.preventDefault();
                            handleChangeEstado(row.id, false);
                          }}>Desactivar</Button>
                        ) : (
                          <Button onClick={(e) => {
                            e.preventDefault();
                            handleChangeEstado(row.id, true);
                          }}>Activar</Button>
                        )}
                      </TableCell>
                    </TableRow>
                  )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};
