import * as React from 'react';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/theme-github';

interface ResponseProps {
  getNewValue: string;
}

export const Response: React.FC<ResponseProps> = ({ getNewValue }) => {
  return (
    <>
      <div style={{ display: 'flex', height: '100%' }}>
        <AceEditor
          mode="text"
          theme="github"
          name="my-text-response"
          value={getNewValue}
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