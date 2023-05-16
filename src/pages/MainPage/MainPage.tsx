import * as React from 'react';

import { CodeArea } from './components/CodeArea';
import ToggleField from './components/ToggleField';

import ApiSchema from './components/ApiSchema';

import { Container, Grid } from '@mui/material';

export const MainPage: React.FunctionComponent = () => {
  return (
    <div style={{ position: 'relative' }}>
      <h1>Main page</h1>
      <Container maxWidth={false}>
        <Grid container>
          <Grid
            item
            md={3}
            xs={12}
            sx={{ background: 'white', overflow: 'scroll', height: '80vh' }}
          >
            <ApiSchema />
          </Grid>

          <Grid
            id="CodeArea"
            container
            item
            md={9}
            xs={12}
            direction="column"
            justifyContent="space-around"
            alignItems="center"
          >
            <CodeArea />
            <ToggleField />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
