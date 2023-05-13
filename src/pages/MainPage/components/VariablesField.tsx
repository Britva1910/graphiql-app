import * as React from 'react';
import { useDispatch } from 'react-redux';

import AceEditor from 'react-ace';
import { setVariablesValue } from './EditorFieldSlice';

export const Variables: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const handleVariablesChange = async (value: string) => {
    dispatch(setVariablesValue(value));
  };

  return (
    <>
      <div style={{ width: '100%' }}>
        <AceEditor
          mode="text"
          theme="github"
          name="my-text-response"
          /*  value={JSON.stringify(variablesValue, null, '\t')} */
          onChange={handleVariablesChange}
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
