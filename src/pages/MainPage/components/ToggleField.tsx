import * as React from 'react';
import Button from '@mui/material/ToggleButton';
import ButtonGroup from '@mui/material/ToggleButtonGroup';
import { Grid } from '@mui/material';
import { Headers } from './HeadersField';
import { Variables } from './VariablesField';

export default function ColorToggleButton() {
  const [selectedButton, setSelectedButton] = React.useState('Variables');

  const handleButtonChange = (event: React.MouseEvent, newSelectedButton: string) => {
    setSelectedButton(newSelectedButton);
  };

  return (
    <>
      <Grid
        container
        sx={{ height: '20vh', background: 'teal', flexWrap: 'nowrap', width: '100%' }}
      >
        <ButtonGroup
          orientation="vertical"
          color="standard"
          value={selectedButton}
          exclusive
          onChange={handleButtonChange}
          aria-label="Platform"
        >
          <Button value="Variables">Variables</Button>
          <Button value="Headers">Headers</Button>
        </ButtonGroup>

        <Grid container>
          {selectedButton === 'Variables' && <Variables />}
          {selectedButton === 'Headers' && <Headers />}
        </Grid>
      </Grid>
    </>
  );
}
