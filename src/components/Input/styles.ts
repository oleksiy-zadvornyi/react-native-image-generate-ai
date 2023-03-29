import {Colors} from 'config';
import {StyleSheet} from 'react-native';
import {rem} from 'utils';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      borderRadius: rem(8),
      paddingHorizontal: rem(16),
      paddingVertical: rem(8),
      backgroundColor: Colors.secondary,
      fontFamily: 'Inter',
      fontSize: rem(16),
      fontWeight: '400',
      color: 'white',
    },
  });
  return styles;
};
