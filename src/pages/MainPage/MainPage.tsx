import * as React from 'react';

import { Doc } from './components/Doc';
import { CodeArea } from './components/CodeArea';
import ToggleField from './components/ToggleField';

import ApiSchema from '../../utils/ApiSchema';

import { Container, Grid } from '@mui/material';

export const MainPage: React.FunctionComponent = () => {
  return (
    <>
      <h1>Main page</h1>
      <Container maxWidth={false}>
        <Grid container>
          <Grid
            item
            md={2}
            xs={12}
            sx={{ background: 'lightGreen', overflow: 'scroll', height: '80vh' }}
          >
            <Doc />
            <ApiSchema />
          </Grid>

          <Grid
            id="CodeArea"
            container
            item
            md={10}
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
    </>
  );
};
