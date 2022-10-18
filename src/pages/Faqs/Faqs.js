import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import { globalStyles } from '../../styles/global.styles';

export const Faqs = () => {
    const globalClases = globalStyles();
  return (
    <Grid container>
        <Grid item xs={12}>
            <Typography variant='h6' textAlign='center' className={globalClases.mb10}>Preguntas frecuentes</Typography>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>¿Como puedo registrarme?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    El registro se puede hacer a través del formulario creado para ello. 
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>¿Como puedo registrarme?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    El registro se puede hacer a través del formulario creado para ello. 
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>¿Como puedo registrarme?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    El registro se puede hacer a través del formulario creado para ello. 
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>¿Como puedo registrarme?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    El registro se puede hacer a través del formulario creado para ello. 
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>¿Como puedo registrarme?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    El registro se puede hacer a través del formulario creado para ello. 
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>¿Como puedo registrarme?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    El registro se puede hacer a través del formulario creado para ello. 
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>¿Como puedo registrarme?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    El registro se puede hacer a través del formulario creado para ello. 
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>¿Como puedo registrarme?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    El registro se puede hacer a través del formulario creado para ello. 
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>¿Como puedo registrarme?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    El registro se puede hacer a través del formulario creado para ello. 
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>¿Como puedo registrarme?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    El registro se puede hacer a través del formulario creado para ello. 
                </Typography>
                </AccordionDetails>
            </Accordion>
 
        </Grid>
    </Grid>
  )
}
