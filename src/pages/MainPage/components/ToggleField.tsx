import React, { useState } from 'react';
import Button from '@mui/material/ToggleButton';
import ButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box, FormControlLabel, Grid, Slide, Switch } from '@mui/material';
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

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <Grid item sx={{ width: '100%' }}>
        <Box sx={{ height: 180 }}>
          <Box>
            <FormControlLabel
              control={<Switch checked={checked} onChange={handleChange} />}
              label="Show"
            />
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
              <Grid container sx={{ height: '20vh', background: 'teal', flexWrap: 'nowrap' }}>
                <ButtonGroup
                  orientation="vertical"
                  color="standard"
                  exclusive
                  aria-label="Platform"
                >
                  <Button onClick={handleBtnClick} value="Var">
                    Variables
                  </Button>
                  <Button onClick={handleBtnClick} value="Head">
                    Headers
                  </Button>
                </ButtonGroup>

                <Grid container>{selectedComponent}</Grid>
              </Grid>
            </Slide>
          </Box>
        </Box>
      </Grid>
    </>
  );
}
