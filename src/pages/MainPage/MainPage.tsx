import * as React from 'react';
import { Doc } from './components/Doc';
import { Editor } from './components/Editor';
import { Headers } from './components/HeadersField';
import { Variables } from './components/VariablesField';
import { Response } from './components/ResponseField';
import { Container, Grid } from '@mui/material';

export const MainPage: React.FunctionComponent = () => {
  return (
    <>
      <h1>Main page</h1>
      <Container maxWidth="xl">
        <Grid container columnSpacing={2} sx={{ height: '90vh' }}>
          <Grid item xs={3} sx={{ background: 'lightGreen' }}>
            <Doc />
          </Grid>

          <Grid
            container
            item
            xs={9}
            direction="column"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid container item sx={{ height: '80vh' }}>
              <Grid item xs={6} sx={{ background: 'cyan' }}>
                <Editor />
              </Grid>
              <Grid item xs={6} sx={{ background: 'grey' }}>
                <Response />
              </Grid>
            </Grid>

            <Grid container item sx={{ height: '10vh', background: 'teal' }}>
              <Grid item xs={6}>
                <Headers />
              </Grid>
              <Grid item xs={6}>
                <Variables />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
