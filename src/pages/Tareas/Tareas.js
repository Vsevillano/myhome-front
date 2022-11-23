import {
  AppBar,
  Button,
  Dialog,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { globalStyles } from "../../styles/global.styles";
import nutritionImage from "../../assets/Nutrition-plan.svg";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import {
  createTarea,
  deleteTarea,
  getTareas,
  saveTarea,
} from "../../actions/tareas";
import { CustomLoader } from "../../components/atoms/CustomLoader/CustomLoader";
import { useForm } from "react-hook-form";
import { TareaCard } from "../../components/organisms/TareaCard/TareaCard";
import { useTheme } from "@mui/styles";
import { getUsers } from "../../actions/users";
import { Navigate } from "react-router-dom";

export const Tareas = () => {
  
  const globalClases = globalStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  const [estado, setEstado] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const { user: currentUser } = useSelector((state) => state.auth);
  const { loading, tareas } = useSelector((state) => state.tareas);
  const { loading: loadingGetUsers, users } = useSelector((state) => state.getUsers);

  const dispatch = useDispatch();  

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      nombre: "",
      descripcion: "",
      categoria: "",
      user: "",
      estado: "",
    },
  });

  const handleOpenClose = () => {
    setOpen(!open);
  };

  const handleCreateTarea = (data) => {
    dispatch(createTarea(data));
    setOpen(false);
    reset();
  };

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
    dispatch(getUsers());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getTareas());
  // }, [dispatch]);

  useEffect(() => {
    if (!tareas) {
      dispatch(getTareas());
    }
  }, [dispatch, tareas]);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Grid
      container
      spacing={isMobile ? 2 : 10}
      className={globalClases.container}
    >
      {loading ||  
      loadingGetUsers ? (
        <CustomLoader size="medium" />
      ) : !tareas ? (
        <>
          <Grid item xs={12} md={6}>
            <img
              src={nutritionImage}
              alt="Nutrition"
              className={`${globalClases.maxWidth100} ${globalClases.mt50}`}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            alignItems="center"
            justifyContent="center"
            display="flex"
            flexDirection="column"
          >
            <Typography
              className={`${globalClases.mb10} ${globalClases.fw700} ${globalClases.textCenter} ${globalClases.mt10}`}
            >
              "Nada que hacer..."{" "}
            </Typography>
            <Typography
              className={`${globalClases.mb10} ${globalClases.textCenter} ${globalClases.mt10}`}
            >
              {" "}
              Empieza a crear tareas pulsando en el botón "Crear tarea"{" "}
            </Typography>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20}`}
            >
              Listado de tareas pendientes
            </Typography>
            {tareas?.map(
              (tarea) =>
                tarea.estado === "Sin hacer" && (
                  <TareaCard
                    key={tarea.id}
                    tarea={tarea}
                    handleDeleteTarea={handleDeleteTarea}
                    handleSaveTarea={handleSaveTarea}
                    users={users}
                  />
                )
            )}
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20}`}
            >
              Listado de tareas en proceso
            </Typography>
            {tareas?.map(
              (tarea) =>
                tarea.estado === "En proceso" && (
                  <TareaCard
                    key={tarea.id}
                    tarea={tarea}
                    handleDeleteTarea={handleDeleteTarea}
                    handleSaveTarea={handleSaveTarea}
                    users={users}
                    
                  />
                )
            )}
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20}`}
            >
              Listado de tareas finalizadas
            </Typography>
            {tareas?.map(
              (tarea) =>
                tarea.estado === "Terminado" && (
                  <TareaCard
                    key={tarea.id}
                    tarea={tarea}
                    handleDeleteTarea={handleDeleteTarea}
                    handleSaveTarea={handleSaveTarea}
                    users={users}
                  />
                )
            )}
          </Grid>
        </>
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
          onClick={handleOpenClose}
        >
          Crear tarea
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
                Nueva tarea
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
              <form onSubmit={handleSubmit(handleCreateTarea)}>
                <TextField
                  fullWidth
                  label="Nombre de la tarea"
                  variant="outlined"
                  className={globalClases.mt10}
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
                  className={globalClases.mt10}
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
                  className={globalClases.mt10}
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
                  className={globalClases.mt10}
                />
                {errors.fecha?.type === "required" && (
                  <span className={globalClases.formError}>
                    El campo fecha es requerido
                  </span>
                )}
                <FormControl fullWidth className={globalClases.mt10}>
                  <InputLabel id="estado-label">Estado</InputLabel>
                  <Select
                    {...register("estado", { required: true })}
                    labelId="estado-label"
                    id="estado"
                    value={estado}
                    label="Estado"
                    onChange={(e) => setEstado(e.target.value)}
                  >
                    <MenuItem value={"Sin hacer"}>Sin hacer</MenuItem>
                    <MenuItem value={"Terminado"}>Terminado</MenuItem>
                    <MenuItem value={"En proceso"}>En proceso</MenuItem>
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
                    value={selectedUser}
                    label="Estado"
                    onChange={(e) => setSelectedUser(e.target.value)}
                  >
                    {users?.map((user) => (
                      <MenuItem key={user.id} value={user.id}>
                        {user?.username}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.estado?.type === "required" && (
                    <span className={globalClases.formError}>
                      El campo estado es requerido
                    </span>
                  )}
                </FormControl>
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
