import { makeStyles } from "@mui/styles";

export const signinStyles = makeStyles(() => ({
    root: {
        position: 'absolute',
        left: '50%',
        top: '50%',        
        transform: 'translate(-50%, -50%)',    
        '& form' : {  
            borderRadius: '30px',  
            padding: '15px',
            width: '500px', 
            border: '1px solid whitesmoke',
            boxShadow: '1px 3px 3px grey',
            backgroundColor: '#e2d1d154'
        },
        '& .MuiOutlinedInput-root': {
            backgroundColor: '#FAFAFA',                 
        }
    },
    mt15: {
        marginTop: '15px !important',
    }
}))