import { makeStyles } from "@mui/styles";

export const tareasStyles = makeStyles((theme) => ({
    root: {   
        '& .MuiCardHeader-title' : {
            fontSize: '20px !important',
        },
        '& .MuiCardHeader-subheader' : {
            fontSize: '12px'
        }
    },
    fechaTarea: {
        fontSize: 10
    },
    terminado: {
        textDecoration: 'line-through'
    },
    actions: {
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'flex-end',
        paddingRight: 0,
    }
}))