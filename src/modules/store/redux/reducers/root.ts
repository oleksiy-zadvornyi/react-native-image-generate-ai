import {IRootState} from 'types/state';
import {ActionType} from '../actions';

const initialState: IRootState = {
  apiKey: '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',
  history: [],
};

export default function reducer(
  state: IRootState = initialState,
  action: {type: string; payload: any},
) {
  switch (action.type) {
    case ActionType.reduceHistory: {
      let {history} = state;
      if (Array.isArray(action.payload)) {
        history = [...history, ...action.payload];
      } else {
        history = [...history, action.payload];
      }
      return {...state, history};
    }
    case ActionType.reduceApiKey: {
      return {
        ...state,
        apiKey: action.payload,
      };
    }
    default:
      return state;
  }
}
