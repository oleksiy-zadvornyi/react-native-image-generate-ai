import {Colors} from 'config';
import {StyleSheet} from 'react-native';
import {rem} from 'utils';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.secondary,
      borderRadius: rem(8),
      paddingHorizontal: rem(16),
      paddingVertical: rem(8),
    },
    label: {
      width: '100%',
      textAlign: 'center',
      fontFamily: 'Inter',
      fontSize: rem(18),
      fontWeight: '400',
      color: 'white',
    },
  });
  return styles;
};
