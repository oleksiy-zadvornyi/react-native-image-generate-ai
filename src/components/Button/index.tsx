import React, {FC, useMemo, memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {getStyle} from './styles';

interface ButtonProps {
  label: string;
  onPress: () => void;
}

const ButtonComponent: FC<ButtonProps> = memo(({label, onPress}) => {
  const styles = useMemo(() => getStyle(), []);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
});

export default ButtonComponent;
