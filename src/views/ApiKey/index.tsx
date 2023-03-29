import React, {FC, useMemo, memo, useState} from 'react';
import {Alert, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HeaderComponent from 'components/Header';
import Button from 'components/Button';
import Input from 'components/Input';
import {reduceApiKey} from 'modules/store/redux/actions';
import {ApiKeyProps} from 'types/navigation';
import {IAppState} from 'types/state';

import {getStyle} from './styles';

const ApiKeyComponent: FC<ApiKeyProps> = memo(() => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => getStyle(insets), [insets]);
  const {apiKey} = useSelector((s: IAppState) => s.root);
  const [text, setText] = useState<string>(apiKey);

  const handleSaveApiKey = () => {
    Alert.alert('Do you want to keep the ApiKey?', undefined, [
      {text: 'Cancel', style: 'cancel'},
      {text: 'OK', onPress: () => dispatch(reduceApiKey(text))},
    ]);
  };

  return (
    <View style={styles.container}>
      <HeaderComponent label="ApiKey" />
      <Input
        style={styles.input}
        value={text}
        placeholder="Your ApiKey"
        placeholderTextColor="rgba(255,255,255,0.5)"
        returnKeyType="done"
        onChangeText={setText}
        onSubmitEditing={handleSaveApiKey}
      />
      <Button label="Save ApiKey" onPress={handleSaveApiKey} />
    </View>
  );
});

export default ApiKeyComponent;
