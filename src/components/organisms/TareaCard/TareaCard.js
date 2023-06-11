import {
  AppBar,
  Button,
  Collapse,
  Dialog,
  FormControl,
  FormGroup,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { globalStyles } from "../../../styles/global.styles";
import { tareaCardStyles } from "./TareaCard.styles";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTheme } from "@emotion/react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";


export const TareaCard = ({
  tarea,
  handleDeleteTarea,
  handleSaveTarea,
  users,
}) => {
  const dispatch = useDispatch();
  const globalClases = globalStyles();
  const classes = tareaCardStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);
  const [estado, setEstado] = useState("");
  const [selectedUser, setSelectedUser] = useState(tarea.user);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { id } = tarea;

  const handleOpenClose = () => {
    setOpen(!open);
  };

  const handleSubmitTarea = (data) => {
    handleSaveTarea(data, id);
    handleOpenClose();
  };

  useEffect(() => {
    reset({
      nombre: tarea?.nombre,
      descripcion: tarea?.descripcion,
      categoria: tarea?.categoria,
      fecha: tarea?.fecha,
    });
  }, [dispatch, tarea, reset]);

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const formatDate = (date) => {
    const newDate = date.split("-");
    return newDate[2] + "/" + newDate[1] + "/" + newDate[0];
  };

  const username = users?.find((user) => {
    return user.id === tarea.user;
  });

  return (
    <Paper
      key={tarea.id}
      elevation={1}
      className={`${globalClases.px20} ${globalClases.mt10}`}
    >
      <FormGroup>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography
              className={
                tarea.estado === "Terminado"
                  ? `${classes.terminado} ${globalClases.mt10}`
                  : `${globalClases.mt10}`
              }
            >
              {tarea.nombre}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            className={
              `${globalClases.mb10} ${globalClases.mt20} ${classes.actions}`
              
            }
          >
            <EditIcon onClick={handleOpenClose} />
            <DeleteIcon
              className={globalClases.mx10}
              onClick={() => handleDeleteTarea(tarea.id)}
            />
            <InfoIcon
              expand={`${expanded}`}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            />
          </Grid>
          <Grid item xs={12} className={`${classes.fechaTarea}`}>
            {" "}
            Fecha límite: {formatDate(tarea.fecha)}
          </Grid>
          <Grid
            item
            xs={12}
            className={`${classes.fechaTarea} ${classes.fechaTarea}`}
          >
            {" "}
            Responsable: {username?.username}
          </Grid>
          <Grid
            item
            xs={12}
            className={`${classes.fechaTarea} ${globalClases.mb10}`}
          >
            <Collapse
              in={expanded}
              timeout="auto"
              unmountOnExit
              className={globalClases.mt10}
            >
              <Typography>{tarea.descripcion}</Typography>
            </Collapse>
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
                  Editar tarea
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
                <form onSubmit={handleSubmit(handleSubmitTarea)}>
                  <TextField
                    fullWidth
                    label="Nombre de la tarea"
                    variant="outlined"
                    className={`${globalClases.inputWhite} ${globalClases.mt10}`}
                    {...register("nombre", { required: true })}
                  />
                  {errors.nombre?.type === "required" && (
                    <span className={globalClases.formError}>
                      El campo nombre es requerido
                    </span>
                  )}
                  <TextField
                    fullWidth
                    label="Descripción"
                    variant="outlined"
                    className={`${globalClases.inputWhite} ${globalClases.mt10}`}
                    {...register("descripcion", { required: true })}
                  />
                  {errors.descripcion?.type === "required" && (
                    <span className={globalClases.formError}>
                      El campo descripcion es requerido
                    </span>
                  )}
                  <TextField
                    fullWidth
                    label="Categoría"
                    variant="outlined"
                    className={`${globalClases.inputWhite} ${globalClases.mt10}`}
                    {...register("categoria", { required: true })}
                  />
                  {errors.categoria?.type === "required" && (
                    <span className={globalClases.formError}>
                      El campo categoria es requerido
                    </span>
                  )}
                  <TextField
                    type="date"
                    InputLabelProps={{ shrink: true, required: true }}
                    {...register("fecha", { required: true })}
                    fullWidth
                    label="Fecha límite"
                    variant="outlined"
                    className={`${globalClases.inputWhite} ${globalClases.mt10}`}
                  />
                  {errors.fecha?.type === "required" && (
                    <span className={globalClases.formError}>
                      El campo fecha es requerido
                    </span>
                  )}
                  <FormControl
                    fullWidth
                    className={`${globalClases.inputWhite} ${globalClases.mt10}`}
                  >
                    <InputLabel id="estado-label">Estado</InputLabel>
                    <Select
                      {...register("estado", { required: true })}
                      labelId="estado-label"
                      id="estado"
                      value={estado || tarea?.estado}
                      label="Estado"
                      onChange={(e) => setEstado(e.target.value)}
                    >
                      <MenuItem
                        value={"Sin hacer"}
                        selected={tarea?.estado === "Sin hacer"}
                      >
                        Sin hacer
                      </MenuItem>
                      <MenuItem
                        value={"Terminado"}
                        selected={tarea?.estado === "Terminado"}
                      >
                        Terminado
                      </MenuItem>
                      <MenuItem
                        value={"En proceso"}
                        selected={tarea?.estado === "En proceso"}
                      >
                        En proceso
                      </MenuItem>
                    </Select>
                    {errors.estado?.type === "required" && (
                      <span className={globalClases.formError}>
                        El campo estado es requerido
                      </span>
                    )}
                  </FormControl>
                  <FormControl fullWidth className={globalClases.mt10}>
                    <InputLabel id="estado-label">Usuario</InputLabel>
                    <Select
                      {...register("user", { required: true })}
                      labelId="user-label"
                      id="user"
                      value={selectedUser || ""}
                      label="Estado"
                      onChange={(e) => setSelectedUser(e.target.value)}
                    >
                      {users?.map((user) => (
                        user?.username !== 'Administrador' && (
                        <MenuItem key={user.id} value={user.id}>
                          {user?.username}
                        </MenuItem>)
                      ))}
                    </Select>
                  </FormControl>
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
        </Grid>
      </FormGroup>
    </Paper>
  );
};
