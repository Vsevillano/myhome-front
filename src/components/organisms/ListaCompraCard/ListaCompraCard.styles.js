import { makeStyles } from "@mui/styles";

export const listaCompraCardStyles = makeStyles(() => ({
    root: {   
        '& .MuiCardHeader-title' : {
            fontSize: '20px !important',
        },
        '& .MuiCardHeader-subheader' : {
            fontSize: '12px'
        }
    }
}))