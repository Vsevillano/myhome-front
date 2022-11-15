import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTarea, getUserTareas, saveTarea } from '../../actions/tareas';
import { getUsers } from '../../actions/users';
import { CustomLoader } from '../../components/atoms/CustomLoader/CustomLoader';
import { TareaCard } from '../../components/organisms/TareaCard/TareaCard';

import { globalStyles } from '../../styles/global.styles';

export const Home = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const { loading, tareas } = useSelector(state => state.userTareas);
  const { loading: loadingGetUsers, users } = useSelector(state => state.getUsers);

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
    dispatch(getUsers());            
    dispatch(getUserTareas());            
  }, [dispatch])

  return (
    loadingGetUsers || loading ? <CustomLoader size='medium'/> :
    currentUser ? (
      isAdmin ? (
        <Grid container>
          <Grid item xs={12} md={5}>
            <Typography variant='h6' className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20} ${globalClases.mb10}`}>Contenido del Admin</Typography>        
          </Grid>
        </Grid>        
        ): (
          <Grid container>
            <Grid item xs={4}>              
              {loading ? <CustomLoader size='medium'/> :                 
                <>
                <Typography variant='h6' className={`${globalClases.colorWhite} ${globalClases.textShadowBlack} ${globalClases.fw700} ${globalClases.fs20} ${globalClases.mb10}`}>Mis tareas pendientes</Typography>        
                {tareas ? 
                  tareas?.map((tarea) => (                           
                    <TareaCard key={tarea.id} tarea={tarea} handleDeleteTarea={handleDeleteTarea} handleSaveTarea={handleSaveTarea} users={users}/>
                  ))
                  :              
                  <Typography variant='p' className={`${globalClases.fw700}`}>¡Enhorabuena! No tienes tareas pendientes</Typography>        
                }
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
