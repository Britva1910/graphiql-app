import React, { Suspense, lazy } from 'react';
import { Container, Grid } from '@mui/material';

import { CodeArea } from './components/CodeArea';
import ToggleField from './components/ToggleField';

const ApiSchema = lazy(() => import('./components/ApiSchema/ApiSchema'));

import './MainPage.scss';

export const MainPage: React.FunctionComponent = () => {
  return (
    <Container maxWidth={false}>
      <Grid container>
        <Grid id="ApiSchema" item md={3} xs={12}>
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
