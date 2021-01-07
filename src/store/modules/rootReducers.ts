import { combineReducers } from 'redux';

import { pomodoro } from './pomodoro/reducer';

import { StoreState } from '.';

export default combineReducers<StoreState>({
  pomodoro,
});
