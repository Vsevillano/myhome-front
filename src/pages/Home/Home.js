import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTarea, getUserTareas, saveTarea } from '../../actions/tareas';
import { CustomLoader } from '../../components/atoms/CustomLoader/CustomLoader';
import { TareaCard } from '../../components/organisms/TareaCard/TareaCard';

import { globalStyles } from '../../styles/global.styles';

export const Home = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const { loading, tareas } = useSelector(state => state.userTareas);

  const [isAdmin, setIsAdmin] = useState(false)
  const globalClases = globalStyles();

  const dispatch = useDispatch();

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
      user: data.user
    }))    
  };

  useEffect(() => {
    if (currentUser?.roles.find(item => item === 'ROLE_ADMIN') === 'ROLE_ADMIN') {
      setIsAdmin(true)            
    }    
  }, [currentUser])
  
  useEffect(() => {    
    dispatch(getUserTareas());            
}, [dispatch])

  return (
    currentUser ? (
      isAdmin ? (
        <Grid container>
          <Grid item xs={12}>
            <Typography variant='h6' className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20} ${globalClases.mb10}`}>Contenido del Admin</Typography>        
          </Grid>
        </Grid>        
        ): (
          <Grid container>
            <Grid item xs={12}>              
              {loading ? <CustomLoader size='medium'/> :                 
                <>
                <Typography variant='h6' className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20} ${globalClases.mb10}`}>Mis tareas pendientes</Typography>        
                {tareas?.map((tarea) => (                           
                  <TareaCard key={tarea.id} tarea={tarea} handleDeleteTarea={handleDeleteTarea} handleSaveTarea={handleSaveTarea}/>
                ))}                                
                </>
              }

            </Grid>
          </Grid>          
        )
    ): (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h6' className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20} ${globalClases.mb10}`}>Contenido del usuario sin logear</Typography>        
        </Grid>
      </Grid>
    )
    
  )
}
