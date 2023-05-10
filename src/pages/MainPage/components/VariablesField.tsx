import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import AceEditor from 'react-ace';
import { setVariablesValue } from './VariablesFieldSlice';

export const Variables: React.FunctionComponent = () => {
  const variablesValue = useSelector((state: RootState) => state.variables.value);
  const dispatch = useDispatch();

  const handleVariablesChange = async (value: string) => {
    const NewValue = JSON.parse(value);
    dispatch(setVariablesValue(NewValue));
  };

  return (
    <>
      <div>
        VARIABLES
        <AceEditor
          mode="text"
          theme="github"
          name="my-text-response"
          value={JSON.stringify(variablesValue, null, '\t')}
          onChange={handleVariablesChange}
          width="400px"
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
