import {Configuration, OpenAIApi} from 'openai';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');

export const rem = (val: number) => {
  return (width / 375) * val;
};

export const getOpenAIApi = (apiKey: string) => {
  const configuration = new Configuration({
    apiKey,
  });
  return new OpenAIApi(configuration);
};
