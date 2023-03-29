import {Colors} from 'config';
import {StyleSheet} from 'react-native';
import {rem} from 'utils';

export const getStyle = () => {
  const styles = StyleSheet.create({
    flex: {
      flex: 1,
    },
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: rem(16),
    },
    label: {
      width: '100%',
      textAlign: 'center',
      fontFamily: 'Inter',
      fontSize: rem(24),
      fontWeight: '500',
      color: 'white',
      position: 'absolute',
      zIndex: -9999,
    },
    button: {
      padding: rem(4),
    },
  });
  return styles;
};
