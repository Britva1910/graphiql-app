import React, { useRef, useState } from 'react';
import Button from '@mui/material/ToggleButton';
import ButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box, FormControlLabel, Grid, Slide, Switch } from '@mui/material';

import { Headers } from './HeadersField';
import { Variables } from './VariablesField';

export default function ToggleButton() {
  const [selectedComponent, setSelectedComponent] = useState(<Variables />);
  const clickedBtn = useRef<string | null>('Var');

  const handleBtnClick = (e: React.MouseEvent<HTMLElement>) => {
    clickedBtn.current = e.currentTarget.getAttribute('value');
    if (clickedBtn.current == 'Var') {
      setSelectedComponent(<Variables />);
    } else {
      setSelectedComponent(<Headers />);
    }
  };

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const btnStyle = (value: string) => {
    return {
      color: clickedBtn.current === value ? '#00bfe6' : '#d0d0dc',
      ':hover': { color: '#00bfe6' },
      borderBottom: clickedBtn.current === value ? '1px solid #00bfe6' : '1px solid #41425d',
    };
  };

  return (
    <Grid item sx={{ width: '100%' }}>
      <Box>
        <Box>
          <FormControlLabel
            sx={{ marginLeft: '.5rem', color: '#d0d0dc' }}
            control={<Switch checked={checked} onChange={handleChange} />}
            label="Show variables editor"
          />
          <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <Grid container sx={{ height: '20vh', background: '#1a1b27', flexWrap: 'nowrap' }}>
              <ButtonGroup orientation="vertical" color="standard" exclusive aria-label="Platform">
                <Button onClick={handleBtnClick} value="Var" sx={btnStyle('Var')}>
                  Variables
                </Button>
                <Button onClick={handleBtnClick} value="Head" sx={btnStyle('Head')}>
                  Headers
                </Button>
              </ButtonGroup>

              <Grid container>{selectedComponent}</Grid>
            </Grid>
          </Slide>
        </Box>
      </Box>
    </Grid>
  );
}
