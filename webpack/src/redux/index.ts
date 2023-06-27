import { combineReducers } from 'redux';
// @ts-ignore
import ReducerCount, { AppState } from './counter/counter.reducer.ts';
// @ts-ignore
import ReducerStringer, { AppStateString } from './name/name.reducer.ts';
// @ts-ignore
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