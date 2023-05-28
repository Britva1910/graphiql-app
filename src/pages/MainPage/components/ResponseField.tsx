import AceEditor from 'react-ace';
import { useSelector } from 'react-redux';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-solarized_dark';

import { RootState } from '../../../storage/store';

export const Response = () => {
  const responseValue = useSelector((state: RootState) => state.response.value);
  const responseError = useSelector((state: RootState) => state.response.error);

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <AceEditor
        mode="javascript"
        theme="cobalt"
        readOnly={true}
        name="my-text-response"
        value={responseValue ? responseValue : responseError}
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
