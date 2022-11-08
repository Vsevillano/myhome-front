import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { CustomLoader } from '../../components/atoms/CustomLoader/CustomLoader';
import { globalStyles } from '../../styles/global.styles';

import { getTareaById, saveTarea } from '../../actions/tareas';

export const EditTarea = () => {
  const globalClases = globalStyles();
  
  const params = useParams();
  const {id} = params;  
  const { user: currentUser } = useSelector((state) => state.auth);  
  const { loading, tarea } = useSelector(state => state.getTarea);
  const { loading: loadingDelete } = useSelector(state => state.deleteTarea);
  const { loading: loadingSave } = useSelector(state => state.saveTarea);
  
  const [estado, setEstado] = useState('');  

  const { register, formState : { errors }, handleSubmit, reset } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {        
    dispatch(getTareaById(id));  
  }, [dispatch, id])

  useEffect(() => {        
    if (!tarea) {
      dispatch(getTareaById(id));             
    } 
    reset({
      nombre: tarea?.nombre,
      descripcion: tarea?.descripcion,
      categoria: tarea?.categoria,
      fecha: tarea?.fecha,      
    })     

  }, [dispatch, id, tarea, reset])

  const handleSaveTarea = (data) => {
    dispatch(saveTarea({
      id: id,
      nombre: data.nombre,
      categoria: data.categoria,
      descripcion: data.descripcion,
      fecha: data.fecha,
      estado: data.estado,
    }))
    navigate('/tareas')
  };

  if (!currentUser) {
    return <Navigate to="/login" />;
  }  

  return (
    <Grid container> 
      {loading || loadingDelete || loadingSave ? <CustomLoader size='medium'/> : (
      
        <Grid item xs={12}>
          <form onSubmit={handleSubmit(handleSaveTarea)}>
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
                value={estado || tarea?.estado}
                label="Estado"
                onChange={ (e) => setEstado(e.target.value)}                      
              >
                <MenuItem value={"Sin hacer"} selected={tarea?.estado === "Sin hacer"}>Sin hacer</MenuItem>
                <MenuItem value={"Terminado"} selected={tarea?.estado === "Terminado"}>Terminado</MenuItem>
                <MenuItem value={"En proceso"} selected={tarea?.estado === "En proceso"} >En proceso</MenuItem>                
              </Select>
              {errors.estado?.type === 'required' && <span className={globalClases.formError}>El campo estado es requerido</span>}
            </FormControl>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button type="submit" fullWidth variant="contained" className={`${globalClases.mt10}`}>Guardar</Button>              
              </Grid>
              <Grid item xs={6}>              
                <Button fullWidth variant="outlined" className={`${globalClases.mt10}`} onClick={(e) => {navigate('/tareas');}}>Cancelar</Button>
              </Grid>
            </Grid>
          </form>
        </Grid>        
      )}    
    </Grid>
  )
}
