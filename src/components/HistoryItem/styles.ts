import {StyleSheet} from 'react-native';
import {rem} from 'utils';

export const getStyle = () => {
  const styles = StyleSheet.create({
    container: {},
    image: {
      width: rem(343),
      height: rem(343),
    },
    indicator: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    },
  });
  return styles;
};
