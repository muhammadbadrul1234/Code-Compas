import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionDash() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>C Programming</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Course taken by "Dipta Chandra Paul"
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Data Structure & Algorithm</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Course taken by "Prithwiraj Bhattacharjee"
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Java</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Course taken by "Md. Jehadul Islam Mony"
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Machine Learning</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Course taken by "Shafkat Kibria"
          </Typography>
        </AccordionDetails>
      </Accordion>


    </div>
  );
}