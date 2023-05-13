import React, { useState } from 'react';
import Button from '@mui/material/ToggleButton';
import ButtonGroup from '@mui/material/ToggleButtonGroup';
import { Grid } from '@mui/material';
import { Headers } from './HeadersField';
import { Variables } from './VariablesField';

export default function ToggleButton() {
  const [selectedComponent, setSelectedComponent] = useState(<Variables />);

  const handleBtnClick = (e: React.MouseEvent<HTMLElement>) => {
    const clickedBtn = e.currentTarget.getAttribute('value');
    if (clickedBtn == 'Var') {
      setSelectedComponent(<Variables />);
    } else {
      setSelectedComponent(<Headers />);
    }
  };

  return (
    <>
      <Grid
        container
        sx={{ height: '20vh', background: 'teal', flexWrap: 'nowrap', width: '100%' }}
      >
        <ButtonGroup orientation="vertical" color="standard" exclusive aria-label="Platform">
          <Button onClick={handleBtnClick} value="Var">
            Variables
          </Button>
          <Button onClick={handleBtnClick} value="Head">
            Headers
          </Button>
        </ButtonGroup>

        <Grid container>{selectedComponent}</Grid>
      </Grid>
    </>
  );
}
