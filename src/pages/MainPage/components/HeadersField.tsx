import * as React from 'react';

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-solarized_dark';

export const Headers: React.FunctionComponent = () => {
  return (
    <>
      <div style={{ width: '100%' }}>
        <AceEditor
          mode="javascript"
          theme="solarized_dark"
          name="my-text-headers"
          value="Headers (optional)"
          width="100%"
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          editorProps={{ $blockScrolling: Infinity }}
          style={{ height: '100%' }}
          wrapEnabled={true}
          setOptions={{
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
      </div>
    </>
  );
};
