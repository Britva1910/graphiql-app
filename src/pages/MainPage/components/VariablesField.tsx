import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AceEditor from 'react-ace';
import { setVariablesValue } from './EditorFieldSlice';
import { RootState } from '../../../storage/store';

export const Variables: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const variablesValue = useSelector((state: RootState) => state.editor.variables);
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
          value={variablesValue}
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
