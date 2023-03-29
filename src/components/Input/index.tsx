import React, {FC, useMemo, memo} from 'react';
import {TextInput, TextInputProps} from 'react-native';

import {getStyle} from './styles';

const InputComponent: FC<TextInputProps> = memo(props => {
  const styles = useMemo(() => getStyle(), []);

  return <TextInput {...props} style={[styles.container, props.style]} />;
});

export default InputComponent;
