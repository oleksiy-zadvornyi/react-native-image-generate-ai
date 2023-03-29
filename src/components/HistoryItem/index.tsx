import React, {FC, useMemo, memo, useState} from 'react';
import {ActivityIndicator, Alert, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {IHistoryState} from 'types/state';

import {getStyle} from './styles';

const HistoryItemComponent: FC<IHistoryState> = memo(({text, url}) => {
  const styles = useMemo(() => getStyle(), []);
  const [loading, setLoading] = useState<boolean>(false);

  const handlePress = () => Alert.alert(text);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <FastImage
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
        source={{
          uri: url,
        }}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />

      <ActivityIndicator
        style={styles.indicator}
        animating={loading}
        size="large"
        color="rgba(255,255,255,0.5)"
      />
    </TouchableOpacity>
  );
});

export default HistoryItemComponent;
