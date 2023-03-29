import React, {FC, useMemo, memo, useState, useEffect} from 'react';
import {ActivityIndicator, Alert, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import {ImagesResponseDataInner} from 'openai';
import HeaderComponent from 'components/Header';
import Input from 'components/Input';
import {reduceHistory} from 'modules/store/redux/actions';
import {HomeProps} from 'types/navigation';
import {IAppState} from 'types/state';
import {getOpenAIApi} from 'utils';

import {getStyle} from './styles';

const HomeComponent: FC<HomeProps> = memo(() => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => getStyle(insets), [insets]);
  const {apiKey} = useSelector((state: IAppState) => state.root);
  const [text, setText] = useState<string>('');
  const [image, setImage] = useState<ImagesResponseDataInner>();
  const [loading, setLoading] = useState<boolean>(false);
  const [openai, setOpenAI] = useState(getOpenAIApi(apiKey));

  useEffect(() => {
    setOpenAI(getOpenAIApi(apiKey));
  }, [apiKey]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await openai.createImage({
        prompt: text,
        n: 1,
        size: '1024x1024',
      });
      const {url} = response.data.data[0];
      if (url) {
        dispatch(reduceHistory({text, url}));
        setImage(response.data.data[0]);
      }
    } catch (e: any) {
      Alert.alert(e.message);
    }
  };

  return (
    <View style={styles.container}>
      <HeaderComponent label="Image Generator" />
      <Input
        style={styles.input}
        value={text}
        placeholder="Text for generate an image"
        placeholderTextColor="rgba(255,255,255,0.5)"
        returnKeyType="send"
        onChangeText={setText}
        onSubmitEditing={fetchData}
      />
      <View>
        <FastImage
          style={styles.image}
          resizeMode={FastImage.resizeMode.contain}
          source={{
            uri: image?.url,
          }}
          onLoadEnd={() => setLoading(false)}
        />

        <ActivityIndicator
          style={styles.indicator}
          animating={loading}
          size="large"
          color="rgba(255,255,255,0.5)"
        />
      </View>
    </View>
  );
});

export default HomeComponent;
