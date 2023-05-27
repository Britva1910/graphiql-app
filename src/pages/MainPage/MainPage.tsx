import * as React from 'react';

import { CodeArea } from './components/CodeArea';
import ToggleField from './components/ToggleField';

/* import ApiSchema from './components/ApiSchema'; */
import { Suspense, lazy } from 'react';

const ApiSchema = lazy(() => import('./components/ApiSchema'));

import { Container, Grid } from '@mui/material';

export const MainPage: React.FunctionComponent = () => {
  return (
    <Container maxWidth={false}>
      <Grid container>
        <Grid item md={3} xs={12} sx={{ background: 'white', overflow: 'scroll', height: '80vh' }}>
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
          direction="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <CodeArea />
          <ToggleField />
        </Grid>
      </Grid>
    </Container>
  );
};
