import * as React from 'react';

import { Button } from '@mui/material';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/theme-github';

interface EditorProps {
  setResponseText: (newRequestBody: string) => void;
  fetchDataFromApi: (
    query: string,
    variables: Record<string, number>,
    setResponseText: (newResponseText: string) => void
  ) => void;
}

export const EditorField: React.FC<EditorProps> = ({ setResponseText, fetchDataFromApi }) => {
  const [requestText, setRequestText] = React.useState('');
  const [variablesText /* setVariablesText */] = React.useState({});

  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          fetchDataFromApi(requestText, variablesText, setResponseText);
        }}
        sx={{ position: 'absolute', left: '56%', top: '110px' }}
      >
        Go
      </Button>
      <div style={{ display: 'flex', height: '100%' }}>
        <AceEditor
          mode="text"
          theme="github"
          name="my-text-editor"
          onChange={setRequestText}
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
