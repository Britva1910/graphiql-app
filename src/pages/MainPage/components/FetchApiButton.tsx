import React from 'react';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../storage/store';
import { fetchDataFromApi } from '../../../utils/ApiRequest';

const PlayIcon = (
  <svg style={{ height: '1.7rem' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path
      fill="currentColor"
      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
    />
  </svg>
);

const FetchApiButton: React.FC = () => {
  const query = useSelector((state: RootState) => state.editor.value);
  const variablesInput = useSelector((state: RootState) => state.editor.variables);

  const dispatch = useDispatch();

  // get API request
  const handleClick = async () => {
    //catch parse error when user input is invalid variables value
    let variables;
    try {
      variables = JSON.parse(variablesInput);
    } catch (error) {
      variables = {};
    }
    await fetchDataFromApi(query, variables, dispatch);
  };

  return (
    <Button
      variant="contained"
      onClick={handleClick}
      sx={{
        position: 'absolute',
        bottom: '.5rem',
        right: '1rem',
        zIndex: 500,
        background: '#00bfe6',
        padding: '.5rem',
        paddingInline: '.8rem',
        minWidth: 0,
        color: '#16161f',
        ':hover': { background: '#00a2c2' },
      }}
    >
      {PlayIcon}
    </Button>
  );
};

export default FetchApiButton;
