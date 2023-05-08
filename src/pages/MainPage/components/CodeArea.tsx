import { Grid } from '@mui/material';
import React from 'react';
import { EditorField } from './EditorField';
import { Response } from './ResponseField';
import { fetchDataFromApi } from '../../../utils/ApiRequest';

export const CodeArea: React.FunctionComponent = () => {
  const [responseText, setResponseText] = React.useState('');

  return (
    <>
      <Grid container item sx={{ height: '70vh' }}>
        <Grid item md={6} xs={12}>
          <EditorField setResponseText={setResponseText} fetchDataFromApi={fetchDataFromApi} />
        </Grid>
        <Grid item md={6} xs={12} sx={{ background: 'grey' }}>
          <Response responseText={responseText} />
        </Grid>
      </Grid>
    </>
  );
};
