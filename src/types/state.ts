export interface IAppState {
  root: IRootState;
}

export interface IRootState {
  history: IHistoryState[];
  apiKey: string;
}

export interface IHistoryState {
  text: string;
  url: string;
}
