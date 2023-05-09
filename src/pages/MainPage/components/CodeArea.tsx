import { Grid } from '@mui/material';
import React from 'react';
import { EditorField } from './EditorField';
import { Response } from './ResponseField';

export const CodeArea: React.FunctionComponent = () => {
  return (
    <>
      <Grid container item sx={{ height: '70vh' }}>
        <Grid item md={6} xs={12}>
          <EditorField />
        </Grid>
        <Grid item md={6} xs={12} sx={{ background: 'grey' }}>
          <Response />
        </Grid>
      </Grid>
    </>
  );
};
