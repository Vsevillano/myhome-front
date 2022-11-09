import { makeStyles } from "@mui/styles";


export const headerLayoutStyles = makeStyles(() => ({
    '& .MuiMenuItem-root' : {
      minHeight: '40px !important',
    },
    headerContainer: {
      height: '50px',
      zIndex: '99'
    },
    root: {      

    },
    noUnderline: {
      textDecoration: 'none'
    },
    submenu: {
      display: 'flex',
      flexDirection: 'column',
    }
}))