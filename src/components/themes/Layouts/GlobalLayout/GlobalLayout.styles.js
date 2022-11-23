import { makeStyles } from "@mui/styles";
import wave from '../../../../assets/wave_thin.svg';
export const globalLayoutStyles = makeStyles((theme) => ({
    root: {  
      display: 'flex',
      justifyContent: 'center',    
      background: 'linear-gradient(174deg, rgba(106,172,228,1) 0%, rgba(255,255,255,1) 65%)',
      minHeight: 'calc(100vh - 60px)',
      padding: 15,
      paddingTop: 45,
      marginTop: '-35px !important',
      [theme.breakpoints.up('sm')]: {            
        marginTop: '-60px !important',
        paddingTop: 60,
      },
      [theme.breakpoints.up('md')]: {            
        marginTop: '-100px !important',
        paddingTop: 100,
      }, 
      [theme.breakpoints.up('md')]: {            
        marginTop: '-100px !important',
        paddingTop: 100,
      },       
      [theme.breakpoints.up('lg')]: {            
        marginTop: '-120px !important',
        paddingTop: 120,
      }, 
           
    },
    wave: {
      backgroundImage: `url("${wave}")` ,
      backgroundColor: "transparent !important",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundPositionY: '0px',
      height: '35px',
      zIndex: 1,
      [theme.breakpoints.up('sm')]: {            
        height: '60px',            
      },
      [theme.breakpoints.up('md')]: {            
        height: '100px',    
        backgroundPositionY: '0px',
      },
      [theme.breakpoints.up('lg')]: {            
        height: '120px',    
        backgroundPositionY: '0px',
      },
    }
}))