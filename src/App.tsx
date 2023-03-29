import React, {FC} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-url-polyfill/auto';
import {RootNavigation} from 'modules/navigation';
import ReduxView from 'modules/store';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <ReduxView>
        <RootNavigation />
      </ReduxView>
    </SafeAreaProvider>
  );
};

export default App;
