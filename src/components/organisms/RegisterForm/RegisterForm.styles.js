import { makeStyles } from "@mui/styles";

export const registerFormStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        backgroundColor: '#FAFAFA',
        margin: '20px !important',
        padding: 20,
        borderRadius: 8,
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        [theme.breakpoints.up('md')]: {            
            maxWidth: '400px !important',
            marginTop: '100px !important',               
        },     
    },
}))
