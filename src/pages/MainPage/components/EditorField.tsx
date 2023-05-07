import * as React from 'react';

import { Button } from '@mui/material';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/theme-github';

interface EditorProps {
  setNewValue: (newValue: string) => void;
}

export const EditorField: React.FC<EditorProps> = ({ setNewValue }) => {
  const [val, setVal] = React.useState('');

  const handleSave = () => {
    setNewValue(val);
    console.log('Editor value:', val);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleSave}
        sx={{ position: 'absolute', zIndex: '10', left: '56%', top: '40px' }}
      >
        Save
      </Button>
      <div style={{ display: 'flex', height: '100%' }}>
        <AceEditor
          mode="text"
          theme="github"
          name="my-text-editor"
          onChange={setVal}
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
