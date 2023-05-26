import * as React from 'react';

import { Button } from '@mui/material';
import AceEditor from 'react-ace';

/* import 'ace-builds/src-noconflict/mode-graphqlschema'; */

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../storage/store';
import { setEditorValue } from '../../../storage/EditorFieldSlice';
import { fetchDataFromApi } from '../../../utils/ApiRequest';

export const EditorField = () => {
  const editorValue = useSelector((state: RootState) => state.editor.value);
  const variablesValue = useSelector((state: RootState) => state.editor.variables);

  const dispatch = useDispatch();

  //add editor value in Store
  const handleEditorChange = (newValue: string) => {
    dispatch(setEditorValue(newValue));
  };

  // get API request
  const handleGoButtonClick = async () => {
    const query = editorValue;

    //catch parse error when user input is invalid variables value
    let variables;
    try {
      variables = JSON.parse(variablesValue);
    } catch (error) {
      variables = {};
    }
    await fetchDataFromApi(query, variables, dispatch);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleGoButtonClick}
        sx={{ position: 'absolute', left: '56%', top: '1.3rem' }}
      >
        Go
      </Button>
      <div style={{ display: 'flex', height: '100%' }}>
        <AceEditor
          mode="javascript"
          theme="solarized_dark"
          value={editorValue}
          name="my-text-editor"
          onChange={handleEditorChange}
          width="100%"
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          editorProps={{ $blockScrolling: Infinity }}
          style={{ height: '100%' }}
          wrapEnabled={true}
          setOptions={{
            /*   enableBasicAutocompletion: false,
            enableLiveAutocompletion: true, */
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
      </div>
    </>
  );
};
