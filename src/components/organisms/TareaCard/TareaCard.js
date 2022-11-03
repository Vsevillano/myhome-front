import { Checkbox, FormControlLabel, FormGroup, Grid, Paper } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { globalStyles } from '../../../styles/global.styles';
import { tareaCardStyles } from './TareaCard.styles';
import { useNavigate } from 'react-router-dom';


export const TareaCard = ({tarea, handleDeleteTarea}) => {
    const globalClases = globalStyles();    
    const classes = tareaCardStyles();
    const navigate = useNavigate();

    return (
    <Paper key={tarea.id} elevation={1} className={`${globalClases.px20} ${globalClases.mt10}`}>
      <FormGroup>                  
        <Grid container>
          <Grid item xs={10}>
            <FormControlLabel control={<Checkbox/>} label={tarea.nombre} className={tarea.estado === 'Terminado' ? classes.terminado : null} />
          </Grid>                    
          <Grid item xs={2} className={`${globalClases.px20} ${globalClases.mt10} ${classes.actions}`}>
            <EditIcon className={globalClases.mx10} onClick={ () => { navigate(tarea.id) }}/>
            <DeleteIcon onClick={() => handleDeleteTarea(tarea.id)}/>
          </Grid>                  
          <Grid item xs={6} className={`${classes.fechaTarea} ${globalClases.mb10}`}> Fecha límite: {tarea.fecha}</Grid>                                        
        </Grid>
      </FormGroup>
    </Paper>
    )
}
