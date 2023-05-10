import * as React from 'react';

import { Button } from '@mui/material';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/theme-github';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { setEditorValue } from './EditorFieldSlice';
import { fetchDataFromApi } from '../../../utils/ApiRequest';
import { setResponseValue } from './ResponseFieldSlice';

export const EditorField = () => {
  const editorValue = useSelector((state: RootState) => state.editor.value);
  const variablesValue = useSelector((state: RootState) => state.variables.value);

  const dispatch = useDispatch();

  //add editor value in Store
  const handleEditorChange = (newValue: string) => {
    dispatch(setEditorValue(newValue));
  };

  // get API data and save in Store
  const handleGoButtonClick = async () => {
    const responseText = (await fetchDataFromApi(editorValue, variablesValue)) as string;
    dispatch(setResponseValue(responseText));
    /*  dispatch(setVariablesValue(variablesValue)); */
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleGoButtonClick}
        sx={{ position: 'absolute', left: '56%', top: '110px' }}
      >
        Go
      </Button>
      <div style={{ display: 'flex', height: '100%' }}>
        <AceEditor
          mode="text"
          theme="github"
          value={editorValue}
          name="my-text-editor"
          onChange={handleEditorChange}
          width="100%"
          fontSize={16}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          editorProps={{ $blockScrolling: Infinity }}
          style={{ height: '100%' }}
        />
      </div>
    </>
  );
};
