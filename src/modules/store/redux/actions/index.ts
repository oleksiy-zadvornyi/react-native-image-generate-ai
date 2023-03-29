import {IHistoryState} from 'types/state';

export const ActionType = {
  reduceHistory: 'reduceHistory',
  reduceApiKey: 'reduceApiKey',
};

export const reduceHistory = (payload: IHistoryState | IHistoryState[]) => ({
  type: ActionType.reduceHistory,
  payload,
});

export const reduceApiKey = (payload: string) => ({
  type: ActionType.reduceApiKey,
  payload,
});
