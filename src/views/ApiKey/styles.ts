import {StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';
import {Colors} from 'config';
import {rem} from 'utils';

export const getStyle = (insets: EdgeInsets) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingHorizontal: rem(16),
      backgroundColor: Colors.primary,
      alignItems: 'center',
    },
    input: {
      marginBottom: rem(16),
    },
  });
  return styles;
};
