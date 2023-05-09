import * as React from 'react';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/theme-github';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

export const Response = () => {
  const responseValue = useSelector((state: RootState) => state.response.value);
  console.log('responseValue :>> ', responseValue);
  return (
    <>
      <div style={{ display: 'flex', height: '100%' }}>
        <AceEditor
          mode="text"
          theme="github"
          name="my-text-response"
          value={responseValue}
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
