import { Card, CardHeader, Grid, IconButton, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { globalStyles } from '../../../styles/global.styles';
import { useNavigate } from 'react-router-dom';
import { listaCompraCardStyles } from './ListaCompraCard.styles';


export const ListaCompraCard = ({lista, handleDeleteLista}) => {
    const globalClases = globalStyles();    
    const classes = listaCompraCardStyles();
    
    const [anchorEl, setAnchorEl] = useState(null);    

    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();
    
    return (
        <Grid key={lista.id} item xs={12} className={globalClases.mt10}>
            <Card>
                <CardHeader        
                    action={
                    <IconButton aria-label="settings" onClick={(e) => handleOpen(e)}>
                        <MoreVertIcon />
                        <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                        >
                        <MenuItem onClick={ (e) => {
                            handleClose();
                            navigate('/lista/' + lista.id)
                            }
                        } disableRipple>
                            <EditIcon className={`${globalClases.mr10} ${globalClases.fs20}`} />
                            Editar
                        </MenuItem>
                        <MenuItem onClick={ (e) => {
                            handleClose();
                            handleDeleteLista(e, lista.id);                            
                            }
                        } disableRipple>
                            <DeleteIcon className={`${globalClases.mr10} ${globalClases.fs20}`} />
                            Borrar
                        </MenuItem>
                        </Menu>
                    </IconButton>
                    }
                    title={lista.nombre}        
                    subheader={"Elementos en la lista: " + lista.productos.length}
                    className={classes.root}
                />                    
            </Card>
        </Grid>
    )
}
