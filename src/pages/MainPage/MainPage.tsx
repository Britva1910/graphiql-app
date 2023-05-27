import * as React from 'react';

import { CodeArea } from './components/CodeArea';
import ToggleField from './components/ToggleField';

import { Suspense, lazy } from 'react';

const ApiSchema = lazy(() => import('./components/ApiSchema'));

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
            sx={{ background: 'white', overflow: 'scroll', height: '80vh', padding: '10px' }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <ApiSchema />
            </Suspense>
          </Grid>

          <Grid
            id="CodeArea"
            container
            item
            md={9}
            xs={12}
            sx={{ height: '80vh' }}
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
