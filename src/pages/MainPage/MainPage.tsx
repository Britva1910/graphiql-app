import * as React from 'react';
import { Doc } from './components/Doc';
import { Headers } from './components/HeadersField';
import { Variables } from './components/VariablesField';

import { Container, Grid } from '@mui/material';
import { CodeArea } from './components/CodeArea';
import ApiSchema from '../../components/ApiSchema';

export const MainPage: React.FunctionComponent = () => {
  return (
    <>
      <h1>Main page</h1>
      <Container maxWidth={false}>
        <Grid container sx={{ height: '90vh' }}>
          <Grid item md={2} xs={12} sx={{ background: 'lightGreen', overflow: 'scroll' }}>
            <Doc />
            <ApiSchema />
          </Grid>

          <Grid
            id="TextArea"
            container
            item
            md={10}
            xs={12}
            direction="column"
            justifyContent="space-around"
            alignItems="center"
          >
            <CodeArea />

            <Grid container sx={{ height: '20vh', background: 'teal' }}>
              <Headers />
              <Variables />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
