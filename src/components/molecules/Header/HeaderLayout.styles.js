import { makeStyles } from "@mui/styles";

export const headerLayoutStyles = makeStyles(() => ({
    '& .MuiMenuItem-root' : {
      minHeight: '40px !important',
    },
    root: {
      height: '60px'
    },
    noUnderline: {
      textDecoration: 'none'
    },
    submenu: {
      display: 'flex',
      flexDirection: 'column',
    }
}))