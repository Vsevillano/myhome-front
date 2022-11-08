import { AppBar, Button,  Dialog, FormControl, Grid, IconButton,  InputLabel,  MenuItem,  Select,  TextField,  Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { globalStyles } from '../../styles/global.styles';
import nutritionImage from '../../assets/Nutrition-plan.svg'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

import { createTarea, deleteTarea, getTareas } from '../../actions/tareas';
import { CustomLoader } from '../../components/atoms/CustomLoader/CustomLoader';
import { useForm } from 'react-hook-form';
import { TareaCard } from '../../components/organisms/TareaCard/TareaCard';

export const Tareas = () => {

  const globalClases = globalStyles();  
  const [open, setOpen] = useState(false);  
  // const [isDeleted, setIsDeleted] = useState(false);  
  // const [isCreated, setIsCreated] = useState(false);  

  const [estado, setEstado] = useState('');  
  
  const { user: currentUser } = useSelector((state) => state.auth);
  const { loading, tareas, } = useSelector(state => state.tareasList);
  const { loading: loadingCreateTarea } = useSelector(state => state.createTarea);
  const { loading: loadingDeleteTarea } = useSelector(state => state.deleteTarea);
  const { loading: loadingSaveTarea } = useSelector(state => state.saveTarea);
    
  const dispatch = useDispatch();

  const { register, formState : { errors }, handleSubmit, reset } = useForm({
    defaultValues: {
      nombre: '',
      descripcion: '',
      categoria: '',
    }
  });

  const handleOpenClose = () => {
    setOpen(!open);    
  }  

  const handleCreateTarea = (data) => {           
    dispatch(createTarea(data));
    setOpen(false)    
    reset();    
  }

  const handleDeleteTarea = (id) => {
    dispatch(deleteTarea(id));             
  }

  useEffect(() => {
    if (!tareas || loadingCreateTarea || loadingDeleteTarea || loadingSaveTarea) {  
      dispatch(getTareas());      
      // console.log("Create: " +  loadingCreateTarea + "\nDelete: " + loadingDeleteTarea + "\nSave: " + loadingSaveTarea)
    }
  }, [dispatch, tareas, loadingCreateTarea, loadingDeleteTarea, loadingSaveTarea])  

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Grid container>      
        {loading || loadingCreateTarea || loadingDeleteTarea? <CustomLoader size='medium'/> : (
          !tareas ? 
          <Grid item xs={12}>
              <img src={nutritionImage} alt='Nutrition' className={`${globalClases.maxWidth100} ${globalClases.mt50}`}/>
              <Typography className={`${globalClases.mb10} ${globalClases.fw700} ${globalClases.textCenter} ${globalClases.mt10}`}>Nada que hacer...</Typography>                
          </Grid> :
          ( 
          <Grid item xs={12}>
            <Typography variant='h6' className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20}`}>Tareas pendientes</Typography>
            {tareas?.map((tarea) => (            
              <TareaCard key={tarea.id} tarea={tarea} handleDeleteTarea={handleDeleteTarea}/>
            ))}
          </Grid>          
          )                              
        )}
        <Grid item xs={12} textAlign='right' className={globalClases.bottomButton}>
          <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpenClose}>Crear tarea</Button>
          <Dialog fullScreen open={open} onClose={handleOpenClose} >            
            <AppBar elevation={0} sx={{ position: 'relative' }}>
              <Toolbar>                
                <Typography sx={{ ml: 2, flex: 1 }}  variant="h6" component="div" className={globalClases.textCenter}>
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
                  <TextField fullWidth label="Nombre de la tarea" variant="outlined" className={globalClases.mt10} {...register('nombre', { required: true })}/>
                  {errors.nombre?.type === 'required' && <span className={globalClases.formError}>El campo nombre es requerido</span>}
                  <TextField fullWidth label="Descripción" variant="outlined" className={globalClases.mt10} {...register('descripcion', { required: true })}/>
                  {errors.descripcion?.type === 'required' && <span className={globalClases.formError}>El campo descripcion es requerido</span>}
                  <TextField fullWidth label="Categoría" variant="outlined" className={globalClases.mt10} {...register('categoria', { required: true })}/>
                  {errors.categoria?.type === 'required' && <span className={globalClases.formError}>El campo categoria es requerido</span>}
                  <TextField type="date" InputLabelProps={{ shrink: true, required: true }} {...register('fecha', { required: true })} fullWidth label="Fecha límite" variant="outlined" className={globalClases.mt10} />
                  {errors.fecha?.type === 'required' && <span className={globalClases.formError}>El campo fecha es requerido</span>}
                  <FormControl fullWidth className={globalClases.mt10}>
                    <InputLabel id="estado-label">Estado</InputLabel>
                    <Select
                      {...register('estado', { required: true })}                
                      labelId="estado-label"
                      id="estado"
                      value={estado}
                      label="Estado"
                      onChange={ (e) => setEstado(e.target.value)}                      
                    >
                      <MenuItem value={"Sin hacer"}>Sin hacer</MenuItem>
                      <MenuItem value={"Terminado"}>Terminado</MenuItem>
                      <MenuItem value={"En proceso"}>En proceso</MenuItem>
                    </Select>
                    {errors.estado?.type === 'required' && <span className={globalClases.formError}>El campo estado es requerido</span>}
                  </FormControl>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Button type="submit" fullWidth variant="contained" className={`${globalClases.mt10}`}>Crear</Button>              
                    </Grid>
                    <Grid item xs={6}>              
                      <Button fullWidth variant="outlined" className={`${globalClases.mt10}`} onClick={(e) => {handleOpenClose(e); reset();}}>Cancelar</Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Dialog>
        </Grid>
    </Grid>
  )
}
