import {combineReducers} from 'redux';
import {IAppState} from 'types/state';

import root from './root';

export default combineReducers<IAppState>({
  root,
});
