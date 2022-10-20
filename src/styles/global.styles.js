import { makeStyles } from "@mui/styles";

export const globalStyles = makeStyles(theme => ({    
    p0: {
        padding: '0 !important'
    },
    pt20: {
        paddingTop: 20,
    },
    pb20: {
        paddingBottom: 20,
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
    ml10: {
        marginLeft: '10px !important'
    },
    mr10: {
        marginRight: '10px !important'
    },
    ml35negative: {
        marginLeft: '-35px !important'
    },
    textCenter: {
        textAlign: 'center',
    },
    maxWidth100: {
        maxWidth: '100%',
    },
    maxWidth200px: {
        maxWidth: '200px',
    },
    colorWhite: {
        color: '#FAFAFA'
    },
    fw700: {
        fontWeight: '700 !important',
    },
    fs11: {
        fontSize: '11px !important',
    },
    fs20: {
        fontSize: '20px !important',
    },
    bottomButton: {
        position: 'absolute',
        bottom: '32px',
        right: 20,
    }
}))