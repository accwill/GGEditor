import React from 'react';
import { withEditorContext } from 'gg-editor-customer';
import { EditorContextProps } from 'gg-editor-customer/lib/components/EditorContext';

interface WrappedFunctionComponentProps extends EditorContextProps {
  forwardRef?: React.Ref<HTMLDivElement>;
}

const WrappedFunctionComponent: React.FC<WrappedFunctionComponentProps> = props => {
  console.log('wrappedFunctionComponentProps:', props);

  return <div ref={props.forwardRef} />;
};

export default withEditorContext<WrappedFunctionComponentProps, HTMLDivElement>(WrappedFunctionComponent);
