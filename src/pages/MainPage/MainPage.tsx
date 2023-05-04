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
      <Container maxWidth={false}>
        <Grid container sx={{ height: '90vh' }}>
          <Grid item md={2} xs={12} sx={{ background: 'lightGreen' }}>
            <Doc />
          </Grid>

          <Grid
            container
            item
            md={10}
            xs={12}
            direction="column"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid container item sx={{ height: '70vh' }}>
              <Grid item md={6} xs={12} sx={{ background: 'cyan' }}>
                <Editor />
              </Grid>
              <Grid item md={6} xs={12} sx={{ background: 'grey' }}>
                <Response />
              </Grid>
            </Grid>

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
