import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IAppState} from 'types/state';

import saga from './saga';
import reducers from './redux/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['root'],
};

const persistedReducer = persistReducer<IAppState>(persistConfig, reducers);
const sagaMiddleware = createSagaMiddleware();
export default function configureStore() {
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  const persistor = persistStore(store);
  sagaMiddleware.run(saga);
  return {store, persistor};
}
