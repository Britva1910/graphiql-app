import * as React from 'react';

import AceEditor from 'react-ace';

export const Headers: React.FunctionComponent = () => {
  return (
    <>
      <div style={{ width: '100%' }}>
        <AceEditor
          mode="text"
          theme="cobalt"
          name="my-text-response"
          value="Headers"
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
