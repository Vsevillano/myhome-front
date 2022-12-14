import { makeStyles } from "@mui/styles";

export const globalStyles = makeStyles(theme => ({    
    p0: {
        padding: '0 !important'
    },
    pl20: {
        paddingLeft: 20,
    },
    pt20: {
        paddingTop: 20,
    },
    pt10: {
        paddingTop: 10,
    },
    pb20: {
        paddingBottom: 20,
    },
    pb10: {
        paddingBottom: 10,
    },
    px10 : {
        paddingLeft: 10,
        paddingRight: 10,
    },
    px20 : {
        paddingLeft: 20,
        paddingRight: 20,
    },
    m0: {
        margin: '0 !important'
    },
    m20: {
        margin: '20px !important'
    },
    mt5: {
        marginTop: '5px !important',
    },
    mt10: {
        marginTop: '10px !important',
    },
    mt50: {
        marginTop: '50px !important',
    },
    mt100: {
        marginTop: '100px !important',
    },
    mb10: {
        marginBottom: '10px !important',
    },
    mb20: {
        marginBottom: '20px !important',
    },
    ml10: {
        marginLeft: '10px !important'
    },
    mr10: {
        marginRight: '10px !important'
    },
    ml35negative: {
        marginLeft: '-35px !important'
    },
    mx10: {
        marginLeft: '10px !important',
        marginRight: '10px !important',
    },
    textCenter: {
        textAlign: 'center',
    },
    textRight: {
        textAlign: 'right',
    },
    maxWidth100: {
        maxWidth: '100%',
    },
    maxWidth60px: {
        maxWidth: '60px',
    },
    maxWidth200px: {
        maxWidth: '200px',
    },
    maxWidth500px: {
        maxWidth: '500px',
    },
    w100: {
        width: '100%',
    },
    colorWhite: {
        color: '#FAFAFA'
    },
    bgColorBlue: {
        backgroundColor: '#1976d2 !important'
    },
    inputWhite: {        
        '& .MuiInputBase-colorPrimary': {
            backgroundColor: '#ffffff !important',
            borderRadius: 4,
        }
    },
    textShadowBlack: {
        textShadow: '2px 2px 2px rgba(0,0,0,0.33)',
    },
    fw700: {
        fontWeight: '700 !important',
    },
    fs11: {
        fontSize: '11px !important',
    },
    fs16: {
        fontSize: '16px !important',
    },
    fs20: {
        fontSize: '20px !important',
    },
    bottomButton: {
        position: 'absolute',
        bottom: '32px',
        right: 20,
    },
    formError: {
        fontSize: 10,
        color: '#FF0000'
    },
    container: {
        display: 'flex',
        
        paddingTop: '20px',
        paddingLeft: '100px !important',
        paddingRight: '100px !important',
        
        [theme.breakpoints.up('md')]: {            
            paddingLeft: 24,
            paddingRight: 24,               
        }, 
    }
    
}))