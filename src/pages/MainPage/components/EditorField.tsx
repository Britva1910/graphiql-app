import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-cobalt';

import { RootState } from '../../../storage/store';
import { setEditorValue } from '../../../storage/EditorFieldSlice';
import FetchApiButton from './FetchApiButton';

export const EditorField: React.FC = () => {
  const editorValue = useSelector((state: RootState) => state.editor.value);

  const dispatch = useDispatch();

  const handleEditorChange = (newValue: string) => {
    dispatch(setEditorValue(newValue));
  };

  return (
    <div style={{ display: 'flex', height: '100%', position: 'relative' }}>
      <FetchApiButton />

      <AceEditor
        mode="javascript"
        theme="cobalt"
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
          useWorker: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};
