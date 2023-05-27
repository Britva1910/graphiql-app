import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AceEditor from 'react-ace';
import { setVariablesValue } from '../../../storage/EditorFieldSlice';
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
          mode="javascript"
          theme="cobalt"
          name="my-text-variables"
          value={variablesValue}
          onChange={handleVariablesChange}
          width="100%"
          fontSize={16}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          editorProps={{ $blockScrolling: Infinity }}
          style={{ height: '100%' }}
          wrapEnabled={true}
          setOptions={{
            /*        enableBasicAutocompletion: false,
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
