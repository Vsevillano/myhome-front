// import { createBreakpoints } from "@mui/system";
import { createTheme } from '@mui/material/styles';

// const breakpoints = createBreakpoints({});

export const myHomeTheme = createTheme({
    
    typography: {
        fontFamily: "'Nunito', sans-serif"
    },
    h1: {
        fontSize: 30,
    },
    h2: {
        fontSize: 20,
    },
    h3: {
        fontSize: 16,
    },
    h4: {
        fontSize: 14,
    },
    body2: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    body1: {
        fontSize: 14,      
    },
    caption: {
        fontSize: 11,      
    },
    palette: {

    },
    overides: {
    
    }
})