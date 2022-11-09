import { AppBar, Button,  Dialog, FormControl, Grid, IconButton,  InputLabel,  MenuItem,  Select,  TextField,  Toolbar, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { globalStyles } from '../../styles/global.styles';
import nutritionImage from '../../assets/Nutrition-plan.svg'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

import { createTarea, deleteTarea, getTareas, saveTarea } from '../../actions/tareas';
import { CustomLoader } from '../../components/atoms/CustomLoader/CustomLoader';
import { useForm } from 'react-hook-form';
import { TareaCard } from '../../components/organisms/TareaCard/TareaCard';
import { tareasStyles } from './Tareas.styles';
import { useTheme } from '@mui/styles';


export const Tareas = () => {
  const classes = tareasStyles();
  const globalClases = globalStyles();  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);  


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

  const handleSaveTarea = (data, id) => {    
    dispatch(saveTarea({
      id: id,
      nombre: data.nombre,
      categoria: data.categoria,
      descripcion: data.descripcion,
      fecha: data.fecha,
      estado: data.estado,
    }))    
  };

  useEffect(() => {    
      dispatch(getTareas());            
  }, [dispatch])

  useEffect(() => {
    if (loadingCreateTarea || loadingDeleteTarea || loadingSaveTarea) {  
      dispatch(getTareas());            
    }
  }, [dispatch, loadingCreateTarea, loadingDeleteTarea, loadingSaveTarea])

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <Grid container spacing={isMobile ? 2 : 10} className={classes.tareasContainer}>      
        {loading || loadingCreateTarea || loadingDeleteTarea? <CustomLoader size='medium'/> : (
          !tareas ? 
          <>
          <Grid item xs={12} md={6}>
            <img src={nutritionImage} alt='Nutrition' className={`${globalClases.maxWidth100} ${globalClases.mt50}`}/>          
          </Grid>
          <Grid item xs={12} md={6} alignItems='center' justifyContent='center' display='flex' flexDirection='column'>          
            <Typography className={`${globalClases.mb10} ${globalClases.fw700} ${globalClases.textCenter} ${globalClases.mt10}`}>"Nada que hacer..." </Typography>                
            <Typography className={`${globalClases.mb10} ${globalClases.textCenter} ${globalClases.mt10}`}> Empieza a crear tareas pulsando en el botón "Crear tarea" </Typography>                
          </Grid>
          </>
          :
          ( 
          <>
          <Grid item xs={12} md={6}>
            <Typography variant='h6' className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20}`}>Tareas pendientes</Typography>
            {tareas?.map((tarea) => (         
              tarea.estado !== 'Terminado' &&   
              <TareaCard key={tarea.id} tarea={tarea} handleDeleteTarea={handleDeleteTarea} handleSaveTarea={handleSaveTarea}/>
            ))}
          </Grid>        
          
          <Grid item xs={12} md={6}>
            <Typography variant='h6' className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20}`}>Tareas finalizadas</Typography>
            {tareas?.map((tarea) => (         
              tarea.estado === 'Terminado' &&   
              <TareaCard key={tarea.id} tarea={tarea} handleDeleteTarea={handleDeleteTarea} handleSaveTarea={handleSaveTarea}/>
            ))}
          </Grid>
          </>
          )                              
        )}
        <Grid item xs={12} textAlign='right' className={globalClases.bottomButton}>
          <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpenClose}>Crear tarea</Button>
          <Dialog fullScreen={isMobile} open={open} onClose={handleOpenClose} >            
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
                  <Grid container spacing={2} className={globalClases.mb20}>
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
