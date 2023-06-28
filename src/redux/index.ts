import { combineReducers } from 'redux';

import ReducerCount, { AppState } from './counter/counter.reducer.ts';
import ReducerStringer, { AppStateString } from './name/name.reducer.ts';
import ReducerRikmorty, { initialStateRikMorty } from './rikmorty/rikmorty.reducer.ts';


export const rootReducer = combineReducers({
  number: ReducerCount,
  stringer: ReducerStringer,
  rikmorty: ReducerRikmorty
});

export interface RootState {
  number: AppState,
  stringer: AppStateString,
  rikmorty: initialStateRikMorty
}