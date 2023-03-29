import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type DrawerParamList = {
  Home: undefined;
  History: undefined;
  ApiKey: undefined;
};

export type HomeProps = NativeStackScreenProps<DrawerParamList, 'Home'>;
export type HistoryProps = NativeStackScreenProps<DrawerParamList, 'History'>;
export type ApiKeyProps = NativeStackScreenProps<DrawerParamList, 'ApiKey'>;
